
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface PerformanceData {
    name: string;
    deliveries: number;
}

interface DailyPerformanceChartProps {
    data: PerformanceData[];
}

const DailyPerformanceChart: React.FC<DailyPerformanceChartProps> = ({ data }) => {
    return (
        <div className="bg-white p-6 rounded-xl shadow-md h-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Weekly Delivery Performance</h3>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <YAxis tick={{ fill: '#6B7280', fontSize: 12 }} />
                    <Tooltip
                        contentStyle={{
                            backgroundColor: 'white',
                            border: '1px solid #e5e7eb',
                            borderRadius: '0.5rem'
                        }}
                    />
                    <Legend iconType="circle" iconSize={8} />
                    <Bar dataKey="deliveries" fill="#4f46e5" name="Total Deliveries" barSize={30} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default DailyPerformanceChart;
