"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

export default function Hero() {
  const shouldReduceMotion = useReducedMotion();

  const reveal = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: shouldReduceMotion ? 0 : delay,
        duration: shouldReduceMotion ? 0.01 : 0.55,
        ease: "easeOut",
      },
    }),
  };

  return (
    <motion.section
      id="hero"
      className="bg-[var(--color-bg)] px-5 py-24 text-[var(--color-text)] sm:px-8 sm:py-28 lg:px-16 lg:py-32"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-end lg:gap-16">
        <div className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:max-w-xl lg:gap-8">
          <motion.p
            className="font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.05}
          >
            Early access for urban dog owners
          </motion.p>

          <motion.h1
            className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[36px] tracking-[-0.03em] text-[var(--color-text)] sm:text-[40px] sm:leading-[48px] lg:text-[48px] lg:leading-[56px]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.12}
          >
            PawWalk gets your dog out, every time.
          </motion.h1>

          <motion.p
            className="max-w-lg font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-text)] sm:text-[18px] sm:leading-[26px]"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.2}
          >
            PawWalk connects busy dog owners with local walkers so your dog gets regular walks, even on your busiest days.
          </motion.p>

          <motion.div
            className="flex w-full max-w-sm flex-col items-start gap-4"
            variants={reveal}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            custom={0.28}
          >
            <motion.a
              id="cta-email"
              href="#signup"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-4 font-[family-name:var(--font-body)] text-[18px] font-semibold leading-[24px] text-white transition-colors duration-150 ease-out hover:bg-[var(--color-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
            >
              Join the waitlist
            </motion.a>
            <p className="font-[family-name:var(--font-body)] text-[14px] leading-[20px] text-[var(--color-muted)]">
              {`We’ll only email launch details. You can unsubscribe at any time. `}
              <a
                href="#footer"
                className="underline underline-offset-4 transition-colors duration-150 ease-out hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
              >
                Privacy policy.
              </a>
            </p>
          </motion.div>
        </div>

        <motion.div
          className="order-1 overflow-hidden rounded-[32px] bg-[var(--color-muted)] lg:order-2"
          initial={{ opacity: 0, x: shouldReduceMotion ? 0 : 32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: shouldReduceMotion ? 0.01 : 0.65, ease: "easeOut", delay: shouldReduceMotion ? 0 : 0.08 }}
        >
          <ProjectImage
            id="hero"
            className="h-full min-h-[360px] w-full object-cover object-center sm:min-h-[440px] lg:min-h-[640px]"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}