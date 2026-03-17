"use client";

import { motion } from "framer-motion";
import { Gamepad2, Compass, Gem, Zap } from "lucide-react";
import { FEATURES } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

const iconMap = { Gamepad2, Compass, Gem, Zap } as const;

export default function Features() {
  return (
    <SectionWrapper id="features">
      <div className="mb-8 text-center sm:mb-14">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
          Everything You Need to{" "}
          <span className="text-gradient">Get Started</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          A curated overview of what awaits you in the Immutable ecosystem.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FEATURES.map((feature, i) => {
          const Icon = iconMap[feature.icon];
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass group relative overflow-hidden rounded-2xl p-4 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 sm:p-6"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 text-primary transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
