
import React from 'react';
import Card from '../components/Card';
import { Banknote, FileDown, Landmark } from 'lucide-react';

const Payroll: React.FC = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800">Payroll & Finance</h2>
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    <FileDown className="w-5 h-5 mr-2" />
                    Export Reports
                </button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card title="This Month's Payroll" icon={<Banknote className="w-6 h-6" />}>
                    €125,480.50
                </Card>
                <Card title="Distributor Compensation" icon={<Landmark className="w-6 h-6" />}>
                     €32,150.25
                </Card>
                <Card title="Fleet Maintenance Costs" icon={<Banknote className="w-6 h-6" />}>
                     €4,890.00
                </Card>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md mt-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Module Overview</h3>
                <p className="text-gray-600">
                    This module will integrate financial data from all other parts of the system. It will provide automated calculations for salaries, allowances, overtime, and reimbursements for distributors using their own vehicles.
                </p>
                <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                    <li>Automated salary calculation and payslip generation.</li>
                    <li>Financial reporting for compensations, maintenance, and overall payroll.</li>
                    <li>Exportable reports for accounting software and audits.</li>
                    <li>Real-time tracking of operational expenses.</li>
                </ul>
            </div>
        </div>
    );
};

export default Payroll;
