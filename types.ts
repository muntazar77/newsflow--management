
export enum UserRole {
  ADMIN = 'Administrator',
  MANAGER = 'Manager',
  EMPLOYEE = 'Employee',
  DISTRIBUTOR = 'Distributor',
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatarUrl: string;
}

export interface Vehicle {
  id: string;
  model: string;
  licensePlate: string;
  driver: string;
  status: 'Operational' | 'Maintenance' | 'Out of Service';
  nextService: string; // Date string
  mileage: number;
}

export enum LeaveType {
    SICK = 'Sick Leave',
    URGENT = 'Urgent Leave',
    REGULAR = 'Regular Vacation',
}

export enum LeaveStatus {
    PENDING = 'Pending',
    APPROVED = 'Approved',
    REJECTED = 'Rejected',
}

export interface LeaveRequest {
  id: string;
  employeeName: string;
  employeeId: string;
  type: LeaveType;
  startDate: string; // Date string
  endDate: string; // Date string
  reason: string;
  status: LeaveStatus;
}

export interface WorkLog {
  id: string;
  employeeName: string;
  date: string;
  checkIn: string; // Time string
  checkOut: string; // Time string
  hours: number;
  deliveries: number;
}
