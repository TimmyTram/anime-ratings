import { AnimeStatisticsData } from '@/app/types/AnimeStatisticsData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Divider from '@/app/components/ui/Divider';
import { MangaStatisticsData } from '@/app/types/MangaStatisticsData';
import Collapsible from '../ui/Collapsible';

function getTooltipContent(label: string, type: 'status' | 'score', category: 'anime' | 'manga'): string {
    if (type === 'status') {
        switch (label) {
            case 'completed': return `The number of people who have completed this ${category}.`;
            case 'on_hold': return `The number of people who have put this ${category} on hold.`;
            case 'dropped': return `The number of people who have dropped this ${category}.`;
            case 'total': return `The total number of people who have this ${category} in their list.`;
            case 'watching': return 'The number of people who are currently watching this anime.';
            case 'plan_to_watch': return 'The number of people who plan to watch this anime.';
            case 'reading': return 'The number of people who are currently reading this manga.';
            case 'plan_to_read': return 'The number of people who plan to read this manga.';
            default: return '';
        }
    } else if (type === 'score') {
        return `The number of people who rated this ${category} a score of ${label}.`;
    }
    return '';
}


function WatchTooltip({ active, payload, label, type, category }: any) {
    if (active && payload && payload.length) {
        return (
            <div className="bg-secondarydark p-4 rounded-lg shadow-lg">
                <p className="text-white">{getTooltipContent(label, type, category)}</p>
                <p className="text-white">{`Users: ${payload[0].value}`}</p>
            </div>
        );
    }
}

function formatData(data: AnimeStatisticsData | MangaStatisticsData | undefined) {
    if (!data) return [];
    return Object.entries(data)
        .slice(0, 6) // exclude scores
        .map(([key, value]) => ({ name: key, value }));
}

function formatScores(data: AnimeStatisticsData | MangaStatisticsData | undefined) {
    if (!data || !data.scores) return [];
    return data.scores.map((score) => ({
        name: score.score.toString(), // convert to string for tooltips
        value: score.votes
    }));
}

interface BarGraphProps {
    rawData: AnimeStatisticsData | MangaStatisticsData | undefined;
    type: 'anime' | 'manga';
};

const BarGraph = ({ rawData, type }: BarGraphProps) => {
    if (!rawData) {
        return <div>Loading data...</div>;
    }

    const formattedData = formatData(rawData);
    const formattedScores = formatScores(rawData);

    return (
        <Collapsible title="Statistics" className="w-full max-w-[1600px] shadow-lg">
            <div className="flex flex-col p-8 gap-8">
                <div>
                    <h2 className="flex justify-center items-center text-2xl font-bold text-white">
                        {`${type === 'anime' ? 'Anime' : 'Manga'} Watch Status Statistics`}
                    </h2>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={formattedData} margin={{ top: 40, right: 40, left: 40, bottom: 40 }}>
                        <XAxis dataKey="name" label={{ value: 'Status', position: 'insideBottom', offset: -20 }} />
                        <YAxis />
                        <Tooltip content={<WatchTooltip type="status" category={type} />} />
                        <Legend />
                        <Bar dataKey="value" fill="#75b7ea" legendType="none" />
                    </BarChart>
                </ResponsiveContainer>
                <Divider />
                <div>
                    <h2 className="flex justify-center items-center text-2xl font-bold text-white">
                        {`${type === 'anime' ? 'Anime' : 'Manga'} Score Statistics`}
                    </h2>
                </div>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={formattedScores} margin={{ top: 40, right: 40, left: 40, bottom: 40 }}>
                        <XAxis dataKey="name" label={{ value: 'Scores', position: 'insideBottom', offset: -20 }} />
                        <YAxis />
                        <Tooltip content={<WatchTooltip type="score" category={type} />} />
                        <Legend />
                        <Bar dataKey="value" fill="#75b7ea" legendType="none" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </Collapsible>
    );
};

export default BarGraph;