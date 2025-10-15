
import React, { useState, useEffect } from 'react';
import { getLeaveRequests, updateLeaveRequestStatus } from '../services/mockApi';
import { LeaveRequest, LeaveStatus, UserRole } from '../types';
import { useAuth } from '../contexts/AuthContext';
import { PlusCircle, Check, X } from 'lucide-react';

const LeaveManagement: React.FC = () => {
    const [requests, setRequests] = useState<LeaveRequest[]>([]);
    const [loading, setLoading] = useState(true);
    const { user } = useAuth();

    const isManager = user?.role === UserRole.MANAGER || user?.role === UserRole.ADMIN;

    const fetchData = async () => {
        setLoading(true);
        const data = await getLeaveRequests();
        setRequests(data);
        setLoading(false);
    };

    useEffect(() => {
        fetchData();
    }, []);

    const handleStatusUpdate = async (id: string, status: LeaveStatus) => {
        await updateLeaveRequestStatus(id, status);
        fetchData(); // Refresh list
    };
    
    const getStatusBadge = (status: LeaveStatus) => {
        switch (status) {
            case LeaveStatus.APPROVED: return 'bg-green-100 text-green-800';
            case LeaveStatus.PENDING: return 'bg-yellow-100 text-yellow-800';
            case LeaveStatus.REJECTED: return 'bg-red-100 text-red-800';
        }
    };
    
    return (
        <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-gray-800">Leave Management</h2>
                <button className="flex items-center bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors">
                    <PlusCircle className="w-5 h-5 mr-2" />
                    Request Leave
                </button>
            </div>
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Employee</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Type</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dates</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reason</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                            {isManager && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>}
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {loading ? (
                             <tr><td colSpan={isManager ? 6 : 5} className="text-center py-4">Loading requests...</td></tr>
                        ) : (
                            requests.map((req) => (
                                <tr key={req.id} className="hover:bg-gray-50">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{req.employeeName}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{req.startDate} to {req.endDate}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">{req.reason}</td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusBadge(req.status)}`}>
                                            {req.status}
                                        </span>
                                    </td>
                                    {isManager && (
                                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium space-x-2">
                                            {req.status === LeaveStatus.PENDING && (
                                                <>
                                                    <button onClick={() => handleStatusUpdate(req.id, LeaveStatus.APPROVED)} className="p-1 rounded-full text-green-600 hover:bg-green-100"><Check className="w-5 h-5"/></button>
                                                    <button onClick={() => handleStatusUpdate(req.id, LeaveStatus.REJECTED)} className="p-1 rounded-full text-red-600 hover:bg-red-100"><X className="w-5 h-5"/></button>
                                                </>
                                            )}
                                        </td>
                                    )}
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default LeaveManagement;
