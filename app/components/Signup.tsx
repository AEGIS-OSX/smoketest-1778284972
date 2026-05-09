"use client"

import { type FormEvent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type SignupErrors = {
  email?: string;
  consent?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Signup() {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [errors, setErrors] = useState<SignupErrors>({});
  const [isSuccess, setIsSuccess] = useState(false);

  const validateForm = () => {
    const nextErrors: SignupErrors = {};
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      nextErrors.email = "Enter your email address.";
    } else if (!emailPattern.test(trimmedEmail)) {
      nextErrors.email = "Enter a valid email address.";
    }

    if (!consent) {
      nextErrors.consent = "You must agree before joining the waitlist.";
    }

    return nextErrors;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm();
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // Async submit boundary: connect the waitlist API here when static export is replaced by a live endpoint.
    setIsSuccess(true);
  };

  return (
    <motion.section
      id="signup"
      className="signup-section w-full bg-[var(--color-surface-inverse)] px-4 py-16 text-[var(--color-text-inverse)] sm:px-6 sm:py-20 lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
    >
      <div className="signup-shell mx-auto flex w-full max-w-2xl flex-col items-center">
        <motion.div
          className="signup-card w-full rounded-[var(--radius-card)] bg-[var(--color-surface-inverse-raised)] px-5 py-8 shadow-[var(--shadow-card)] sm:px-8 sm:py-10"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.45, ease: "easeOut", delay: 0.08 }}
        >
          <h2 className="signup-title font-[family-name:var(--font-display)] text-3xl font-semibold leading-tight tracking-tight text-[var(--color-text-inverse)] sm:text-4xl">
            Get early access to PawWalk
          </h2>
          <p className="signup-copy mt-4 font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-text-inverse-muted)] sm:text-lg">
            We’ll only email launch details. You can unsubscribe at any time. {" "}
            <a className="font-[family-name:var(--font-body)] font-medium text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]" href="#footer">
              Privacy policy.
            </a>
          </p>

          <AnimatePresence mode="wait">
            {isSuccess ? (
              <motion.div
                key="signup-success"
                id="signup-success"
                className="signup-success mt-8 rounded-[var(--radius-card)] bg-[var(--color-accent-muted)] px-5 py-6 text-[var(--color-text-inverse)]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <h3 className="signup-success-title font-[family-name:var(--font-display)] text-2xl font-semibold leading-tight text-[var(--color-accent)]">
                  You’re on the list.
                </h3>
                <p className="signup-success-body mt-3 font-[family-name:var(--font-body)] text-base leading-7 text-[var(--color-text-inverse-muted)]">
                  Thanks for joining. We’ll send launch details when PawWalk is ready.
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="signup-form-shell"
                className="signup-form-shell mt-8 w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <form className="signup-form flex w-full flex-col gap-5" noValidate onSubmit={handleSubmit}>
                  <div className="signup-field flex w-full flex-col gap-2">
                    <label className="signup-label font-[family-name:var(--font-body)] text-sm font-semibold text-[var(--color-text-inverse)]" htmlFor="signup-email">
                      Email address
                    </label>
                    <input
                      id="signup-email"
                      className="signup-input min-h-12 w-full rounded-[var(--radius-control)] border border-transparent bg-[var(--color-surface)] px-4 py-3 font-[family-name:var(--font-body)] text-base text-[var(--color-text)] outline-none transition-colors duration-200 ease-out placeholder:text-[var(--color-text-muted)] focus-visible:border-[var(--color-accent)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                      type="email"
                      value={email}
                      placeholder="you@example.com"
                      required
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? "signup-email-error" : undefined}
                      onChange={(event) => {
                        setEmail(event.target.value);
                        if (errors.email) {
                          setErrors((currentErrors) => ({ ...currentErrors, email: undefined }));
                        }
                      }}
                    />
                    {errors.email ? (
                      <p id="signup-email-error" className="signup-error font-[family-name:var(--font-body)] text-sm leading-5 text-[var(--color-error)]" role="alert">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>

                  <div className="signup-field flex w-full flex-col gap-2">
                    <div className="signup-consent flex items-start gap-3">
                      <input
                        id="signup-consent"
                        className="signup-consent mt-1 h-5 w-5 shrink-0 rounded-[var(--radius-control)] border border-transparent bg-[var(--color-surface)] text-[var(--color-primary)] outline-none transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                        type="checkbox"
                        checked={consent}
                        required
                        aria-invalid={Boolean(errors.consent)}
                        aria-describedby={errors.consent ? "signup-consent-error" : undefined}
                        onChange={(event) => {
                          setConsent(event.target.checked);
                          if (errors.consent) {
                            setErrors((currentErrors) => ({ ...currentErrors, consent: undefined }));
                          }
                        }}
                      />
                      <label className="signup-consent-label font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-text-inverse-muted)]" htmlFor="signup-consent">
                        I agree to receive marketing emails about PawWalk and understand I can unsubscribe at any time.
                      </label>
                    </div>
                    {errors.consent ? (
                      <p id="signup-consent-error" className="signup-error font-[family-name:var(--font-body)] text-sm leading-5 text-[var(--color-error)]" role="alert">
                        {errors.consent}
                      </p>
                    ) : null}
                  </div>

                  <motion.button
                    id="signup-submit"
                    className="signup-submit min-h-12 w-full rounded-[var(--radius-control)] bg-[var(--color-primary)] px-5 py-3 font-[family-name:var(--font-body)] text-base font-semibold text-[var(--color-text-on-primary)] outline-none transition-colors duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] disabled:cursor-not-allowed disabled:opacity-70"
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.18, ease: "easeOut" }}
                  >
                    Join the waitlist
                  </motion.button>

                  <p className="signup-privacy font-[family-name:var(--font-body)] text-sm leading-6 text-[var(--color-text-inverse-muted)]">
                    We’ll only email launch details. You can unsubscribe at any time. {" "}
                    <a className="font-[family-name:var(--font-body)] font-medium text-[var(--color-accent)] underline decoration-[var(--color-accent)] underline-offset-4 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--color-accent)]" href="#footer">
                      Privacy policy.
                    </a>
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
