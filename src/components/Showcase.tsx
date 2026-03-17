"use client";

import { motion } from "framer-motion";
import { Gamepad2, Swords, Trophy, CalendarDays } from "lucide-react";
import { SHOWCASE_ITEMS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

const iconMap = { Gamepad2, Swords, Trophy, CalendarDays } as const;

export default function Showcase() {
  return (
    <SectionWrapper id="showcase">
      <div className="mb-8 text-center sm:mb-14">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
          What You&apos;ll <span className="text-gradient">Discover</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          A preview of the experiences waiting for you in the ecosystem.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        {SHOWCASE_ITEMS.map((item, i) => {
          const Icon = iconMap[item.icon];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-primary/30 sm:p-8"
            >
              {/* Gradient background */}
              <div
                className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-30 transition-opacity duration-300 group-hover:opacity-50`}
              />

              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/5 bg-white/5">
                  <Icon size={28} className="text-foreground" />
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mb-6 text-sm text-muted">{item.description}</p>

                {/* Faux UI preview */}
                <div className="space-y-2" aria-hidden="true">
                  <div className="flex gap-2">
                    <div className="h-8 flex-1 rounded-lg bg-white/5" />
                    <div className="h-8 w-20 rounded-lg bg-white/5" />
                  </div>
                  <div className="flex gap-2">
                    <div className="h-6 w-24 rounded bg-white/5" />
                    <div className="h-6 w-16 rounded bg-white/5" />
                    <div className="h-6 flex-1 rounded bg-white/5" />
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
