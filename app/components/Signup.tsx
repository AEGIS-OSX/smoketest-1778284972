"use client"

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

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

  const validateForm = () => {
    const nextErrors: SignupErrors = {};
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      nextErrors.email = `Enter your email address.`;
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = `Enter a valid email address.`;
    }

    if (!hasConsent) {
      nextErrors.consent = `You must agree before joining the waitlist.`;
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    // Async submit boundary: static export UI contract only.
    // Replace this boundary with the production waitlist request when an endpoint exists.
    setIsSubmitted(true);
  };

  return (
    <motion.section
      id="signup"
      className="signup-section w-full bg-[var(--color-text)] px-4 py-16 text-[var(--color-background)] sm:px-6 sm:py-20 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="signup-shell mx-auto flex w-full max-w-2xl flex-col items-center justify-center">
        <motion.div
          className="signup-card w-full rounded-3xl bg-[var(--color-text)] p-6 ring-1 ring-[var(--color-background)]/15 sm:p-8 lg:p-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
        >
          <h2 className="signup-title font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-[var(--color-background)] sm:text-4xl">
            Get early access to PawWalk
          </h2>
          <p className="signup-copy mt-4 max-w-xl font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-background)]/85 sm:text-lg">
            We’ll only email launch details. You can unsubscribe at any time. <a className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-accent)] underline decoration-[var(--color-accent)]/60 underline-offset-4 transition-colors duration-200 ease-out hover:text-[var(--color-background)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]" href="#footer">Privacy policy.</a>
          </p>

          <AnimatePresence mode="wait">
            {isSubmitted ? (
              <motion.div
                key="signup-success"
                id="signup-success"
                className="signup-success mt-8 rounded-2xl bg-[var(--color-accent)]/15 p-5 ring-1 ring-[var(--color-accent)]/35"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h3 className="signup-success-title font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[var(--color-accent)]">
                  You’re on the list.
                </h3>
                <p className="signup-success-body mt-3 font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-background)]/85">
                  Thanks for joining. We’ll send launch details when PawWalk is ready.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="signup-form-state"
                className="mt-8 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <form className="signup-form flex w-full flex-col gap-5" onSubmit={handleSubmit} noValidate>
                  <div className="signup-field flex w-full flex-col gap-2">
                    <label className="signup-label font-[family-name:var(--font-body)] text-sm font-semibold leading-6 text-[var(--color-background)]" htmlFor="signup-email">
                      Email address
                    </label>
                    <input
                      id="signup-email"
                      className="signup-input w-full rounded-full bg-[var(--color-background)] px-5 py-4 font-[family-name:var(--font-body)] text-base leading-6 text-[var(--color-text)] caret-[var(--color-primary)] outline-none ring-2 ring-transparent transition duration-200 ease-out placeholder:text-[var(--color-muted)] focus-visible:ring-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
                      type="email"
                      value={email}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (errors.email) {
                          setErrors((currentErrors) => ({ ...currentErrors, email: undefined }));
                        }
                      }}
                      placeholder="you@example.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "signup-email-error" : undefined}
                    />
                    {errors.email ? (
                      <p id="signup-email-error" className="signup-error font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-accent)]" role="alert">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="signup-field flex w-full flex-col gap-2">
                    <div className="signup-consent flex items-start gap-3">
                      <input
                        id="signup-consent"
                        className="mt-1 h-5 w-5 shrink-0 rounded border-0 bg-[var(--color-background)] text-[var(--color-primary)] outline-none ring-2 ring-transparent transition duration-200 ease-out focus-visible:ring-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
                        type="checkbox"
                        checked={hasConsent}
                        onChange={(event) => {
                          setHasConsent(event.target.checked);
                          if (errors.consent) {
                            setErrors((currentErrors) => ({ ...currentErrors, consent: undefined }));
                          }
                        }}
                        required
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "signup-consent-error" : undefined}
                      />
                      <label className="signup-consent-label font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-background)]/85" htmlFor="signup-consent">
                        I agree to receive marketing emails about PawWalk and understand I can unsubscribe at any time.
                      </label>
                    </div>
                    {errors.consent ? (
                      <p id="signup-consent-error" className="signup-error font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-accent)]" role="alert">
                        {errors.consent}
                      </p>
                    ) : null}
                  </div>

                  <motion.button
                    id="signup-submit"
                    className="signup-submit inline-flex min-h-12 w-full items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-4 font-[family-name:var(--font-body)] text-base font-semibold leading-6 text-[var(--color-text)] transition-colors duration-200 ease-out hover:bg-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-60"
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Join the waitlist
                  </motion.button>

                  <p className="signup-privacy font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-background)]/70">
                    We’ll only email launch details. You can unsubscribe at any time. <a className="font-[family-name:var(--font-body)] font-semibold text-[var(--color-accent)] underline decoration-[var(--color-accent)]/60 underline-offset-4 transition-colors duration-200 ease-out hover:text-[var(--color-background)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]" href="#footer">Privacy policy.</a>
                  </p>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
}
