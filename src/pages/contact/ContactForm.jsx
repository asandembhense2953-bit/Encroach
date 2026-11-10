import { useState } from "react";
import { CONTACT } from "../../data/content.js";
import { AlertIcon, ArrowIcon } from "../../components/Icons.jsx";

const EMPTY = { name: "", email: "", phone: "", subject: "", message: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Full name is required.";
  if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = "Please enter a valid email address.";
  if (!values.subject) errors.subject = "Please select a subject.";
  if (!values.message.trim()) errors.message = "Message is required.";
  return errors;
}

function Field({ name, label, required, error, wide, children }) {
  return (
    <div className={wide ? "field wide" : "field"}>
      <label htmlFor={name}>
        {label}
        {required && <span aria-hidden="true"> *</span>}
      </label>
      {children}
      {error && (
        <p className="field-error" id={`${name}-error`} role="alert">
          <AlertIcon />
          {error}
        </p>
      )}
    </div>
  );
}

export default function ContactForm() {
  const [values, setValues] = useState(EMPTY);
  const [submitted, setSubmitted] = useState(false);
  const [sent, setSent] = useState(false);

  // Errors only appear after the first "Send Enquiry" click, then update as the visitor types.
  const errors = submitted ? validate(values) : {};

  const bind = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: (e) => setValues({ ...values, [name]: e.target.value }),
    "aria-invalid": errors[name] ? "true" : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // The email and database part comes with the backend. For now a valid form shows the thank-you message.
    if (Object.keys(validate(values)).length === 0) setSent(true);
  };

  const reset = () => {
    setValues(EMPTY);
    setSubmitted(false);
    setSent(false);
  };

  if (sent) {
    return (
      <div className="contact-card thanks" role="status">
        <h2>Thank you</h2>
        <p>Your enquiry has been received. We will get back to you soon.</p>
        <button type="button" className="contact-send" onClick={reset}>
          Send another enquiry
        </button>
      </div>
    );
  }

  return (
    <form className="contact-card contact-form" onSubmit={handleSubmit} noValidate>
      <Field name="name" label="Full Name" required error={errors.name}>
        <input type="text" placeholder="Enter your full name" autoComplete="name" {...bind("name")} />
      </Field>

      <Field name="email" label="Email" required error={errors.email}>
        <input type="email" placeholder="Enter your email address" autoComplete="email" {...bind("email")} />
      </Field>

      <Field name="phone" label="Phone (optional)">
        <input type="tel" placeholder="Enter your phone number" autoComplete="tel" {...bind("phone")} />
      </Field>

      <Field name="subject" label="Subject" required error={errors.subject}>
        <select {...bind("subject")}>
          <option value="">Select a subject</option>
          {CONTACT.subjects.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </Field>

      <Field name="message" label="Message" required wide error={errors.message}>
        <textarea rows="4" placeholder="Type your message here..." {...bind("message")} />
      </Field>

      <div className="field wide">
        <button type="submit" className="contact-send">
          Send Enquiry
          <ArrowIcon />
        </button>
      </div>
    </form>
  );
}