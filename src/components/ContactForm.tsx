"use client";

import { ArrowUpRight } from "lucide-react";
import { FormEvent, useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="mx-auto max-w-3xl px-6 pb-32">
      <div className="rounded-3xl border border-white/10 bg-white/5 px-8 py-12 md:px-12">
        <div className="mb-8 flex items-center gap-2">
          <span className="size-1 rounded-full bg-gray-400" />
          <span className="text-sm text-gray-400">Contact Form</span>
        </div>

        <h2 className="mb-12 text-6xl font-medium leading-none tracking-tight text-white md:text-8xl">
          Contact For
          <br />
          Work
        </h2>

        {submitted ? (
          <p className="text-lg text-green-400">Thanks! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-12 pt-8">
            <Field label="Your E-mail" placeholder="Enter the Email" type="email" />
            <Field label="Your Name" placeholder="Enter Your Name Here" />
            <Field label="Message" placeholder="Enter Your Message Here" multiline />

            <button
              type="submit"
              className="flex items-center gap-4 rounded-full bg-white py-3 pl-8 pr-3 text-lg font-medium text-black transition hover:bg-gray-100"
            >
              Send Request
              <span className="flex size-10 items-center justify-center rounded-full bg-black text-white">
                <ArrowUpRight className="size-5" />
              </span>
            </button>
          </form>
        )}
      </div>
    </section>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  multiline = false,
}: {
  label: string;
  placeholder: string;
  type?: string;
  multiline?: boolean;
}) {
  const className =
    "w-full border-b border-white/20 bg-transparent px-3 py-2.5 text-white placeholder:text-gray-600 outline-none focus:border-white/40";

  return (
    <div className="space-y-2">
      <label className="block text-base font-medium text-white">{label}</label>
      {multiline ? (
        <textarea
          rows={3}
          placeholder={placeholder}
          required
          className={`${className} resize-none`}
        />
      ) : (
        <input type={type} placeholder={placeholder} required className={className} />
      )}
    </div>
  );
}
