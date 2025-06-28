
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpCircle, ArrowDownCircle, MoreHorizontal } from "lucide-react";

const trades = [
  {
    id: 1,
    symbol: 'AAPL',
    type: 'Long',
    quantity: 100,
    entryPrice: 175.50,
    exitPrice: 182.30,
    pnl: 680,
    date: '2024-01-15',
    status: 'Closed'
  },
  {
    id: 2,
    symbol: 'TSLA',
    type: 'Short',
    quantity: 50,
    entryPrice: 245.80,
    exitPrice: 238.90,
    pnl: 345,
    date: '2024-01-14',
    status: 'Closed'
  },
  {
    id: 3,
    symbol: 'MSFT',
    type: 'Long',
    quantity: 75,
    entryPrice: 380.20,
    exitPrice: 375.10,
    pnl: -382.50,
    date: '2024-01-13',
    status: 'Closed'
  },
  {
    id: 4,
    symbol: 'GOOGL',
    type: 'Long',
    quantity: 25,
    entryPrice: 142.75,
    exitPrice: null,
    pnl: 156.25,
    date: '2024-01-12',
    status: 'Open'
  },
  {
    id: 5,
    symbol: 'NVDA',
    type: 'Long',
    quantity: 30,
    entryPrice: 520.40,
    exitPrice: null,
    pnl: -450.60,
    date: '2024-01-10',
    status: 'Open'
  }
];

const RecentTrades = () => {
  return (
    <Card className="col-span-3">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>Recent Trades</CardTitle>
        <Button variant="outline" size="sm">
          View All
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {trades.map((trade) => (
            <div key={trade.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  {trade.type === 'Long' ? (
                    <ArrowUpCircle className="h-4 w-4 text-green-600" />
                  ) : (
                    <ArrowDownCircle className="h-4 w-4 text-red-600" />
                  )}
                  <span className="font-medium">{trade.symbol}</span>
                </div>
                <Badge variant={trade.status === 'Open' ? 'default' : 'secondary'}>
                  {trade.status}
                </Badge>
              </div>
              
              <div className="flex items-center space-x-4 text-sm">
                <div className="text-gray-600">
                  {trade.quantity} shares
                </div>
                <div className={`font-medium ${
                  trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                }`}>
                  {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toLocaleString()}
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default RecentTrades;
