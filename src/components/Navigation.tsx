
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, BarChart3, TrendingUp, User, Settings, LogOut, PlusCircle } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              {/* <BarChart3 className="h-8 w-8 text-primary" /> */}
              <img className="h-15 w-20 text-primary" src="/Logo-1.png" alt="" />
              <span className="text-xl font-bold text-gray-900">LogMyTrades</span>
            </Link>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/trades"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/trades') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Trades
            </Link>
            <Link
              to="/portfolio"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/portfolio') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/reports"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/reports') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Reports
            </Link>
            <Link
              to="/analytics"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/analytics') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Analytics
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* <Button size="sm" className="hidden sm:flex">
              <PlusCircle className="h-4 w-4 mr-2" />
              Add Trade
            </Button> */}

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg" alt="User" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <ChevronDown className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 bg-white">
                <DropdownMenuItem>
                  <User className="mr-2 h-4 w-4" />
                  <span>Profile</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Log out</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
