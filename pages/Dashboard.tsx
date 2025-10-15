
import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import DailyPerformanceChart from '../components/charts/DailyPerformanceChart';
import FleetStatusPieChart from '../components/charts/FleetStatusPieChart';
import { getDashboardData } from '../services/mockApi';
import { Car, CalendarCheck, AlertTriangle } from 'lucide-react';

interface DashboardState {
    fleetStatus: {
        operational: number;
        maintenance: number;
        outOfService: number;
    };
    leaveRequests: {
        pending: number;
        approved: number;
    };
    dailyPerformance: { name: string; deliveries: number }[];
}

const Dashboard: React.FC = () => {
  const [data, setData] = useState<DashboardState | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getDashboardData() as DashboardState;
        setData(result);
      } catch (error) {
        console.error("Failed to fetch dashboard data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading || !data) {
    return <div className="flex justify-center items-center h-full">Loading dashboard...</div>;
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card title="Operational Vehicles" icon={<Car className="w-6 h-6" />}>
          {data.fleetStatus.operational}
        </Card>
        <Card title="Pending Leave Requests" icon={<CalendarCheck className="w-6 h-6" />}>
          {data.leaveRequests.pending}
        </Card>
        <Card title="Vehicles in Maintenance" icon={<AlertTriangle className="w-6 h-6" />} className="text-amber-600">
          {data.fleetStatus.maintenance}
        </Card>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3">
          <DailyPerformanceChart data={data.dailyPerformance} />
        </div>
        <div className="lg:col-span-2">
          <FleetStatusPieChart data={data.fleetStatus} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
