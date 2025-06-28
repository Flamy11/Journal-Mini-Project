
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import StatsCard from "@/components/StatsCard";
import { DollarSign, TrendingUp, PieChart as PieChartIcon, Target } from "lucide-react";

const portfolioData = [
  { name: 'AAPL', value: 25, amount: 8750, color: '#247f96' },
  { name: 'MSFT', value: 20, amount: 7000, color: '#2dd4bf' },
  { name: 'GOOGL', value: 15, amount: 5250, color: '#f59e0b' },
  { name: 'TSLA', value: 12, amount: 4200, color: '#ef4444' },
  { name: 'NVDA', value: 10, amount: 3500, color: '#8b5cf6' },
  { name: 'Others', value: 18, amount: 6300, color: '#6b7280' }
];

const monthlyReturns = [
  { month: 'Jan', returns: 8.5 },
  { month: 'Feb', returns: -2.3 },
  { month: 'Mar', returns: 12.1 },
  { month: 'Apr', returns: 5.7 },
  { month: 'May', returns: -1.8 },
  { month: 'Jun', returns: 9.4 },
];

const positions = [
  {
    symbol: 'AAPL',
    shares: 50,
    avgPrice: 175.00,
    currentPrice: 182.30,
    value: 9115,
    pnl: 365,
    pnlPercent: 4.2,
    allocation: 25.0
  },
  {
    symbol: 'MSFT',
    shares: 18,
    avgPrice: 385.50,
    currentPrice: 388.90,
    value: 7000,
    pnl: 61.20,
    pnlPercent: 0.88,
    allocation: 19.2
  },
  {
    symbol: 'GOOGL',
    shares: 35,
    avgPrice: 145.20,
    currentPrice: 150.00,
    value: 5250,
    pnl: 168,
    pnlPercent: 3.3,
    allocation: 14.4
  },
  {
    symbol: 'TSLA',
    shares: 17,
    avgPrice: 240.00,
    currentPrice: 247.00,
    value: 4199,
    pnl: 119,
    pnlPercent: 2.9,
    allocation: 11.5
  }
];

const Portfolio = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Portfolio</h1>
        <p className="text-muted-foreground">
          Track your current positions and portfolio allocation
        </p>
      </div>

      {/* Portfolio Stats */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Portfolio Value"
          value="$36,480"
          change="+4.2% today"
          changeType="positive"
          icon={<DollarSign className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Total Return"
          value="$3,480"
          change="+10.5% all time"
          changeType="positive"
          icon={<TrendingUp className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Day's P&L"
          value="+$425"
          change="+1.18% today"
          changeType="positive"
          icon={<Target className="h-4 w-4 text-muted-foreground" />}
        />
        <StatsCard
          title="Positions"
          value="8"
          change="2 added this week"
          changeType="neutral"
          icon={<PieChartIcon className="h-4 w-4 text-muted-foreground" />}
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {/* Portfolio Allocation */}
        <Card>
          <CardHeader>
            <CardTitle>Portfolio Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={portfolioData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({name, value}) => `${name}: ${value}%`}
                >
                  {portfolioData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Returns */}
        <Card>
          <CardHeader>
            <CardTitle>Monthly Returns</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={monthlyReturns}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, 'Return']} />
                <Bar 
                  dataKey="returns" 
                  fill="hsl(var(--primary))"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Current Positions */}
      <Card>
        <CardHeader>
          <CardTitle>Current Positions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {positions.map((position) => (
              <div key={position.symbol} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <h3 className="font-semibold">{position.symbol}</h3>
                    <p className="text-sm text-muted-foreground">
                      {position.shares} shares @ ${position.avgPrice.toFixed(2)}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-8">
                  <div className="text-right">
                    <p className="font-medium">${position.currentPrice.toFixed(2)}</p>
                    <p className="text-sm text-muted-foreground">Current Price</p>
                  </div>
                  
                  <div className="text-right">
                    <p className="font-medium">${position.value.toLocaleString()}</p>
                    <p className="text-sm text-muted-foreground">Market Value</p>
                  </div>
                  
                  <div className="text-right">
                    <p className={`font-medium ${
                      position.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {position.pnl >= 0 ? '+' : ''}${position.pnl.toFixed(2)}
                    </p>
                    <p className={`text-sm ${
                      position.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {position.pnl >= 0 ? '+' : ''}{position.pnlPercent.toFixed(2)}%
                    </p>
                  </div>
                  
                  <div className="w-24">
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span>Allocation</span>
                      <span>{position.allocation.toFixed(1)}%</span>
                    </div>
                    <Progress value={position.allocation} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Portfolio;
