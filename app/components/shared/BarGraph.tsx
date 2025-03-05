'use client';

import { AnimeStatisticsData } from '@/app/types/AnimeStatisticsData';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';


function getIntroOfPage(label: string) {
    if(label === 'watching') return 'The number of people who are currently watching this anime.';
    if(label === 'completed') return 'The number of people who have completed this anime.';
    if(label === 'on_hold') return 'The number of people who have put this anime on hold.';
    if(label === 'dropped') return 'The number of people who have dropped this anime.';
    if(label === 'plan_to_watch') return 'The number of people who plan to watch this anime.';
    if(label === 'total') return 'The total number of people who have this anime in their list.';
    return '';
}

function CustomTooltip({ active, payload, label }: any) {
    if(active) {
        return (
            <div className="bg-secondarydark p-4 rounded-lg shadow-lg">
                <p className="text-white">{getIntroOfPage(label)}</p>
                <p className="text-white">{`Users: ${payload[0].value}`}</p>
            </div>
        );
    }
}

function formatData(data: AnimeStatisticsData | undefined) {
    if (!data) return [];
    return Object.entries(data)
        .slice(0, -1) // exclude scores
        .map(([key, value]) => ({ name: key, value }));
}

interface BarGraphProps {
    rawData: AnimeStatisticsData | undefined;
};

const BarGraph = ({ rawData }: BarGraphProps) => {

    console.log(formatData(rawData));

    return (
        <div className="w-full max-w-[1600px] h-[500px] bg-secondarydark rounded-lg shadow-lg p-8">
            <div>
                <h2 className="flex justify-center items-center text-2xl font-bold text-white">
                    Anime Statistics
                </h2>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={formatData(rawData)} margin={ {top: 40, right: 40, left: 40, bottom: 40} }>
                    <XAxis dataKey="name" label={{ value: 'Status', position: 'insideBottom', offset: -20 }}/>
                    <YAxis />
                    <Tooltip content={<CustomTooltip />}/>
                    <Legend />
                    <Bar dataKey="value" fill="#75b7ea" legendType='none'/>
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarGraph;