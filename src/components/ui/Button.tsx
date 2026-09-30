import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon, type IconName } from "./Icon";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "inverse" | "inverse-outline" | "inverse-ghost" | "inverse-link";
export type ButtonSize = "md" | "lg" | "inline";

const base =
  "group inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold tracking-[-0.01em] transition-[background-color,color,box-shadow,border-color,transform] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed whitespace-nowrap";

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-500 text-white shadow-[var(--shadow-glow)] hover:bg-accent-600 active:translate-y-px focus-visible:outline-accent-500",
  secondary:
    "bg-white text-ink ring-1 ring-inset ring-line-strong hover:ring-ink/40 hover:bg-surface active:translate-y-px",
  ghost: "text-ink hover:bg-surface",
  inverse: "bg-white text-navy-900 hover:bg-accent-50 active:translate-y-px focus-visible:outline-white",
  "inverse-outline":
    "text-white ring-1 ring-inset ring-white/25 hover:ring-white/60 hover:bg-white/5 active:translate-y-px focus-visible:outline-white",
  "inverse-ghost": "text-white/80 hover:bg-white/5 hover:text-white focus-visible:outline-white",
  "inverse-link": "text-white underline underline-offset-4 hover:text-accent-200 focus-visible:outline-white",
};

const sizes: Record<ButtonSize, string> = {
  md: "h-11 px-5 text-[0.9375rem]",
  lg: "h-13 px-7 text-base",
  inline: "text-[inherit]",
};

export function buttonClasses(variant: ButtonVariant = "primary", size: ButtonSize = "md", className?: string) {
  return cn(base, variants[variant], sizes[size], className);
}

interface ButtonLinkProps {
  href: string;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: IconName;
  external?: boolean;
  className?: string;
}

export function ButtonLink({ href, children, variant = "primary", size = "md", icon, external, className }: ButtonLinkProps) {
  const content = (
    <>
      <span>{children}</span>
      {icon && (
        <Icon name={icon} className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      )}
    </>
  );
  if (external) {
    return (
      <a href={href} className={buttonClasses(variant, size, className)} rel="noopener" target="_blank">
        {content}
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    );
  }
  return (
    <Link href={href} className={buttonClasses(variant, size, className)}>
      {content}
    </Link>
  );
}
