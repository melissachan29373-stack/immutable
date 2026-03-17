"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/lib/constants";
import SectionWrapper from "./SectionWrapper";

function FAQItem({
  question,
  answer,
  index,
}: {
  question: string;
  answer: string;
  index: number;
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.4 }}
      className="glass overflow-hidden rounded-xl"
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between gap-3 px-4 py-4 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:gap-4 sm:px-6 sm:py-5"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground sm:text-base">
          {question}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-muted transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="px-4 pb-4 text-sm leading-relaxed text-muted sm:px-6 sm:pb-5">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <SectionWrapper id="faq">
      <div className="mb-8 text-center sm:mb-14">
        <h2 className="mb-4 text-2xl font-bold sm:text-3xl md:text-4xl">
          Frequently Asked{" "}
          <span className="text-gradient">Questions</span>
        </h2>
        <p className="mx-auto max-w-2xl text-muted">
          Honest answers about this page and what to expect.
        </p>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {FAQS.map((faq, i) => (
          <FAQItem
            key={faq.question}
            question={faq.question}
            answer={faq.answer}
            index={i}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}
