"use client";

import { useState } from "react";
import Button from "../../Components/ui/Button";

const STATUS = { IDLE: "idle", LOADING: "loading", SUCCESS: "success", ERROR: "error" };

const initialForm = { name: "", email: "", subject: "", message: "" };

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState(STATUS.IDLE);
  const [touched, setTouched] = useState({});

  const errors = {
    name: touched.name && form.name.trim().length === 0 ? "Name is required" : "",
    email: touched.email && !isValidEmail(form.email) ? "Enter a valid email address" : "",
    subject: touched.subject && form.subject.trim().length === 0 ? "Subject is required" : "",
    message: touched.message && form.message.trim().length < 10 ? "Message should be at least 10 characters" : "",
  };

  const isValid =
    form.name.trim().length > 0 &&
    isValidEmail(form.email) &&
    form.subject.trim().length > 0 &&
    form.message.trim().length >= 10;

  const update = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));
  const blur = (field) => () => setTouched((t) => ({ ...t, [field]: true }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setTouched({ name: true, email: true, subject: true, message: true });
    if (!isValid) return;

    setStatus(STATUS.LOADING);

    try {
      // NOTE: There is no `/api/contact` route in this project yet.
      // When ready, add an app/api/contact/route.js handler (e.g. saving to
      // Mongo or sending via an email provider) and point this fetch at it:
      //
      //   const response = await fetch("/api/contact", {
      //     method: "POST",
      //     headers: { "Content-Type": "application/json" },
      //     body: JSON.stringify(form),
      //   });
      //   if (!response.ok) throw new Error("Request failed");
      //
      // Until that route exists, we simulate a successful submission so the
      // UI/UX can be reviewed end-to-end.
      await new Promise((resolve) => setTimeout(resolve, 700));

      setStatus(STATUS.SUCCESS);
      setForm(initialForm);
      setTouched({});
    } catch {
      setStatus(STATUS.ERROR);
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate className="card p-6 sm:p-8 flex flex-col gap-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="label">
            Name
          </label>
          <input
            id="name"
            type="text"
            value={form.name}
            onChange={update("name")}
            onBlur={blur("name")}
            className={`field ${errors.name ? "field-error" : ""}`}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name && <p className="error-text">{errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="label">
            Email
          </label>
          <input
            id="email"
            type="email"
            value={form.email}
            onChange={update("email")}
            onBlur={blur("email")}
            className={`field ${errors.email ? "field-error" : ""}`}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email && <p className="error-text">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="label">
          Subject
        </label>
        <input
          id="subject"
          type="text"
          value={form.subject}
          onChange={update("subject")}
          onBlur={blur("subject")}
          className={`field ${errors.subject ? "field-error" : ""}`}
          placeholder="What's this about?"
          aria-invalid={Boolean(errors.subject)}
        />
        {errors.subject && <p className="error-text">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="label">
          Message
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={update("message")}
          onBlur={blur("message")}
          className={`field ${errors.message ? "field-error" : ""}`}
          placeholder="Tell us what's going on"
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="error-text">{errors.message}</p>}
      </div>

      <Button type="submit" variant="primary" disabled={status === STATUS.LOADING} className="w-full sm:w-fit">
        {status === STATUS.LOADING ? "Sending…" : "Send message"}
      </Button>

      {status === STATUS.SUCCESS && (
        <p className="success-text" role="status">
          Thanks — your message was sent. We&apos;ll get back to you soon.
        </p>
      )}
      {status === STATUS.ERROR && (
        <p className="error-text" role="alert">
          Something went wrong. Please try again in a moment.
        </p>
      )}
    </form>
  );
}
