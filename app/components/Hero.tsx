"use client"

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const reveal = {
  hidden: {
    opacity: 0,
    y: 18,
  },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

export default function Hero() {
  return (
    <motion.section
      id="hero"
      className="hero-section min-h-[calc(100svh-4.5rem)] bg-[var(--color-bg)] px-4 py-16 text-[var(--color-text)] sm:px-6 sm:py-20 md:min-h-[calc(100svh-5rem)] md:px-8 lg:px-10"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
    >
      <div className="hero-shell mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 sm:gap-12 md:grid-cols-[46%_54%] md:gap-8 lg:gap-12">
        <div className="hero-copy flex max-w-2xl flex-col items-start gap-5 sm:gap-6 md:pr-2 lg:pr-8">
          <motion.p
            className="hero-kicker font-[family-name:var(--font-body)] text-xs font-semibold uppercase leading-4 tracking-[0.16em] text-[var(--color-muted)]"
            variants={reveal}
            custom={0.05}
          >
            Early access for urban dog owners
          </motion.p>

          <motion.h1
            className="hero-title max-w-[11ch] font-[family-name:var(--font-display)] text-[2rem] font-bold leading-[1.25] tracking-[-0.035em] text-[var(--color-text)] min-[380px]:text-[2.375rem] sm:text-[2.75rem] sm:leading-[1.16] lg:text-5xl lg:leading-[1.16]"
            variants={reveal}
            custom={0.15}
          >
            PawWalk gets your dog out, every time.
          </motion.h1>

          <motion.p
            className="hero-subtitle max-w-xl font-[family-name:var(--font-body)] text-base font-normal leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-[1.45]"
            variants={reveal}
            custom={0.25}
          >
            PawWalk connects busy dog owners with local walkers so your dog gets regular walks, even on your busiest days.
          </motion.p>

          <motion.div
            className="hero-actions flex w-full flex-col items-start gap-3 pt-1 min-[420px]:w-auto"
            variants={reveal}
            custom={0.35}
          >
            <motion.a
              id="cta-email"
              href="#signup"
              className="hero-button inline-flex min-h-12 w-full items-center justify-center rounded-xl bg-[var(--color-primary)] px-6 py-3 font-[family-name:var(--font-body)] text-sm font-bold leading-5 text-[var(--color-bg)] transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] min-[420px]:w-auto"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Join the waitlist
            </motion.a>
          </motion.div>

          <motion.p
            className="hero-microcopy max-w-md font-[family-name:var(--font-body)] text-sm leading-5 text-[var(--color-muted)]"
            variants={reveal}
            custom={0.45}
          >
            We’ll only email launch details. You can unsubscribe at any time. <a href="#footer" className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-muted)] underline decoration-[var(--color-muted)] decoration-1 underline-offset-4 transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]">Privacy policy.</a>
          </motion.p>
        </div>

        <motion.div
          className="hero-media relative w-full overflow-hidden rounded-3xl bg-[var(--color-bg)] shadow-[0_18px_45px_rgba(0,0,0,0.10)]"
          initial={{ opacity: 0, x: 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-12% 0px -12% 0px" }}
        >
          <ProjectImage id="hero" className="hero-image aspect-[4/5] h-full w-full rounded-3xl object-cover md:aspect-[5/6]" />
        </motion.div>
      </div>
    </motion.section>
  );
}
