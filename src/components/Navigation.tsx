
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown, BarChart3, TrendingUp, User, Settings, LogOut, PlusCircle, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/dashboard" className="flex items-center space-x-2">
              <img className="h-12 w-16 sm:h-15 sm:w-20" src="/Logo-1.png" alt="" />
              <span className="text-lg sm:text-xl font-bold text-gray-900">LogMyTrades</span>
            </Link>
          </div>

          {/* Main Navigation - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/dashboard"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/dashboard') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Dashboard
            </Link>
            <Link
              to="/dashboard/trades"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/dashboard/trades') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Trades
            </Link>
            <Link
              to="/dashboard/portfolio"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/dashboard/portfolio') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Portfolio
            </Link>
            <Link
              to="/dashboard/reports"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/dashboard/reports') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Reports
            </Link>
            <Link
              to="/dashboard/analytics"
              className={`text-sm font-medium transition-colors hover:text-primary ${
                isActive('/dashboard/analytics') 
                  ? 'text-primary border-b-2 border-primary pb-4' 
                  : 'text-gray-700'
              }`}
            >
              Analytics
            </Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-primary p-2"
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>

            {/* User menu - hidden on mobile when hamburger menu is open */}
            <div className={`${mobileMenuOpen ? 'hidden md:block' : 'block'}`}>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="/placeholder.svg" alt="User" />
                      <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <ChevronDown className="h-4 w-4 hidden sm:block" />
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
                  <DropdownMenuItem asChild>
                    <Link to="/login" className="flex items-center">
                      <LogOut className="mr-2 h-4 w-4" />
                      <span>Log out</span>
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/dashboard" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/dashboard') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link 
                to="/dashboard/trades" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/dashboard/trades') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Trades
              </Link>
              <Link 
                to="/dashboard/portfolio" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/dashboard/portfolio') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Portfolio
              </Link>
              <Link 
                to="/dashboard/reports" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/dashboard/reports') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Reports
              </Link>
              <Link 
                to="/dashboard/analytics" 
                className={`block px-3 py-2 text-base font-medium transition-colors ${
                  isActive('/dashboard/analytics') 
                    ? 'text-primary bg-primary/10' 
                    : 'text-gray-700 hover:text-primary hover:bg-gray-50'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Analytics
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
