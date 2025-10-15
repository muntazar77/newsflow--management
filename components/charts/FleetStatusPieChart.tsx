
import React from 'react';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface FleetStatusData {
    operational: number;
    maintenance: number;
    outOfService: number;
}

interface FleetStatusPieChartProps {
    data: FleetStatusData;
}

const FleetStatusPieChart: React.FC<FleetStatusPieChartProps> = ({ data }) => {
    const chartData = [
        { name: 'Operational', value: data.operational },
        { name: 'Maintenance', value: data.maintenance },
        { name: 'Out of Service', value: data.outOfService },
    ];
    const COLORS = ['#10b981', '#f59e0b', '#ef4444'];

    return (
        <div className="bg-white p-6 rounded-xl shadow-md h-96">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Fleet Status</h3>
            <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                    <Pie
                        data={chartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {chartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend iconType="circle" iconSize={10} />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default FleetStatusPieChart;
