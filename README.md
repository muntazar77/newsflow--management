# NewsFlow Management System

A comprehensive fleet management system built with React, TypeScript, and Vite. This application helps organizations manage their fleet operations, employee work hours, leave management, and payroll in an efficient and user-friendly way.

## Features

- **Dashboard**: Real-time overview of fleet operations and key metrics
- **Fleet Management**: Track and manage vehicle status, maintenance, and assignments
- **Leave Management**: Handle employee leave requests and approvals
- **Work Hours Tracking**: Monitor employee work hours and shifts
- **Payroll System**: Manage employee compensation and payments
- **Interactive Charts**: Visual representation of daily performance and fleet status

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: CSS/SCSS (with modern styling practices)
- **Charts**: Interactive data visualization
- **State Management**: React Context API
- **Authentication**: Custom authentication system

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (version 14 or higher)
- npm (comes with Node.js)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/muntazar77/newsflow--management.git
   cd newsflow--management
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

The application will be available at `http://localhost:5173`

## Project Structure

```
newsflow--management/
├── components/         # Reusable UI components
│   ├── charts/        # Chart components
│   ├── Card.tsx
│   ├── Header.tsx
│   └── Sidebar.tsx
├── contexts/          # React Context providers
│   └── AuthContext.tsx
├── pages/            # Main application pages
│   ├── Dashboard.tsx
│   ├── FleetManagement.tsx
│   ├── LeaveManagement.tsx
│   ├── LoginPage.tsx
│   ├── Payroll.tsx
│   └── WorkHours.tsx
├── services/         # API and service functions
│   └── mockApi.ts
└── types.ts          # TypeScript type definitions
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run test` - Run tests (if configured)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Muntazar Al Zaidi - muntazaralzaidi77@gmail.com
Project Link: https://github.com/muntazar77/newsflow--management
