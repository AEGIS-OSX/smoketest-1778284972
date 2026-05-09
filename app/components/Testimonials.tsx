"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
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
  const shouldReduceMotion = useReducedMotion();
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
      className="bg-[var(--color-muted)] px-5 py-24 text-[var(--color-text)] sm:px-8 sm:py-28 lg:px-16 lg:py-32"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-12">
        <motion.div
          className="overflow-hidden rounded-[32px] bg-[var(--color-bg)]"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: "easeOut" }}
        >
          <ProjectImage
            id="social_proof"
            className="h-full min-h-[320px] w-full object-cover object-center lg:min-h-[560px]"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-between rounded-[32px] bg-[var(--color-bg)] px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.55, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          <div>
            <p className="font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
              Testimonials
            </p>
            <h2 className="mt-4 max-w-md font-[family-name:var(--font-display)] text-[24px] font-semibold leading-[30px] tracking-[-0.03em] text-[var(--color-text)] sm:text-[32px] sm:leading-[40px]">
              Short proof from early users who needed dependable walks.
            </h2>
          </div>

          <div className="mt-10 flex flex-col gap-8">
            <div aria-live="polite" className="min-h-[200px]">
              <AnimatePresence mode="wait">
                <motion.figure
                  key={activeIndex}
                  className="flex flex-col gap-6"
                  initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -20 }}
                  transition={{ duration: shouldReduceMotion ? 0.01 : 0.35, ease: "easeOut" }}
                >
                  <blockquote className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[40px] tracking-[-0.03em] text-[var(--color-text)]">
                    {`“${activeTestimonial.quote}”`}
                  </blockquote>
                  <figcaption className="font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-muted)]">
                    {activeTestimonial.attribution}
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>

            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={showPrevious}
                className="inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-[var(--color-text)] px-4 py-4 font-[family-name:var(--font-body)] text-[14px] font-semibold leading-[20px] text-white transition-colors duration-150 ease-out hover:bg-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                aria-label="Show previous testimonial"
              >
                Prev
              </button>
              <button
                type="button"
                onClick={showNext}
                className="inline-flex min-h-14 min-w-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-4 py-4 font-[family-name:var(--font-body)] text-[14px] font-semibold leading-[20px] text-white transition-colors duration-150 ease-out hover:bg-[var(--color-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                aria-label="Show next testimonial"
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}