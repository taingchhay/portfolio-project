"use client";

import { useState } from "react";
import { SendIcon } from "./icons";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // Build mailto link as fallback (replace with Formspree/EmailJS in production)
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:hello@example.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 3000);
    }, 500);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-text-secondary">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full rounded-xl border border-border-custom bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 outline-none transition-colors focus:border-accent"
          placeholder="Your name"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-text-secondary">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full rounded-xl border border-border-custom bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 outline-none transition-colors focus:border-accent"
          placeholder="your@email.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-text-secondary">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="w-full resize-none rounded-xl border border-border-custom bg-background px-4 py-3 text-sm text-text-primary placeholder-text-secondary/50 outline-none transition-colors focus:border-accent"
          placeholder="Tell me about your project..."
        />
      </div>
      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-background transition-colors hover:bg-accent-hover disabled:opacity-50"
      >
        <SendIcon />
        {status === "idle" && "Send Message"}
        {status === "sending" && "Sending..."}
        {status === "sent" && "Sent!"}
        {status === "error" && "Try Again"}
      </button>
    </form>
  );
}
