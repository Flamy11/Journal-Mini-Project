
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Search, Filter, Plus, ArrowUpCircle, ArrowDownCircle, MoreHorizontal } from "lucide-react";

const trades = [
  {
    id: 1,
    date: '2024-01-15',
    symbol: 'AAPL',
    type: 'Long',
    quantity: 100,
    entryPrice: 175.50,
    exitPrice: 182.30,
    pnl: 680,
    status: 'Closed',
    notes: 'Earnings play - beat expectations'
  },
  {
    id: 2,
    date: '2024-01-14',
    symbol: 'TSLA',
    type: 'Short',
    quantity: 50,
    entryPrice: 245.80,
    exitPrice: 238.90,
    pnl: 345,
    status: 'Closed',
    notes: 'Technical breakdown at resistance'
  },
  {
    id: 3,
    date: '2024-01-13',
    symbol: 'MSFT',
    type: 'Long',
    quantity: 75,
    entryPrice: 380.20,
    exitPrice: 375.10,
    pnl: -382.50,
    status: 'Closed',
    notes: 'Stop loss triggered'
  },
  {
    id: 4,
    date: '2024-01-12',
    symbol: 'GOOGL',
    type: 'Long',
    quantity: 25,
    entryPrice: 142.75,
    exitPrice: null,
    pnl: 156.25,
    status: 'Open',
    notes: 'Momentum play on AI news'
  },
  {
    id: 5,
    date: '2024-01-10',
    symbol: 'NVDA',
    type: 'Long',
    quantity: 30,
    entryPrice: 520.40,
    exitPrice: null,
    pnl: -450.60,
    status: 'Open',
    notes: 'Pullback from highs'
  }
];

const Trades = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredTrades = trades.filter(trade => {
    const matchesSearch = trade.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "all" || trade.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Trades</h1>
          <p className="text-muted-foreground">
            Manage and analyze your trading history
          </p>
        </div>
        {/* <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Trade
        </Button> */}
      </div>

      {/* Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search by symbol..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Trades</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Trades Table */}
      <Card>
        <CardHeader>
          <CardTitle>Trade History</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Symbol</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Entry</TableHead>
                  <TableHead>Exit</TableHead>
                  <TableHead>P&L</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredTrades.map((trade) => (
                  <TableRow key={trade.id}>
                    <TableCell>{trade.date}</TableCell>
                    <TableCell className="font-medium">{trade.symbol}</TableCell>
                    <TableCell>
                      <div className="flex items-center space-x-2">
                        {trade.type === 'Long' ? (
                          <ArrowUpCircle className="h-4 w-4 text-green-600" />
                        ) : (
                          <ArrowDownCircle className="h-4 w-4 text-red-600" />
                        )}
                        <span>{trade.type}</span>
                      </div>
                    </TableCell>
                    <TableCell>{trade.quantity}</TableCell>
                    <TableCell>${trade.entryPrice.toFixed(2)}</TableCell>
                    <TableCell>
                      {trade.exitPrice ? `$${trade.exitPrice.toFixed(2)}` : '-'}
                    </TableCell>
                    <TableCell className={`font-medium ${
                      trade.pnl >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {trade.pnl >= 0 ? '+' : ''}${trade.pnl.toLocaleString()}
                    </TableCell>
                    <TableCell>
                      <Badge variant={trade.status === 'Open' ? 'default' : 'secondary'}>
                        {trade.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Trades;
