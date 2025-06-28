
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Target, Clock, DollarSign } from "lucide-react";

const riskRewardData = [
  { risk: 1.2, reward: 2.8, trades: 15 },
  { risk: 0.8, reward: 1.9, trades: 22 },
  { risk: 1.5, reward: 3.2, trades: 8 },
  { risk: 2.1, reward: 4.5, trades: 12 },
  { risk: 0.9, reward: 2.1, trades: 28 },
  { risk: 1.8, reward: 3.8, trades: 18 },
];

const timeAnalysis = [
  { hour: '9:30', pnl: 120, trades: 8 },
  { hour: '10:00', pnl: 85, trades: 12 },
  { hour: '10:30', pnl: 210, trades: 15 },
  { hour: '11:00', pnl: 95, trades: 10 },
  { hour: '11:30', pnl: 180, trades: 14 },
  { hour: '12:00', pnl: 45, trades: 6 },
  { hour: '12:30', pnl: 65, trades: 4 },
  { hour: '13:00', pnl: 135, trades: 11 },
  { hour: '13:30', pnl: 195, trades: 16 },
  { hour: '14:00', pnl: 160, trades: 13 },
  { hour: '14:30', pnl: 240, trades: 19 },
  { hour: '15:00', pnl: 205, trades: 17 },
  { hour: '15:30', pnl: 110, trades: 9 },
];

const sectorData = [
  { name: 'Technology', value: 35, pnl: 2400, color: '#247f96' },
  { name: 'Healthcare', value: 20, pnl: 1800, color: '#10b981' },
  { name: 'Finance', value: 18, pnl: 1200, color: '#f59e0b' },
  { name: 'Energy', value: 15, pnl: 980, color: '#ef4444' },
  { name: 'Consumer', value: 12, pnl: 650, color: '#8b5cf6' }
];

const tradingStrategies = [
  { name: 'Momentum', winRate: 72, trades: 45, avgReturn: 4.2, pnl: 3200 },
  { name: 'Mean Reversion', winRate: 68, trades: 38, avgReturn: 3.8, pnl: 2800 },
  { name: 'Breakout', winRate: 65, trades: 32, avgReturn: 3.5, pnl: 2200 },
  { name: 'Swing', winRate: 74, trades: 28, avgReturn: 4.8, pnl: 3600 },
];

const Analytics = () => {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Analytics</h1>
        <p className="text-muted-foreground">
          Deep dive into your trading patterns and performance metrics
        </p>
      </div>

      <Tabs defaultValue="performance" className="space-y-4">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="risk">Risk Analysis</TabsTrigger>
          <TabsTrigger value="time">Time Analysis</TabsTrigger>
          <TabsTrigger value="sectors">Sectors</TabsTrigger>
        </TabsList>

        <TabsContent value="performance" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Strategy Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {tradingStrategies.map((strategy) => (
                  <div key={strategy.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{strategy.name}</span>
                      <Badge variant="outline">{strategy.trades} trades</Badge>
                    </div>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <span>Win Rate: {strategy.winRate}%</span>
                      <span className="text-green-600">+${strategy.pnl.toLocaleString()}</span>
                    </div>
                    <Progress value={strategy.winRate} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Risk vs Reward</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <ScatterChart data={riskRewardData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="risk" name="Risk" />
                    <YAxis dataKey="reward" name="Reward" />
                    <Tooltip cursor={{ strokeDasharray: '3 3' }} />
                    <Scatter dataKey="trades" fill="hsl(var(--primary))" />
                  </ScatterChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="risk" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Max Drawdown</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">-8.5%</div>
                <p className="text-xs text-muted-foreground">
                  Peak to trough decline
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Sharpe Ratio</CardTitle>
                <Target className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1.42</div>
                <p className="text-xs text-muted-foreground">
                  Risk-adjusted return
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">VaR (95%)</CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$485</div>
                <p className="text-xs text-muted-foreground">
                  Value at Risk daily
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Drawdown Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Current Drawdown</span>
                  <span className="text-sm text-red-600">-2.3%</span>
                </div>
                <Progress value={23} className="h-2" />
                
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Avg Drawdown Duration</span>
                    <p className="font-medium">4.2 days</p>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Recovery Factor</span>
                    <p className="font-medium">2.8</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="time" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Intraday Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <AreaChart data={timeAnalysis}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="hour" />
                  <YAxis />
                  <Tooltip />
                  <Area 
                    type="monotone" 
                    dataKey="pnl" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))"
                    fillOpacity={0.3}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Best Trading Hours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>14:30 - 15:00</span>
                  <span className="text-green-600 font-medium">+$240</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>10:30 - 11:00</span>
                  <span className="text-green-600 font-medium">+$210</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>15:00 - 15:30</span>
                  <span className="text-green-600 font-medium">+$205</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Day of Week Analysis</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Tuesday</span>
                  <span className="text-green-600 font-medium">68% Win Rate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Wednesday</span>
                  <span className="text-green-600 font-medium">65% Win Rate</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Thursday</span>
                  <span className="text-green-600 font-medium">72% Win Rate</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="sectors" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Sector Allocation</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({name, value}) => `${name}: ${value}%`}
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Sector Performance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {sectorData.map((sector) => (
                  <div key={sector.name} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{sector.name}</span>
                      <span className="text-green-600 font-medium">
                        +${sector.pnl.toLocaleString()}
                      </span>
                    </div>
                    <Progress value={sector.value} className="h-2" />
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Analytics;
