"use client";

import { motion } from "framer-motion";
import { Sparkles, Rocket, Users } from "lucide-react";
import { VALUE_PROPS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

const icons = [Sparkles, Rocket, Users];

export default function ValueProps() {
  return (
    <SectionWrapper id="value-props" className="py-16 md:py-20">
      <div className="grid gap-4 sm:gap-6 md:grid-cols-3">
        {VALUE_PROPS.map((item, i) => {
          const Icon = icons[i];
          return (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="glass group flex items-start gap-3 rounded-2xl p-4 transition-all duration-300 hover:border-primary/30 sm:gap-4 sm:p-6"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <Icon size={20} />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
