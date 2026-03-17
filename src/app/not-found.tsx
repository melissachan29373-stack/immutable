"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden px-4">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="animate-pulse-glow absolute top-1/3 left-1/4 h-64 w-64 rounded-full bg-primary/10 blur-[100px] sm:h-96 sm:w-96" />
        <div
          className="animate-pulse-glow absolute right-1/4 bottom-1/3 h-48 w-48 rounded-full bg-accent/10 blur-[80px] sm:h-72 sm:w-72"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="bg-grid absolute inset-0 opacity-30" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="relative z-10 text-center"
      >
        {/* Icon */}
        <motion.div
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 sm:h-24 sm:w-24"
        >
          <Compass size={40} className="text-primary" />
        </motion.div>

        {/* 404 number */}
        <h1 className="mb-4 text-7xl font-extrabold tracking-tighter sm:text-8xl md:text-9xl">
          <span className="text-gradient">404</span>
        </h1>

        <h2 className="mb-4 text-xl font-bold text-foreground sm:text-2xl">
          Page Not Found
        </h2>

        <p className="mx-auto mb-10 max-w-md text-sm leading-relaxed text-muted sm:text-base">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </p>

        <a
          href="/"
          className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-primary to-accent px-6 py-3 text-sm font-bold text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/30 active:scale-[0.98] sm:px-8 sm:py-4"
        >
          <ArrowLeft
            size={18}
            className="transition-transform group-hover:-translate-x-1"
          />
          Back to Home
        </a>
      </motion.div>
    </div>
  );
}
