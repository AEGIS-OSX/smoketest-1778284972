"use client"

import { motion } from "framer-motion";

const privacyLine = `We’ll only email launch details. You can unsubscribe at any time. Privacy policy.`;
const privacyPrefix = `We’ll only email launch details. You can unsubscribe at any time. `;

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.12,
    },
  },
};

const blockVariants = {
  hidden: {
    opacity: 0,
    y: 14,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
    },
  },
};

export default function Footer() {
  return (
    <motion.footer
      id="footer"
      className="site-footer w-full bg-[var(--color-bg)] px-6 py-14 text-[var(--color-text)] sm:px-8 lg:px-12 lg:py-18"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
    >
      <div className="site-footer__inner mx-auto grid w-full max-w-6xl grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-[45%_25%_30%] lg:gap-0">
        <motion.div className="site-footer__brand flex flex-col gap-4 pr-0 lg:pr-12" variants={blockVariants}>
          <p className="font-[family-name:var(--font-display)] text-2xl font-semibold tracking-[-0.02em] text-[var(--color-text)] sm:text-3xl">
            PawWalk
          </p>
          <p className="site-footer__privacy max-w-md font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] sm:text-base">
            <span className="font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] sm:text-base">
              {privacyPrefix}
            </span>
            <a
              href="/privacy"
              aria-label={privacyLine}
              className="site-footer__link font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] underline underline-offset-4 transition-colors duration-200 ease-out hover:text-[var(--color-text)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:text-base"
            >
              Privacy policy.
            </a>
          </p>
        </motion.div>

        <motion.nav aria-label="Footer links" className="site-footer__links flex flex-col items-start gap-3 font-[family-name:var(--font-body)] text-sm sm:text-base" variants={blockVariants}>
          <a
            href="/terms"
            className="site-footer__link font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-text)] transition-colors duration-200 ease-out hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:text-base"
          >
            Terms
          </a>
          <a
            href="mailto:hello@pawwalk.example"
            className="site-footer__link font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-text)] transition-colors duration-200 ease-out hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:text-base"
          >
            Contact
          </a>
        </motion.nav>

        <motion.div className="site-footer__contact flex flex-col gap-3 font-[family-name:var(--font-body)] text-sm sm:text-base lg:items-end lg:text-right" variants={blockVariants}>
          <a
            href="mailto:hello@pawwalk.example"
            className="site-footer__link font-[family-name:var(--font-body)] text-sm font-medium text-[var(--color-text)] transition-colors duration-200 ease-out hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)] sm:text-base"
          >
            hello@pawwalk.example
          </a>
          <p className="site-footer__copyright font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-muted)] sm:text-base">
            © 2026 PawWalk. All rights reserved.
          </p>
        </motion.div>
      </div>
    </motion.footer>
  );
}
