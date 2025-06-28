
import { DollarSign, TrendingUp, Activity, Users } from "lucide-react";
import StatsCard from "@/components/StatsCard";
import PerformanceChart from "@/components/PerformanceChart";
import RecentTrades from "@/components/RecentTrades";

const Dashboard = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome back! Here's your trading performance overview.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total P&L"
          value="$35,680"
          change="+12.5% from last month"
          changeType="positive"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Win Rate"
          value="68.4%"
          change="+2.1% from last month"
          changeType="positive"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Total Trades"
          value="247"
          change="+15 from last month"
          changeType="positive"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Active Positions"
          value="12"
          change="2 new today"
          changeType="neutral"
          icon={<Users className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      {/* Charts and Recent Trades */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <PerformanceChart />
        <RecentTrades />
      </div>
    </div>
  );
};

export default Dashboard;
