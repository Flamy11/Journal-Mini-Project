
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  changeType?: 'positive' | 'negative' | 'neutral';
  icon?: React.ReactNode;
}

const StatsCard = ({ title, value, change, changeType = 'neutral', icon }: StatsCardProps) => {
  const getChangeColor = () => {
    switch (changeType) {
      case 'positive':
        return 'text-green-600';
      case 'negative':
        return 'text-red-600';
      default:
        return 'text-gray-600';
    }
  };

  const getChangeIcon = () => {
    if (changeType === 'positive') {
      return <TrendingUp className="h-4 w-4" />;
    } else if (changeType === 'negative') {
      return <TrendingDown className="h-4 w-4" />;
    }
    return null;
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <p className={`text-xs ${getChangeColor()} flex items-center mt-1`}>
            {getChangeIcon()}
            <span className="ml-1">{change}</span>
          </p>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
