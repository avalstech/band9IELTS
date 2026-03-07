import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  asChild?: boolean;
  href?: string;
}

const styles = {
  base:
    "inline-flex items-center justify-center whitespace-nowrap rounded-2xl text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
  variant: {
    default: "bg-primary text-primary-foreground shadow-soft hover:opacity-95",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    outline: "border border-input bg-background hover:bg-muted",
    ghost: "hover:bg-muted",
    destructive: "bg-destructive text-destructive-foreground hover:opacity-95",
  },
  size: {
    default: "h-11 px-4",
    sm: "h-9 px-3",
    lg: "h-12 px-6 text-base",
    icon: "h-10 w-10",
  },
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", asChild, href, ...props }, ref) => {
    const cls = cn(styles.base, styles.variant[variant], styles.size[size], className);

    if (href) {
      return (
        <Link href={href} className={cls} aria-disabled={props.disabled}>
          {props.children}
        </Link>
      );
    }

    if (asChild && React.isValidElement(props.children)) {
      return React.cloneElement(props.children, {
        className: cn(cls, (props.children.props as { className?: string }).className),
      });
    }

    return (
      <button ref={ref} className={cls} {...props} />
    );
  }
);
Button.displayName = "Button";
