
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line } from 'recharts';
import StatsCard from "@/components/StatsCard";
import { Calendar, Download, TrendingUp, Target, Activity, Award } from "lucide-react";

const performanceData = [
  { month: 'Jan', profit: 2400, loss: -800, trades: 24 },
  { month: 'Feb', profit: 1800, loss: -1200, trades: 18 },
  { month: 'Mar', profit: 3200, loss: -600, trades: 32 },
  { month: 'Apr', profit: 2800, loss: -900, trades: 28 },
  { month: 'May', profit: 2200, loss: -1100, trades: 22 },
  { month: 'Jun', profit: 3600, loss: -400, trades: 36 },
];

const winRateData = [
  { week: 'W1', winRate: 65 },
  { week: 'W2', winRate: 72 },
  { week: 'W3', winRate: 58 },
  { week: 'W4', winRate: 69 },
  { week: 'W5', winRate: 75 },
  { week: 'W6', winRate: 68 },
];

const Reports = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Reports</h1>
          <p className="text-muted-foreground">
            Comprehensive trading performance analysis
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <Select defaultValue="month">
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="week">This Week</SelectItem>
              <SelectItem value="month">This Month</SelectItem>
              <SelectItem value="quarter">This Quarter</SelectItem>
              <SelectItem value="year">This Year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export
          </Button>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Net Profit"
          value="$12,480"
          change="+18.2% from last month"
          changeType="positive"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Avg Win Rate"
          value="68.5%"
          change="+3.2% from last month"
          changeType="positive"
          icon={<Target className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Total Trades"
          value="156"
          change="+12 from last month"
          changeType="positive"
          icon={<Activity className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Profit Factor"
          value="2.3"
          change="+0.4 from last month"
          changeType="positive"
          icon={<Award className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Monthly P&L */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly P&L Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="profit" fill="hsl(var(--success))" name="Profit" />
                <Bar dataKey="loss" fill="hsl(var(--destructive))" name="Loss" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Win Rate Trend */}
        <Card>
          <CardHeader>
            <CardTitle>Win Rate Trend</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={winRateData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="week" />
                <YAxis domain={[0, 100]} />
                <Tooltip formatter={(value) => [`${value}%`, 'Win Rate']} />
                <Line 
                  type="monotone" 
                  dataKey="winRate" 
                  stroke="hsl(var(--primary))" 
                  strokeWidth={2}
                  dot={{ fill: 'hsl(var(--primary))' }}
                />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Reports */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Trading Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Total Trades</span>
              <span className="font-medium">156</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Winning Trades</span>
              <span className="font-medium text-green-600">107</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Losing Trades</span>
              <span className="font-medium text-red-600">49</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Win Rate</span>
              <span className="font-medium">68.5%</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Risk Metrics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Sharpe Ratio</span>
              <span className="font-medium">1.42</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Max Drawdown</span>
              <span className="font-medium text-red-600">-8.5%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Profit Factor</span>
              <span className="font-medium">2.3</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Risk/Reward</span>
              <span className="font-medium">1:2.1</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Best Performers</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span className="text-muted-foreground">Best Day</span>
              <span className="font-medium text-green-600">+$1,240</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Best Trade</span>
              <span className="font-medium text-green-600">+$890</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Best Symbol</span>
              <span className="font-medium">AAPL</span>
            </div>
            <div className="flex justify-between">
              <span className="text-muted-foreground">Avg Win</span>
              <span className="font-medium text-green-600">+$284</span>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
