"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import CTAButton from "./CTAButton";
import { DISCLOSURE } from "@/lib/constants";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20">
      {/* Animated background */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="animate-pulse-glow absolute top-1/4 left-1/4 h-[250px] w-[250px] rounded-full bg-primary/10 blur-[80px] sm:h-[500px] sm:w-[500px] sm:blur-[120px]" />
        <div
          className="animate-pulse-glow absolute right-1/4 bottom-1/4 h-[200px] w-[200px] rounded-full bg-accent/10 blur-[60px] sm:h-[400px] sm:w-[400px] sm:blur-[100px]"
          style={{ animationDelay: "1.5s" }}
        />
        <div className="animate-pulse-glow absolute top-1/2 left-1/2 h-[150px] w-[150px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[50px] sm:h-[300px] sm:w-[300px] sm:blur-[80px]" />
        {/* Grid */}
        <div className="bg-grid absolute inset-0 opacity-40" />
        {/* Top light beam */}
        <div className="absolute top-0 left-1/2 h-[600px] w-px -translate-x-1/2 bg-gradient-to-b from-primary/20 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center sm:px-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-medium text-primary"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Community Curated Gateway
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="mb-6 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl"
        >
          Your Gateway to the{" "}
          <span className="text-gradient">Next Wave</span>
          <br className="hidden sm:block" /> of Web3 Gaming
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
        >
          Discover games, quests, and rewards through a curated community
          starting point. We help newcomers find their way into the Immutable
          ecosystem — faster and with better context.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.7 }}
          className="mb-6 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <CTAButton
            label="Start Exploring"
            trackingLabel="hero-primary"
            className="w-full sm:w-auto sm:min-w-[200px]"
          />
          <CTAButton
            label="How It Works"
            variant="secondary"
            className="w-full sm:w-auto sm:min-w-[200px]"
          />
        </motion.div>

        {/* Disclosure */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="mb-4 text-xs text-muted/60"
        >
          {DISCLOSURE}
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="mt-12"
        >
          <a
            href="#value-props"
            aria-label="Scroll to learn more"
            className="inline-flex flex-col items-center gap-1 text-muted/40 transition-colors hover:text-primary"
          >
            <span className="text-xs">Scroll to learn more</span>
            <ChevronDown size={20} className="animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
