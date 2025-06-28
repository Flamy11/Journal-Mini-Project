
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', value: 10000 },
  { date: 'Feb', value: 12500 },
  { date: 'Mar', value: 11800 },
  { date: 'Apr', value: 15200 },
  { date: 'May', value: 18900 },
  { date: 'Jun', value: 17500 },
  { date: 'Jul', value: 21300 },
  { date: 'Aug', value: 19800 },
  { date: 'Sep', value: 25400 },
  { date: 'Oct', value: 28700 },
  { date: 'Nov', value: 32100 },
  { date: 'Dec', value: 35600 },
];

const PerformanceChart = () => {
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Portfolio Performance</CardTitle>
      </CardHeader>
      <CardContent className="pl-2">
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip 
              formatter={(value) => [`$${value.toLocaleString()}`, 'Portfolio Value']}
              labelFormatter={(label) => `Month: ${label}`}
            />
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--primary))" 
              strokeWidth={2}
              dot={{ fill: 'hsl(var(--primary))' }}
            />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default PerformanceChart;
