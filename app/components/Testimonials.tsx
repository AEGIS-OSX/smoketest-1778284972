"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const testimonials = [
  {
    quote: "Our lab never missed a walk, even when our work schedule changed.",
    attribution: "Maya, Seattle, early user.",
  },
  {
    quote: "PawWalk made evening walks easy to schedule and consistent.",
    attribution: "Luis, Austin, early user.",
  },
  {
    quote: "We trust the local walkers and our dog loves the routine.",
    attribution: "Priya, Brooklyn, early user.",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeTestimonial = testimonials[activeIndex];

  const showPrevious = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1,
    );
  };

  const showNext = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <motion.section
      id="testimonials"
      className="testimonials-section bg-[var(--color-bg)] px-4 py-16 text-[var(--color-text)] sm:px-6 sm:py-20 lg:px-8 lg:py-24"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
    >
      <div className="testimonials-shell mx-auto grid w-full max-w-6xl gap-6 lg:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)] lg:items-stretch lg:gap-8">
        <motion.div
          className="testimonials-media min-h-64 overflow-hidden rounded-3xl bg-[var(--color-surface)] lg:min-h-full"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.08 }}
        >
          <ProjectImage
            id="social_proof"
            className="testimonials-image h-64 w-full object-cover object-center lg:h-full lg:min-h-[32rem]"
          />
        </motion.div>

        <motion.div
          className="testimonials-panel flex min-h-[28rem] flex-col justify-between rounded-3xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.14 }}
        >
          <div className="space-y-4">
            <p className="testimonials-eyebrow font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-muted)] sm:text-sm">
              Early users
            </p>
            <h2 className="testimonials-title max-w-2xl font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight text-[var(--color-text)] sm:text-4xl lg:text-5xl">
              What early users are saying.
            </h2>
          </div>

          <div
            className="testimonials-live mt-10 flex flex-1 flex-col justify-end"
            aria-live="polite"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial.attribution}
                className="space-y-5"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <p className="testimonials-quote max-w-3xl font-[family-name:var(--font-display)] text-2xl font-medium leading-snug text-[var(--color-text)] sm:text-3xl lg:text-[2rem]">
                  {activeTestimonial.quote}
                </p>
                <p className="testimonials-attribution font-[family-name:var(--font-body)] text-sm font-semibold leading-6 text-[var(--color-muted)] sm:text-base">
                  {activeTestimonial.attribution}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="testimonials-controls mt-8 flex items-center gap-3">
            <motion.button
              type="button"
              className="testimonials-button rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-muted)] transition-colors duration-200 ease-out hover:border-[var(--color-primary)] hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              onClick={showPrevious}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Previous
            </motion.button>
            <motion.button
              type="button"
              className="testimonials-button rounded-full border border-[var(--color-border)] bg-[var(--color-bg)] px-5 py-3 font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-muted)] transition-colors duration-200 ease-out hover:border-[var(--color-primary)] hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
              onClick={showNext}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Next
            </motion.button>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
