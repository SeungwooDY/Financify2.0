# Financify Design System

A comprehensive design system built with React, TypeScript, Tailwind CSS, and modern UI components for financial applications.

## 🎨 Design Principles

- **12-Column Grid System**: Consistent layout using CSS Grid
- **Rounded Cards**: 2xl border radius for modern aesthetics
- **Subtle Borders & Shadows**: Soft visual hierarchy
- **Tabular Numbers**: Monospace fonts for financial data
- **Accessible Labels**: WCAG compliant form labels
- **URL-Driven State**: Browser-based navigation and state management

## 🛠️ Tech Stack

- **React 19** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Recharts** - Data visualization
- **Lucide React** - Icon library
- **Class Variance Authority** - Component variants

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Core UI components
│   ├── layout/       # Layout components
│   ├── forms/        # Form components
│   └── charts/       # Chart components
├── lib/
│   ├── utils.ts      # Utility functions
│   └── types.ts      # TypeScript types
├── pages/            # Page components
└── index.css         # Global styles & design tokens
```

## 🎯 Core Components

### Button
```tsx
import { Button } from '@/components/ui'

<Button variant="primary" size="lg" loading>
  Save Changes
</Button>
```

**Variants**: `default`, `destructive`, `outline`, `secondary`, `ghost`, `link`, `success`, `warning`
**Sizes**: `sm`, `default`, `lg`, `xl`, `icon`

### Card
```tsx
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui'

<Card variant="elevated" padding="lg">
  <CardHeader>
    <CardTitle>Financial Summary</CardTitle>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

**Variants**: `default`, `elevated`, `outlined`
**Padding**: `none`, `sm`, `md`, `lg`

### Money
```tsx
import { Money } from '@/components/ui'

<Money 
  amount={1234.56} 
  currency="USD" 
  variant="large"
  showSign 
/>
```

**Types**: `currency`, `percentage`
**Variants**: `default`, `large`, `small`, `muted`

### Grid System
```tsx
import { Grid, GridItem } from '@/components/ui'

<Grid columns={12} gap="lg">
  <GridItem span={6} responsive={{ sm: { span: 12 }, md: { span: 6 } }}>
    Content
  </GridItem>
</Grid>
```

### Table
```tsx
import { Table } from '@/components/ui'

<Table
  data={transactions}
  columns={columns}
  loading={false}
  striped
  hoverable
  onSort={handleSort}
/>
```

## 🎨 Design Tokens

### Colors
- **Primary**: Blue spectrum with 50-950 shades
- **Secondary**: Neutral grays
- **Success**: Green for positive values
- **Warning**: Orange for alerts
- **Destructive**: Red for negative values
- **Financial**: Profit (green), Loss (red), Neutral (gray)

### Typography
- **Font Families**: Inter (sans), JetBrains Mono (mono)
- **Sizes**: xs (0.75rem) to 6xl (3.75rem)
- **Weights**: Light (300) to Extrabold (800)

### Spacing
- **Scale**: 0.25rem to 6rem (4px to 96px)
- **Tokens**: xs, sm, md, lg, xl, 2xl, 3xl, 4xl

### Shadows
- **Levels**: xs, sm, md, lg, xl, 2xl
- **Special**: inner, card, elevated

## 📊 Charts

Built with Recharts for consistent data visualization:

```tsx
import { Chart } from '@/components/charts'

<Chart
  data={chartData}
  type="line"
  height={300}
  colors={["#3b82f6", "#ef4444"]}
  responsive
/>
```

**Types**: `line`, `area`, `bar`, `pie`
**Features**: Responsive, customizable colors, tooltips, legends

## 🎭 Animations

Smooth transitions using Framer Motion:

- **Fade**: `fade-in`, `fade-out`
- **Slide**: `slide-in`, `slide-out`
- **Scale**: `scale-in`, `scale-out`
- **Accordion**: `accordion-down`, `accordion-up`

## ♿ Accessibility

- **ARIA Labels**: Proper labeling for screen readers
- **Keyboard Navigation**: Full keyboard support
- **Color Contrast**: WCAG AA compliant
- **Focus Management**: Visible focus indicators

## 🚀 Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## 📝 Usage Guidelines

### Component Props
- Always use TypeScript interfaces
- Provide default values where appropriate
- Use consistent naming conventions
- Include JSDoc comments for complex props

### Styling
- Use design tokens instead of magic numbers
- Prefer utility classes over custom CSS
- Follow the 12-column grid system
- Use semantic color names

### State Management
- Keep components pure when possible
- Use URL state for navigation
- Implement proper loading states
- Handle errors gracefully

## 🔧 Customization

### Adding New Colors
1. Update CSS variables in `src/index.css`
2. Add to Tailwind config in `tailwind.config.js`
3. Create utility classes if needed

### Creating New Components
1. Follow the existing component structure
2. Use `cn()` utility for className merging
3. Export from appropriate index file
4. Add TypeScript interfaces
5. Include in storybook if applicable

### Extending the Grid
- Use responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Implement auto-fit and auto-fill patterns
- Consider mobile-first approach

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Recharts Documentation](https://recharts.org/)
- [Framer Motion Documentation](https://www.framer.com/motion/)
- [React TypeScript Cheatsheet](https://react-typescript-cheatsheet.netlify.app/)

## 🤝 Contributing

1. Follow the established patterns
2. Write TypeScript interfaces
3. Include proper documentation
4. Test across different screen sizes
5. Ensure accessibility compliance

---

Built with ❤️ for modern financial applications.
