# Financify Next.js Frontend

A modern personal finance management application built with Next.js 15, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **State Management**: TanStack Query
- **Data Validation**: Zod
- **Animations**: Framer Motion
- **Charts**: Recharts
- **Icons**: Lucide React

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout with providers
│   ├── page.tsx           # Dashboard page
│   ├── upload/            # File upload page
│   ├── transactions/      # Transaction management
│   ├── calendar/          # Calendar view
│   └── budget/            # Budget planning
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── layout/            # Layout components
│   └── providers/         # React providers
├── lib/
│   ├── api/               # Mock API layer
│   ├── hooks/             # TanStack Query hooks
│   ├── types.ts           # TypeScript types
│   └── utils.ts           # Utility functions
```

## 🎯 Features

### Dashboard
- Financial overview with key metrics
- Recent transactions display
- Quick action cards
- Responsive grid layout

### Upload
- Drag & drop file upload
- Support for CSV, Excel, and PDF files
- File processing status
- Upload instructions

### Transactions
- Paginated transaction list
- Search and filter functionality
- Transaction status indicators
- Amount formatting with colors

### Calendar
- Monthly calendar view
- Transaction visualization per day
- Month navigation
- Summary statistics

### Budget
- Budget category management
- Progress tracking with visual indicators
- Spending alerts
- Period selection (weekly/monthly/quarterly/yearly)

## 🛠️ Development

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development Server
```bash
npm run dev
```

### Build
```bash
npm run build
```

### Type Checking
```bash
npm run type-check
```

### Linting
```bash
npm run lint
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3b82f6)
- **Success**: Green (#10b981)
- **Warning**: Yellow (#f59e0b)
- **Destructive**: Red (#ef4444)
- **Muted**: Gray (#6b7280)

### Typography
- **Font**: Inter (Google Fonts)
- **Sizes**: 12px to 48px scale
- **Weights**: 300 to 800

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Multiple variants and sizes
- **Forms**: Consistent input styling
- **Tables**: Sortable with hover states
- **Progress**: Visual progress indicators

## 📊 Data Management

### Mock API
- Simulated API responses with delays
- CRUD operations for all entities
- Pagination support
- Error handling

### TanStack Query
- Automatic caching and synchronization
- Background refetching
- Optimistic updates
- Error boundaries

### Type Safety
- Zod schemas for validation
- TypeScript interfaces
- Runtime type checking
- API response typing

## 🔧 Configuration

### Tailwind CSS
- Custom design tokens
- Dark mode support
- Responsive breakpoints
- Component variants

### Next.js
- App Router configuration
- TypeScript strict mode
- ESLint rules
- Path aliases (@/*)

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm run build
# Deploy to Vercel
```

### Other Platforms
```bash
npm run build
npm start
```

## 📝 API Integration

The application uses a mock API layer that simulates real backend responses. To integrate with a real API:

1. Replace `src/lib/api/mock.ts` with actual API calls
2. Update environment variables for API endpoints
3. Implement authentication middleware
4. Add error handling for network issues

## 🎯 Future Enhancements

- [ ] Real-time data synchronization
- [ ] Advanced filtering and search
- [ ] Data export functionality
- [ ] Mobile app (React Native)
- [ ] Multi-currency support
- [ ] Investment tracking
- [ ] Goal setting and tracking
- [ ] Bill reminders
- [ ] Receipt scanning (OCR)
- [ ] Bank account integration

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details