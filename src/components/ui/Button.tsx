import { type AnchorHTMLAttributes } from "react";

type Variant = "primary" | "ghost" | "ghost-light";

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant;
}

const styles: Record<Variant, string> = {
  primary:
    "bg-gold text-earth-800 hover:bg-terracotta hover:text-earth-50",
  ghost:
    "border border-earth-800 text-earth-800 hover:bg-earth-800 hover:text-earth-100",
  "ghost-light":
    "border border-white text-white hover:bg-white/10",
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <a
      className={`inline-block px-10 py-4 text-sm font-sans font-normal uppercase tracking-[0.15em] transition-all duration-500 cursor-pointer ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
