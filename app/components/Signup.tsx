"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

type SignupErrors = {
  email?: string;
  consent?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [hasConsent, setHasConsent] = useState(false);
  const [errors, setErrors] = useState<SignupErrors>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  const validateForm = () => {
    const nextErrors: SignupErrors = {};
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Enter your email address.";
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!hasConsent) {
      nextErrors.consent = "You must agree before joining the waitlist.";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitted(true);
  };

  return (
    <motion.section
      id="signup"
      className="bg-[var(--color-bg)] px-5 py-24 text-[var(--color-text)] sm:px-8 sm:py-28 lg:px-16 lg:py-32"
      initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: shouldReduceMotion ? 0.01 : 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto grid max-w-4xl gap-8 rounded-[32px] bg-[var(--color-accent)]/18 px-6 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
        <div className="max-w-2xl">
          <p className="font-[family-name:var(--font-body)] text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
            Email Capture
          </p>
          <h2 className="mt-4 font-[family-name:var(--font-display)] text-[24px] font-semibold leading-[30px] tracking-[-0.03em] text-[var(--color-text)] sm:text-[32px] sm:leading-[40px]">
            Get early access to PawWalk
          </h2>
          <p className="mt-4 font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-text)]">
            {`We’ll only email launch details. You can unsubscribe at any time. `}
            <a
              href="#footer"
              className="underline underline-offset-4 transition-colors duration-150 ease-out hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
            >
              Privacy policy.
            </a>
          </p>
        </div>

        <AnimatePresence mode="wait">
          {isSubmitted ? (
            <motion.div
              key="success"
              id="signup-success"
              className="rounded-[24px] bg-[var(--color-bg)] px-6 py-8"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: "easeOut" }}
            >
              <p className="font-[family-name:var(--font-body)] text-[14px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]">
                Joined
              </p>
              <p className="mt-4 font-[family-name:var(--font-display)] text-[24px] font-semibold leading-[30px] tracking-[-0.02em] text-[var(--color-text)]">
                Get early access to PawWalk
              </p>
              <p className="mt-4 font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-text)]">
                We’ll only email launch details. You can unsubscribe at any time. Privacy policy.
              </p>
            </motion.div>
          ) : (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              className="grid gap-6 rounded-[24px] bg-[var(--color-bg)] px-6 py-8"
              initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: shouldReduceMotion ? 0 : -16 }}
              transition={{ duration: shouldReduceMotion ? 0.01 : 0.3, ease: "easeOut" }}
            >
              <div className="grid gap-2">
                <label
                  htmlFor="signup-email"
                  className="font-[family-name:var(--font-body)] text-[14px] font-semibold leading-[20px] text-[var(--color-text)]"
                >
                  Email
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  className="min-h-14 rounded-full border border-[var(--color-muted)] bg-white px-6 font-[family-name:var(--font-body)] text-[16px] leading-[24px] text-[var(--color-text)] outline-none transition-shadow duration-150 ease-out placeholder:text-[var(--color-muted)] focus-visible:ring-4 focus-visible:ring-[var(--color-primary)]/20"
                  placeholder="hello@pawwalk.example"
                  aria-invalid={errors.email ? true : false}
                  aria-describedby={errors.email ? "signup-email-error" : undefined}
                  required
                />
                {errors.email ? (
                  <p id="signup-email-error" role="alert" className="font-[family-name:var(--font-body)] text-[14px] leading-[20px] text-red-600">
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <input id="signup-name" name="name" type="hidden" value="" />

              <div className="grid gap-3">
                <label className="flex items-start gap-3 font-[family-name:var(--font-body)] text-[14px] leading-[20px] text-[var(--color-text)]">
                  <input
                    type="checkbox"
                    checked={hasConsent}
                    onChange={(event) => setHasConsent(event.target.checked)}
                    className="mt-1 h-4 w-4 rounded border border-[var(--color-muted)] text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
                  />
                  <span>
                    {`We’ll only email launch details. You can unsubscribe at any time. `}
                    <a
                      href="#footer"
                      className="underline underline-offset-4 transition-colors duration-150 ease-out hover:text-[var(--color-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                    >
                      Privacy policy.
                    </a>
                  </span>
                </label>
                {errors.consent ? (
                  <p role="alert" className="font-[family-name:var(--font-body)] text-[14px] leading-[20px] text-red-600">
                    {errors.consent}
                  </p>
                ) : null}
              </div>

              <motion.button
                id="signup-submit"
                type="submit"
                className="inline-flex min-h-14 items-center justify-center rounded-full bg-[var(--color-primary)] px-8 py-4 font-[family-name:var(--font-body)] text-[18px] font-semibold leading-[24px] text-white transition-colors duration-150 ease-out hover:bg-[var(--color-border)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-primary)]"
                whileTap={shouldReduceMotion ? undefined : { scale: 0.98 }}
              >
                Join the waitlist
              </motion.button>
            </motion.form>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}