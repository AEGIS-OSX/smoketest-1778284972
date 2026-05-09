"use client";

import { motion } from "framer-motion";
import { ProjectImage } from "@/app/components/ProjectImage";

const sectionVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const blockVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut", staggerChildren: 0.08 },
  },
};

const textReveal = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const imageRevealRight = {
  hidden: { opacity: 0, x: 28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const imageRevealLeft = {
  hidden: { opacity: 0, x: -28 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const stepsVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut", staggerChildren: 0.04 },
  },
};

const steps = [
  "Search nearby walkers and pick a time.",
  "Confirm the walk and any notes for the sitter.",
  "Your dog gets walked, you get peace of mind.",
];

export default function Features() {
  return (
    <motion.section
      id="features"
      className="features-section bg-[var(--color-bg)] px-4 py-20 text-[var(--color-text)] sm:px-6 lg:px-8 lg:py-28"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      <div className="features-shell mx-auto flex w-full max-w-6xl flex-col gap-16 md:gap-20">
        <motion.div className="features-intro max-w-2xl" variants={blockVariants}>
          <motion.p
            className="features-eyebrow mb-4 font-[family-name:var(--font-body)] text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-primary)]"
            variants={textReveal}
          >
            Why PawWalk
          </motion.p>
          <motion.h2
            className="features-title font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[var(--color-text)] sm:text-4xl lg:text-5xl"
            variants={textReveal}
          >
            Neighborhood-first access, built for busy days.
          </motion.h2>
          <motion.p
            className="features-body mt-5 max-w-xl font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7"
            variants={textReveal}
          >
            Quickly request neighborhood-first access to walkers, confirm a time, and let your dog enjoy a walk while you handle the day.
          </motion.p>
        </motion.div>

        <div className="features-shell flex w-full flex-col gap-14 md:gap-18">
          <motion.div
            className="feature-block grid items-center gap-8 md:grid-cols-[42fr_58fr] md:gap-10 lg:gap-14"
            variants={blockVariants}
          >
            <motion.div className="feature-copy max-w-xl md:max-w-none" variants={textReveal}>
              <h3 className="feature-title font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--color-text)] sm:text-3xl">
                Neighborhood-first access
              </h3>
              <p className="feature-text mt-4 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7">
                Find local walkers near you, scheduled to suit your routine.
              </p>
            </motion.div>
            <motion.div className="feature-media w-full" variants={imageRevealRight}>
              <div className="feature-image overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)]">
                <ProjectImage id="feature_1" />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="feature-block feature-block--reverse grid items-center gap-8 bg-[var(--color-accent)] px-5 py-8 text-[var(--color-text)] md:grid-cols-2 md:gap-10 md:px-8 md:py-10 lg:gap-14 lg:px-10 lg:py-12"
            variants={blockVariants}
          >
            <motion.div className="feature-media order-2 w-full md:order-1" variants={imageRevealLeft}>
              <div className="feature-image overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-bg)]">
                <ProjectImage id="feature_2" />
              </div>
            </motion.div>
            <motion.div className="feature-copy order-1 max-w-xl md:order-2 md:max-w-none" variants={textReveal}>
              <h3 className="feature-title font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--color-text)] sm:text-3xl">
                Reliable, repeatable walks
              </h3>
              <p className="feature-text mt-4 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7">
                Set recurring times so your dog gets outdoor time even on packed days.
              </p>
            </motion.div>
          </motion.div>

          <motion.div
            className="feature-block feature-block--stacked grid gap-8 md:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] md:items-stretch md:gap-10 lg:gap-14"
            variants={blockVariants}
          >
            <motion.div className="feature-copy flex max-w-xl flex-col justify-center py-2 md:max-w-none md:py-8" variants={textReveal}>
              <h3 className="feature-title font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--color-text)] sm:text-3xl">
                Confirmed care you can count on
              </h3>
              <p className="feature-text mt-4 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7">
                Simple scheduling and clear confirmations so you always know who is coming.
              </p>
            </motion.div>
            <motion.div className="feature-media flex min-h-full w-full items-stretch" variants={imageRevealRight}>
              <div className="feature-image min-h-64 w-full overflow-hidden rounded-[var(--radius-lg)] bg-[var(--color-surface)] md:min-h-80">
                <ProjectImage id="feature_3" />
              </div>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="howitworks max-w-3xl bg-[var(--color-surface)] px-5 py-7 md:px-8 md:py-9"
          variants={stepsVariants}
        >
          <motion.h3
            className="howitworks-title font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight tracking-[-0.02em] text-[var(--color-text)]"
            variants={textReveal}
          >
            How it works
          </motion.h3>
          <motion.p
            className="howitworks-body mt-4 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-muted)] sm:text-lg sm:leading-7"
            variants={textReveal}
          >
            Quickly request neighborhood-first access to walkers, confirm a time, and let your dog enjoy a walk while you handle the day.
          </motion.p>
          <motion.ul className="howitworks-list mt-6 flex flex-col gap-3" variants={stepsVariants}>
            {steps.map((step) => (
              <motion.li
                key={step}
                className="howitworks-item font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text)]"
                variants={textReveal}
              >
                {step}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.section>
  );
}
