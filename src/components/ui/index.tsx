import React from 'react';
import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';

// Card Component
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("glass-card transition hover:shadow-glow", className)}
      {...props}
    />
  )
);
Card.displayName = "Card";

// Button Variants
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "btn-gradient",
        ghost: "border border-white/20 text-foreground hover:bg-white/10",
        outline: "border border-border bg-background hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-xl px-3",
        lg: "h-12 rounded-2xl px-8",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  as?: React.ElementType;
}

export const Button = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { [key: string]: any }
>(({ className, variant, size, as: Component = "button", ...props }, ref) => {
  return (
    <Component
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props}
    />
  );
});
Button.displayName = "Button";

export const GhostButton = React.forwardRef<
  HTMLButtonElement,
  ButtonProps & { [key: string]: any }
>(({ className, ...props }, ref) => (
  <Button
    ref={ref}
    variant="ghost"
    className={className}
    {...props}
  />
));
GhostButton.displayName = "GhostButton";

// Navigation Component
interface NavProps extends React.HTMLAttributes<HTMLElement> {}

export const Nav = React.forwardRef<HTMLElement, NavProps>(
  ({ className, ...props }, ref) => (
    <nav
      ref={ref}
      className={cn("glass border-b border-white/10 sticky top-0 z-50", className)}
      {...props}
    />
  )
);
Nav.displayName = "Nav";