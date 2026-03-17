"use client";

import { motion } from "framer-motion";
import { STEPS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="mb-8 text-center sm:mb-14">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
          How It <span className="text-gradient">Works</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Three simple steps to start your web3 gaming journey.
        </p>
      </div>

      <div className="relative grid gap-6 sm:gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Connecting line */}
        <div
          className="pointer-events-none absolute top-16 hidden h-px w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent md:block"
          aria-hidden="true"
        />

        {STEPS.map((step, i) => (
          <motion.div
            key={step.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.5 }}
            className="relative text-center"
          >
            {/* Step number */}
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/20 bg-primary/5 text-xl font-bold text-primary sm:mb-6 sm:h-16 sm:w-16 sm:text-2xl">
              {step.step}
            </div>
            <h3 className="mb-3 text-xl font-semibold text-foreground">
              {step.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
