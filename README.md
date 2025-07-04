
# LogMyTrades - Trading Journal Application

A comprehensive trading journal application inspired by TradingVue, built with modern web technologies. This application helps traders track their trades, analyze performance, and manage their portfolio with detailed insights and analytics.



### Dashboard
- **Real-time Performance Overview**: Total P&L, win rate, trade count, and active positions
- **Interactive Charts**: Performance visualization with Recharts
- **Recent Trades**: Quick overview of latest trading activity
- **Statistics Cards**: Key metrics with trend indicators

### Trading Management
- **Trade History**: Complete log of all trades with filtering and search
- **Trade Details**: Entry/exit prices, P&L calculations, trade types (Long/Short)
- **Status Tracking**: Open and closed positions management
- **Advanced Filtering**: Search by symbol, filter by status, and more

### Portfolio Management
- **Portfolio Allocation**: Visual pie chart showing asset distribution
- **Position Tracking**: Current holdings with real-time P&L
- **Monthly Returns**: Historical performance visualization
- **Asset Performance**: Individual position analysis with allocation percentages

### Reports & Analytics
- **Performance Reports**: Detailed trading statistics and metrics
- **Analytics Dashboard**: Advanced charts and performance indicators
- **Export Functionality**: Data export capabilities for external analysis

### Authentication System
- **User Registration**: Complete signup flow with validation
- **Secure Login**: Email/password authentication with remember me option
- **Password Recovery**: Forgot password functionality with email reset
- **Social Authentication**: Google and Facebook login integration
- **Form Validation**: Client-side validation with error handling

### Landing Page
- **Hero Section**: Compelling introduction with clear value proposition
- **Feature Showcase**: Highlighting key application capabilities
- **Testimonials**: Social proof from satisfied users
- **Pricing Plans**: Clear subscription tiers and features
- **Call-to-Action**: Strategic placement for user conversion


```
src/
├── components/           # Reusable UI components
│   ├── ui/              # Shadcn/UI component library
│   ├── Navigation.tsx   # Main navigation component
│   ├── StatsCard.tsx    # Statistics display card
│   ├── PerformanceChart.tsx  # Trading performance charts
│   └── RecentTrades.tsx # Recent trades component
├── pages/               # Application pages/routes
│   ├── Landing.tsx      # Marketing landing page
│   ├── Login.tsx        # User authentication - login
│   ├── Signup.tsx       # User authentication - registration
│   ├── ForgotPassword.tsx # Password recovery
│   ├── Dashboard.tsx    # Main dashboard overview
│   ├── Trades.tsx       # Trading history management
│   ├── Portfolio.tsx    # Portfolio tracking
│   ├── Reports.tsx      # Performance reports
│   ├── Analytics.tsx    # Advanced analytics
│   └── NotFound.tsx     # 404 error page
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions and configurations
├── App.tsx              # Main application component
├── main.tsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```



## Data Models

### Trade Model
```typescript
interface Trade {
  id: number;
  date: string;
  symbol: string;
  type: 'Long' | 'Short';
  quantity: number;
  entryPrice: number;
  exitPrice?: number;
  pnl: number;
  status: 'Open' | 'Closed';
  notes?: string;
}
```

### Portfolio Position
```typescript
interface Position {
  symbol: string;
  shares: number;
  avgPrice: number;
  currentPrice: number;
  value: number;
  pnl: number;
  pnlPercent: number;
  allocation: number;
}
```

## Routing Structure

### Public Routes (Unauthenticated)
- `/landing` - Marketing landing page
- `/login` - User login
- `/signup` - User registration  
- `/forgot-password` - Password recovery

### Protected Routes (Authenticated)
- `/` - Dashboard (default authenticated route)
- `/trades` - Trading history and management
- `/portfolio` - Portfolio overview and positions
- `/reports` - Performance reports and analytics
- `/analytics` - Advanced trading analytics

## Authentication Flow

1. **Landing Page**: Users arrive and learn about the application
2. **Registration**: New users create accounts with email validation
3. **Email Verification**: Users receive confirmation emails (ready for backend integration)
4. **Login**: Existing users authenticate with email/password
5. **Dashboard Access**: Authenticated users access the main application
6. **Session Management**: Remember me functionality for persistent sessions

## Performance Features

### Trade Analysis
- **P&L Calculation**: Automatic profit/loss calculations
- **Win Rate Tracking**: Success rate metrics
- **Trade Categorization**: Long vs Short position tracking
- **Historical Performance**: Time-based performance analysis

### Portfolio Analytics
- **Asset Allocation**: Visual representation of portfolio distribution  
- **Position Sizing**: Individual position weight tracking
- **Performance Attribution**: Understanding what drives returns
- **Risk Metrics**: Portfolio risk assessment tools

## Key Components

### StatsCard Component
Displays key performance metrics with:
- **Dynamic Values**: Real-time updating statistics
- **Trend Indicators**: Visual representation of changes
- **Color Coding**: Positive/negative/neutral states
- **Icon Integration**: Contextual icons for each metric

### Navigation Component
Provides application navigation with:
- **Active State Indicators**: Current page highlighting
- **Responsive Design**: Mobile-friendly hamburger menu (ready for implementation)
- **User Avatar**: Profile access and dropdown menu
- **Brand Integration**: Logo and application name

### PerformanceChart Component
Interactive charting with:
- **Recharts Integration**: Professional-grade charts
- **Responsive Design**: Charts adapt to container size
- **Multiple Chart Types**: Line, bar, pie charts as needed
- **Data Visualization**: Clear representation of performance data


### Prerequisites
- Node.js (v18 or higher)
- npm, yarn, or bun package manager

### Installation
```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd logmytrades

# Install dependencies
npm install

# Start development server
npm run dev
```
