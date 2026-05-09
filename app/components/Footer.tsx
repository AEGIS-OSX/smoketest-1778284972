"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function Footer() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.footer
      id="footer"
      className="bg-[var(--color-text)] px-5 py-24 text-[var(--color-bg)] sm:px-8 sm:py-28 lg:px-16 lg:py-32"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.7fr)] lg:gap-16">
        <div className="max-w-xl">
          <p className="font-[family-name:var(--font-display)] text-[32px] font-semibold leading-[40px] tracking-[-0.03em] text-[var(--color-bg)]">
            PawWalk
          </p>
          <p className="mt-6 font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-white/72">
            {`We’ll only email launch details. You can unsubscribe at any time. `}
            <a
              href="/privacy"
              className="underline underline-offset-4 transition-colors duration-150 ease-out hover:text-[var(--color-bg)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              Privacy policy.
            </a>
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          <div>
            <p className="font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">
              Contact
            </p>
            <a
              href="mailto:hello@pawwalk.example"
              className="mt-4 inline-flex font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-bg)] underline underline-offset-4 transition-colors duration-150 ease-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              hello@pawwalk.example
            </a>
          </div>

          <nav aria-label="Footer links" className="grid gap-4">
            <p className="font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] text-white/60">
              Links
            </p>
            <a
              href="/privacy"
              className="font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-bg)] underline underline-offset-4 transition-colors duration-150 ease-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              Privacy policy.
            </a>
            <a
              href="/terms"
              className="font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-bg)] underline underline-offset-4 transition-colors duration-150 ease-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              Terms
            </a>
            <a
              href="mailto:hello@pawwalk.example"
              className="font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-bg)] underline underline-offset-4 transition-colors duration-150 ease-out hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              Contact
            </a>
          </nav>
        </div>
      </div>
    </motion.footer>
  );
}