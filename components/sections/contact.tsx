"use client";

import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { FormEvent, useState } from "react";
import { SectionHeading } from "@/components/ui/section-heading";

interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

const initialState: ContactPayload = {
  name: "",
  email: "",
  message: "",
};

export function ContactSection() {
  const [formData, setFormData] = useState<ContactPayload>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [feedback, setFeedback] = useState("");

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("loading");
    setFeedback("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Unable to send message");
      }

      setStatus("success");
      setFeedback("Message sent successfully. I will get back to you soon.");
      setFormData(initialState);
    } catch {
      setStatus("error");
      setFeedback("Something went wrong while sending your message.");
    }
  };

  return (
    <section id="contact" className="bg-slate-100/70 px-5 py-24 dark:bg-slate-900/40 md:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          overline="Contact"
          title="Let us build something exceptional"
          description="Whether you need a product MVP, platform modernization, or AI integration, I can help from strategy through production delivery."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4 }}
            className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
          >
            <h3 className="font-display text-2xl text-slate-900 dark:text-slate-100">Contact channels</h3>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Prefer async collaboration? Reach out through your preferred channel.
            </p>

            <div className="mt-6 space-y-3 text-sm">
              <a
                href="mailto:hello@example.com"
                className="inline-flex items-center gap-2 text-slate-700 transition-colors hover:text-cyan-600 dark:text-slate-200 dark:hover:text-cyan-300"
              >
                <Mail size={16} /> hello@example.com
              </a>
            </div>

            <div className="mt-8 flex gap-3">
              {[
                { label: "GitHub", href: "https://github.com", icon: FaGithub },
                { label: "LinkedIn", href: "https://linkedin.com", icon: FaLinkedinIn },
                { label: "Twitter", href: "https://x.com", icon: FaXTwitter },
              ].map((social) => (
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition-colors hover:border-cyan-500 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-cyan-300"
                  aria-label={social.label}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            onSubmit={onSubmit}
            className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-950"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-slate-700 dark:text-slate-300">
                Name
                <input
                  required
                  aria-label="Your name"
                  value={formData.name}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, name: event.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-cyan-800"
                />
              </label>

              <label className="text-sm text-slate-700 dark:text-slate-300">
                Email
                <input
                  required
                  type="email"
                  aria-label="Your email"
                  value={formData.email}
                  onChange={(event) =>
                    setFormData((current) => ({ ...current, email: event.target.value }))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-cyan-800"
                />
              </label>
            </div>

            <label className="mt-4 block text-sm text-slate-700 dark:text-slate-300">
              Message
              <textarea
                required
                aria-label="Your message"
                rows={6}
                value={formData.message}
                onChange={(event) =>
                  setFormData((current) => ({ ...current, message: event.target.value }))
                }
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white px-3 py-2 text-sm outline-none transition focus:border-cyan-500 focus:ring-2 focus:ring-cyan-200 dark:border-slate-700 dark:bg-slate-900 dark:focus:ring-cyan-800"
              />
            </label>

            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ y: -2 }}
              disabled={status === "loading"}
              type="submit"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-slate-700 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-cyan-400 dark:text-slate-900 dark:hover:bg-cyan-300"
            >
              {status === "loading" ? "Sending..." : "Send message"}
              <Send size={14} />
            </motion.button>

            {feedback ? (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className={`mt-4 text-sm ${
                  status === "success"
                    ? "text-emerald-600 dark:text-emerald-400"
                    : "text-rose-600 dark:text-rose-400"
                }`}
              >
                {feedback}
              </motion.p>
            ) : null}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
