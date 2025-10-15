
import { User, UserRole, Vehicle, LeaveRequest, LeaveType, LeaveStatus, WorkLog } from '../types';

export const MOCK_USERS: User[] = [
  { id: '1', name: 'Admin User', email: 'admin@newsflow.com', role: UserRole.ADMIN, avatarUrl: 'https://i.pravatar.cc/150?u=admin' },
  { id: '2', name: 'Manager Mike', email: 'manager@newsflow.com', role: UserRole.MANAGER, avatarUrl: 'https://i.pravatar.cc/150?u=manager' },
  { id: '3', name: 'Employee Emma', email: 'employee@newsflow.com', role: UserRole.EMPLOYEE, avatarUrl: 'https://i.pravatar.cc/150?u=employee' },
  { id: '4', name: 'Distributor Dave', email: 'distributor@newsflow.com', role: UserRole.DISTRIBUTOR, avatarUrl: 'https://i.pravatar.cc/150?u=distributor' },
];


export const MOCK_VEHICLES: Vehicle[] = [
  { id: 'v1', model: 'VW Transporter', licensePlate: 'B-NV-1234', driver: 'John Doe', status: 'Operational', nextService: '2024-10-15', mileage: 125430 },
  { id: 'v2', model: 'Ford Transit', licensePlate: 'B-FT-5678', driver: 'Jane Smith', status: 'Operational', nextService: '2024-09-22', mileage: 89210 },
  { id: 'v3', model: 'Mercedes Sprinter', licensePlate: 'B-MS-9101', driver: 'Peter Jones', status: 'Maintenance', nextService: '2024-08-01', mileage: 210500 },
  { id: 'v4', model: 'Renault Kangoo', licensePlate: 'B-RK-1121', driver: 'Mary Williams', status: 'Operational', nextService: '2025-01-05', mileage: 45300 },
  { id: 'v5', model: 'VW Caddy', licensePlate: 'B-VC-3141', driver: 'David Brown', status: 'Out of Service', nextService: 'N/A', mileage: 350180 },
];

export let MOCK_LEAVE_REQUESTS: LeaveRequest[] = [
  { id: 'l1', employeeName: 'Employee Emma', employeeId: '3', type: LeaveType.REGULAR, startDate: '2024-09-02', endDate: '2024-09-13', reason: 'Annual vacation', status: LeaveStatus.APPROVED },
  { id: 'l2', employeeName: 'Distributor Dave', employeeId: '4', type: LeaveType.SICK, startDate: '2024-08-19', endDate: '2024-08-20', reason: 'Flu', status: LeaveStatus.APPROVED },
  { id: 'l3', employeeName: 'John Doe', employeeId: '5', type: LeaveType.REGULAR, startDate: '2024-10-01', endDate: '2024-10-05', reason: 'Family trip', status: LeaveStatus.PENDING },
  { id: 'l4', employeeName: 'Jane Smith', employeeId: '6', type: LeaveType.URGENT, startDate: '2024-08-22', endDate: '2024-08-22', reason: 'Family emergency', status: LeaveStatus.PENDING },
  { id: 'l5', employeeName: 'Peter Jones', employeeId: '7', type: LeaveType.REGULAR, startDate: '2024-07-15', endDate: '2024-07-20', reason: 'Summer break', status: LeaveStatus.REJECTED },
];

export const MOCK_WORK_LOGS: WorkLog[] = [
    { id: 'w1', employeeName: 'Distributor Dave', date: '2024-08-18', checkIn: '03:00', checkOut: '07:30', hours: 4.5, deliveries: 250 },
    { id: 'w2', employeeName: 'John Doe', date: '2024-08-18', checkIn: '02:45', checkOut: '07:15', hours: 4.5, deliveries: 235 },
    { id: 'w3', employeeName: 'Jane Smith', date: '2024-08-18', checkIn: '03:15', checkOut: '08:00', hours: 4.75, deliveries: 260 },
    { id: 'w4', employeeName: 'Mary Williams', date: '2024-08-18', checkIn: '03:00', checkOut: '07:45', hours: 4.75, deliveries: 255 },
    { id: 'w5', employeeName: 'Distributor Dave', date: '2024-08-17', checkIn: '03:05', checkOut: '07:40', hours: 4.58, deliveries: 252 },
];


export const getDashboardData = async () => {
  return new Promise(resolve => setTimeout(() => resolve({
    fleetStatus: {
        operational: MOCK_VEHICLES.filter(v => v.status === 'Operational').length,
        maintenance: MOCK_VEHICLES.filter(v => v.status === 'Maintenance').length,
        outOfService: MOCK_VEHICLES.filter(v => v.status === 'Out of Service').length,
    },
    leaveRequests: {
        pending: MOCK_LEAVE_REQUESTS.filter(l => l.status === 'Pending').length,
        approved: MOCK_LEAVE_REQUESTS.filter(l => l.status === 'Approved').length,
    },
    dailyPerformance: [
        { name: 'Mon', deliveries: 4800 },
        { name: 'Tue', deliveries: 5200 },
        { name: 'Wed', deliveries: 4900 },
        { name: 'Thu', deliveries: 5300 },
        { name: 'Fri', deliveries: 5500 },
        { name: 'Sat', deliveries: 6100 },
        { name: 'Sun', deliveries: 6200 },
    ],
  }), 500));
};

export const getVehicles = async () => {
    return new Promise<Vehicle[]>(resolve => setTimeout(() => resolve(MOCK_VEHICLES), 300));
}

export const getLeaveRequests = async () => {
    return new Promise<LeaveRequest[]>(resolve => setTimeout(() => resolve(MOCK_LEAVE_REQUESTS), 300));
}

export const updateLeaveRequestStatus = async (id: string, status: LeaveStatus) => {
    return new Promise<LeaveRequest>(resolve => setTimeout(() => {
        const requestIndex = MOCK_LEAVE_REQUESTS.findIndex(req => req.id === id);
        MOCK_LEAVE_REQUESTS[requestIndex].status = status;
        resolve(MOCK_LEAVE_REQUESTS[requestIndex]);
    }, 200));
}

export const getWorkLogs = async () => {
    return new Promise<WorkLog[]>(resolve => setTimeout(() => resolve(MOCK_WORK_LOGS), 300));
}
