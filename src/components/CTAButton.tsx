"use client";

import { CTA_URL } from "@/lib/constants";
import { trackCtaClick } from "@/lib/tracking";

interface CTAButtonProps {
  label: string;
  variant?: "primary" | "secondary";
  className?: string;
  trackingLabel?: string;
}

export default function CTAButton({
  label,
  variant = "primary",
  className = "",
  trackingLabel,
}: CTAButtonProps) {
  const handleClick = () => {
    trackCtaClick(trackingLabel ?? label);
  };

  if (variant === "secondary") {
    return (
      <a
        href="#how-it-works"
        className={`group relative inline-flex items-center justify-center gap-2 rounded-xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition-all duration-300 hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:px-8 sm:py-4 ${className}`}
      >
        {label}
      </a>
    );
  }

  return (
    <a
      href={CTA_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary active:scale-[0.98] sm:px-8 sm:py-4 ${className}`}
    >
      <span className="relative z-10">{label}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-primary-light to-accent-light opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </a>
  );
}
