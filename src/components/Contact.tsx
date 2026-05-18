"use client";

import { motion } from "framer-motion";
import { useState, useMemo } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { ContactFormData } from "@/types";
import { useI18n } from "@/i18n";

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { t } = useI18n();

  const contactFormSchema = useMemo(
    () =>
      z.object({
        name: z.string().min(2, t.contact.validationName),
        email: z.string().email(t.contact.validationEmail),
        company: z.string().min(2, t.contact.validationCompany),
        field: z.string().min(2, t.contact.validationField),
        description: z.string().min(10, t.contact.validationDescription),
        captcha: z.boolean().refine((val) => val === true, t.contact.validationCaptcha),
      }),
    [t]
  );

  const { register, handleSubmit, formState: { errors }, reset } =
    useForm<ContactFormData>({ resolver: zodResolver(contactFormSchema) });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (response.ok) { setIsSubmitted(true); reset(); }
      else throw new Error("Failed to submit form");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert(t.contact.errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200 text-sm placeholder:text-gray-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1.5";

  if (isSubmitted) {
    return (
      <motion.div
        className="text-center py-16"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center mx-auto mb-5">
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{t.contact.thankYou}</h3>
        <p className="text-gray-500 text-sm mb-6 max-w-xs mx-auto">{t.contact.successMessage}</p>
        <button
          onClick={() => setIsSubmitted(false)}
          className="inline-flex items-center px-6 py-2.5 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors duration-300"
        >
          {t.contact.sendAnother}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>{t.contact.fullName} *</label>
          <input {...register("name")} type="text" id="name" className={inputClass} placeholder={t.contact.fullNamePlaceholder} />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>{t.contact.email} *</label>
          <input {...register("email")} type="email" id="email" className={inputClass} placeholder={t.contact.emailPlaceholder} />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="company" className={labelClass}>{t.contact.company} *</label>
          <input {...register("company")} type="text" id="company" className={inputClass} placeholder={t.contact.companyPlaceholder} />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company.message}</p>}
        </div>
        <div>
          <label htmlFor="field" className={labelClass}>{t.contact.field} *</label>
          <input {...register("field")} type="text" id="field" className={inputClass} placeholder={t.contact.fieldPlaceholder} />
          {errors.field && <p className="mt-1 text-xs text-red-500">{errors.field.message}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="description" className={labelClass}>{t.contact.description} *</label>
        <textarea {...register("description")} id="description" rows={5} className={`${inputClass} resize-none`} placeholder={t.contact.descriptionPlaceholder} />
        {errors.description && <p className="mt-1 text-xs text-red-500">{errors.description.message}</p>}
      </div>

      <div className="flex items-center gap-2.5">
        <input {...register("captcha")} type="checkbox" id="captcha" className="h-4 w-4 rounded border-gray-300 text-black focus:ring-black" />
        <label htmlFor="captcha" className="text-sm text-gray-600">{t.contact.captcha} *</label>
        {errors.captcha && <p className="text-xs text-red-500">{errors.captcha.message}</p>}
      </div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-black text-white font-semibold py-3.5 px-8 rounded-full hover:bg-gray-900 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 flex items-center justify-center gap-2 text-sm"
        whileHover={{ scale: 1.01 }}
        whileTap={{ scale: 0.99 }}
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t.contact.sending}
          </>
        ) : (
          <>
            {t.contact.sendMessage}
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </>
        )}
      </motion.button>
    </form>
  );
}

export default function Contact() {
  const { t } = useI18n();

  return (
    <div id="contact" className="bg-[#0c0c0c] py-24 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 [background-image:radial-gradient(circle,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-blue-500/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">

          {/* Left — text content */}
          <motion.div
            className="lg:sticky lg:top-28 space-y-8 pt-4"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <span className="inline-block text-xs font-semibold tracking-widest uppercase text-white/30 mb-5">
                {t.nav.contact}
              </span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-5">
                {t.contact.title}
              </h2>
              <p className="text-gray-400 leading-relaxed">
                {t.contact.subtitle}
              </p>
            </div>

            {/* Feature list */}
            <div className="space-y-4 pt-2">
              {[
                {
                  icon: (
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  ),
                  label: t.contact.featureFast,
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                  ),
                  label: t.contact.featureTailored,
                },
                {
                  icon: (
                    <svg className="w-4 h-4 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  ),
                  label: t.contact.featureSatisfaction,
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="w-8 h-8 rounded-lg bg-white/[0.05] border border-white/[0.08] flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-gray-400 text-sm">{item.label}</span>
                </motion.div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/digitalcrafters.com.mx/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="https://www.tiktok.com/@digital.crafters3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.75a4.85 4.85 0 01-1.01-.06z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61589183061266"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-white/40 hover:text-white hover:bg-white/[0.09] hover:border-white/20 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
            </div>

            {/* Availability indicator */}
            <div className="flex items-center gap-2.5 pt-4 border-t border-white/[0.07]">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse flex-shrink-0" />
              <span className="text-gray-500 text-sm">{t.contact.availability}</span>
            </div>
          </motion.div>

          {/* Right — form card */}
          <motion.div
            className="bg-white rounded-2xl p-8 shadow-2xl shadow-black/40"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-gray-900">{t.contact.formTitle}</h3>
              <p className="text-gray-500 text-sm mt-1">{t.contact.formSubtitle}</p>
            </div>
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </div>
  );
}
