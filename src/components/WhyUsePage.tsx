"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { WHY_REASONS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";
import CTAButton from "./CTAButton";

export default function WhyUsePage() {
  return (
    <SectionWrapper>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Why Start <span className="text-gradient">Here</span>?
          </h2>
          <p className="mb-8 text-muted">
            Instead of dropping into an unfamiliar platform, use a curated entry
            point that gives you context, clarity, and a better first experience.
          </p>

          <div className="space-y-5">
            {WHY_REASONS.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="flex gap-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Check size={14} />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-foreground">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted">{reason.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <CTAButton label="Get Started Now" trackingLabel="why-section" />
          </div>
        </div>

        {/* Right — decorative visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative hidden items-center justify-center lg:flex"
          aria-hidden="true"
        >
          <div className="glass relative aspect-square w-full max-w-md overflow-hidden rounded-3xl">
            {/* Abstract visual */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-transparent" />
            <div className="absolute top-1/2 left-1/2 h-48 w-48 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-[60px]" />
            <div className="absolute top-1/3 right-1/4 h-32 w-32 rounded-full bg-accent/10 blur-[40px]" />

            {/* Floating elements */}
            <div className="animate-float absolute top-8 left-8 glass rounded-xl p-4">
              <div className="h-3 w-20 rounded bg-primary/30" />
              <div className="mt-2 h-2 w-14 rounded bg-muted/20" />
            </div>
            <div
              className="animate-float absolute right-8 bottom-12 glass rounded-xl p-4"
              style={{ animationDelay: "2s" }}
            >
              <div className="h-3 w-16 rounded bg-accent/30" />
              <div className="mt-2 h-2 w-24 rounded bg-muted/20" />
            </div>
            <div
              className="animate-float absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 glass rounded-2xl p-6"
              style={{ animationDelay: "1s" }}
            >
              <div className="mb-3 h-4 w-28 rounded bg-primary/40" />
              <div className="h-2 w-20 rounded bg-muted/20" />
              <div className="mt-1 h-2 w-24 rounded bg-muted/15" />
              <div className="mt-3 h-8 w-full rounded-lg bg-gradient-to-r from-primary/30 to-accent/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
