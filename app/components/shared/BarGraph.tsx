import { AnimeStatisticsData } from '@/app/types/AnimeStatisticsData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Divider from '@/app/components/ui/Divider';

function getTooltipContent(label: string, type: 'status' | 'score') {
    if (type === 'status') {
        switch (label) {
            case 'watching': return 'The number of people who are currently watching this anime.';
            case 'completed': return 'The number of people who have completed this anime.';
            case 'on_hold': return 'The number of people who have put this anime on hold.';
            case 'dropped': return 'The number of people who have dropped this anime.';
            case 'plan_to_watch': return 'The number of people who plan to watch this anime.';
            case 'total': return 'The total number of people who have this anime in their list.';
            default: return '';
        }
    } else if (type === 'score') {
        return `The number of people who rated this anime ${label}.`;
    }
    return '';
}


function WatchTooltip({ active, payload, label, type }: any) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-secondarydark p-4 rounded-lg shadow-lg">
                <p className="text-white">{getTooltipContent(label, type)}</p>
                <p className="text-white">{`Users: ${payload[0].value}`}</p>
            </div>
        );
    }
}

function formatData(data: AnimeStatisticsData | undefined) {
    if (!data) return [];
    return Object.entries(data)
        .slice(0, 5) // exclude scores
        .map(([key, value]) => ({ name: key, value }));
}

function formatScores(data: AnimeStatisticsData | undefined) {
    if (!data || !data.scores) return [];
    return data.scores.map((score) => ({ 
        name: score.score.toString(), // convert to string for tooltips
        value: score.votes 
    }));
}

interface BarGraphProps {
    rawData: AnimeStatisticsData | undefined;
};

const BarGraph = ({ rawData }: BarGraphProps) => {
    if (!rawData) {
        return <div>Loading data...</div>;
    }

    const formattedData = formatData(rawData);
    const formattedScores = formatScores(rawData);

    // console.log("[INFO]: Rendering BarGraph component. rawData:", rawData);
    // console.log("[BarGraph] formattedData:", formattedData);
    // console.log("[BarGraph] formattedScores:", formattedScores);

    return (
        <div className="flex flex-col w-full max-w-[1600px] bg-secondarydark rounded-lg shadow-lg p-8 gap-8">
            <div>
                <h2 className="flex justify-center items-center text-2xl font-bold text-white">
                    Anime Status Statistics
                </h2>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={formattedData} margin={{ top: 40, right: 40, left: 40, bottom: 40 }}>
                    <XAxis dataKey="name" label={{ value: 'Status', position: 'insideBottom', offset: -20 }} />
                    <YAxis />
                    <Tooltip content={<WatchTooltip type="status" />} />
                    <Legend />
                    <Bar dataKey="value" fill="#75b7ea" legendType="none" />
                </BarChart>
            </ResponsiveContainer>
            <Divider />
            <div>
                <h2 className="flex justify-center items-center text-2xl font-bold text-white">
                    Anime Scoring Statistics
                </h2>
            </div>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart data={formattedScores} margin={{ top: 40, right: 40, left: 40, bottom: 40 }}>
                    <XAxis dataKey="name" label={{ value: 'Scores', position: 'insideBottom', offset: -20 }} />
                    <YAxis />
                    <Tooltip content={<WatchTooltip type="score" />} />
                    <Legend />
                    <Bar dataKey="value" fill="#75b7ea" legendType="none"/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarGraph;