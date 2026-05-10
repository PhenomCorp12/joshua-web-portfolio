"use client";

import { useState, useRef, useEffect } from "react";
import { Mail, MessageCircle, Briefcase, Send, X, Loader2, CheckCircle } from "lucide-react";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";

export default function Contact() {
  const { theme } = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsModalOpen(false);
    };
    if (isModalOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  // Close modal when clicking outside
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      setIsModalOpen(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Using FormSubmit.co — a free service that emails you form submissions
      const response = await fetch("https://formsubmit.co/ajax/chidiebube95@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          subject: formData.get("subject"),
          message: formData.get("message"),
          _captcha: "false", // Disable captcha for simplicity
          _template: "table",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
        setTimeout(() => {
          setIsModalOpen(false);
          setIsSubmitted(false);
        }, 3000);
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <section id="contact" className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Let&apos;s <span className="gradient-text">Work Together</span>
          </h2>
          <p className="section-subtitle mx-auto">
            Have a project in mind or an opportunity to discuss? I&apos;d love to
            hear from you. Choose the channel that works best.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Email Card */}
          <Link
            href="mailto:chidiebube95@gmail.com"
            className="group glass-card-hover rounded-2xl p-8 text-center flex flex-col items-center gap-4"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                theme === "light"
                  ? "bg-primary-100 group-hover:bg-primary-200"
                  : "bg-primary-900/30 group-hover:bg-primary-900/50"
              }`}
            >
              <Mail size={24} className="text-primary-600 dark:text-primary-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg font-display">Email Me</h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                chidiebube95@gmail.com
              </p>
            </div>
            <span className="text-sm font-medium text-primary-600 dark:text-primary-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Send Message <Send size={14} />
            </span>
          </Link>

          {/* WhatsApp Card */}
          <Link
            href="https://wa.me/2348072536380"
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-card-hover rounded-2xl p-8 text-center flex flex-col items-center gap-4"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                theme === "light"
                  ? "bg-green-100 group-hover:bg-green-200"
                  : "bg-green-900/30 group-hover:bg-green-900/50"
              }`}
            >
              <MessageCircle size={24} className="text-green-600 dark:text-green-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg font-display">WhatsApp</h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                +234 807 253 6380
              </p>
            </div>
            <span className="text-sm font-medium text-green-600 dark:text-green-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Start Chat <Send size={14} />
            </span>
          </Link>

          {/* Resume Card */}
          <Link
            href="/images/resume.pdf"
            download
            className="group glass-card-hover rounded-2xl p-8 text-center flex flex-col items-center gap-4 sm:col-span-2 lg:col-span-1"
          >
            <div
              className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors ${
                theme === "light"
                  ? "bg-accent-100 group-hover:bg-accent-200"
                  : "bg-accent-900/30 group-hover:bg-accent-900/50"
              }`}
            >
              <Briefcase size={24} className="text-accent-600 dark:text-accent-400" />
            </div>
            <div>
              <h3 className="font-semibold text-lg font-display">
                Download Resume
              </h3>
              <p className="text-sm text-[var(--muted)] mt-1">
                PDF — Full experience &amp; skills
              </p>
            </div>
            <span className="text-sm font-medium text-accent-600 dark:text-accent-400 inline-flex items-center gap-1 group-hover:gap-2 transition-all">
              Download <Send size={14} />
            </span>
          </Link>
        </div>

        {/* Bottom CTA — Opens Modal */}
        <div className="text-center mt-12">
          <p className="text-sm text-[var(--muted)] mb-4">
            Prefer to fill out a form instead?
          </p>
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5"
          >
            <Mail size={18} />
            Hire Me
          </button>
        </div>
      </section>

      {/* ───────── Modal Overlay ───────── */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
          onClick={handleBackdropClick}
        >
          {/* Modal Panel */}
          <div
            ref={modalRef}
            className={`relative w-full max-w-lg rounded-2xl shadow-2xl overflow-hidden ${
              theme === "light" ? "bg-white" : "bg-[#1a1a1f]"
            }`}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsModalOpen(false)}
              className={`absolute top-4 right-4 p-2 rounded-full transition-colors z-10 ${
                theme === "light"
                  ? "text-gray-500 hover:text-gray-700 hover:bg-gray-100"
                  : "text-gray-400 hover:text-white hover:bg-gray-800"
              }`}
            >
              <X size={20} />
            </button>

            {/* Success State */}
            {isSubmitted ? (
              <div className="p-10 text-center">
                <CheckCircle size={56} className="mx-auto text-green-500 mb-4" />
                <h3 className="text-xl font-bold font-display mb-2">Message Sent!</h3>
                <p className={`text-sm ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                  Thanks for reaching out. I&apos;ll get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <>
                {/* Modal Header */}
                <div
                  className={`px-8 pt-8 pb-4 border-b ${
                    theme === "light" ? "border-gray-100" : "border-gray-800"
                  }`}
                >
                  <h3 className="text-xl font-bold font-display">
                    Let&apos;s Build Something
                  </h3>
                  <p className={`text-sm mt-1 ${theme === "light" ? "text-gray-600" : "text-gray-400"}`}>
                    Fill out the form and I&apos;ll get back to you within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="name"
                      className={`block text-sm font-medium mb-1.5 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      placeholder="John Doe"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 ${
                        theme === "light"
                          ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                          : "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                      }`}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="email"
                      className={`block text-sm font-medium mb-1.5 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      placeholder="john@example.com"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 ${
                        theme === "light"
                          ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                          : "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                      }`}
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="subject"
                      className={`block text-sm font-medium mb-1.5 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      placeholder="Project Collaboration"
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 ${
                        theme === "light"
                          ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                          : "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                      }`}
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className={`block text-sm font-medium mb-1.5 ${
                        theme === "light" ? "text-gray-700" : "text-gray-300"
                      }`}
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      placeholder="Tell me about your project..."
                      className={`w-full px-4 py-3 rounded-xl border text-sm outline-none resize-none transition-all duration-200 focus:ring-2 focus:ring-primary-500/30 focus:border-primary-500 ${
                        theme === "light"
                          ? "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400"
                          : "bg-gray-800/50 border-gray-700 text-white placeholder-gray-500"
                      }`}
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-primary-600 hover:bg-primary-700 dark:bg-primary-500 dark:hover:bg-primary-600 rounded-full transition-all duration-300 shadow-lg shadow-primary-500/25 hover:shadow-primary-500/40 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}