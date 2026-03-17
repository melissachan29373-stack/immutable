"use client";

import { motion } from "framer-motion";
import CTAButton from "./CTAButton";
import { DISCLOSURE } from "@/lib/constants";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-4 py-24 sm:px-6 md:py-32 lg:px-8">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[80px] sm:h-[600px] sm:w-[600px] sm:blur-[150px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative z-10 mx-auto max-w-3xl text-center"
      >
        <h2 className="mb-6 text-3xl font-bold sm:text-4xl md:text-5xl">
          Ready to <span className="text-gradient">Explore</span>?
        </h2>

        <p className="mx-auto mb-10 max-w-xl text-muted sm:text-lg">
          Your curated starting point is one click away. Discover games, quests,
          and rewards in the Immutable ecosystem.
        </p>

        <CTAButton
          label="Start Exploring Now"
          trackingLabel="final-cta"
          className="w-full text-base sm:w-auto sm:min-w-[240px]"
        />

        <p className="mt-6 text-xs text-muted/50">{DISCLOSURE}</p>
      </motion.div>
    </section>
  );
}
