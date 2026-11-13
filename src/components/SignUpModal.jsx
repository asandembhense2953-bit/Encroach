import { useEffect, useState } from "react";
import { CloseIcon } from "./Icons.jsx";

const EMPTY = { name: "", email: "", password: "", confirm: "" };
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Returns the first problem, or an empty string when the form is fine.
function check(v) {
  if (!v.name.trim()) return "Enter your full name.";
  if (!EMAIL_PATTERN.test(v.email.trim())) return "Enter a valid email address.";
  if (v.password.length < 8) return "Your password must have at least 8 characters.";
  if (v.password !== v.confirm) return "The two passwords do not match.";
  return "";
}

// Front end only. Nothing is sent or saved. Replace the demo message with the real
// sign-up request once the backend exists.
export default function SignUpModal({ onClose }) {
  const [values, setValues] = useState(EMPTY);
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const update = (name) => (e) => setValues({ ...values, [name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    const problem = check(values);
    setError(Boolean(problem));
    setMsg(problem || "Demo only. Sign up will work once the backend is connected.");
  };

  return (
    <div className="scrim center" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Sign up">
        <div className="modal-top">
          <h2>Sign up</h2>
          <button type="button" className="icon-btn dark" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        <form onSubmit={submit} noValidate>
          <label htmlFor="signup-name">
            Full name
            <input id="signup-name" autoFocus autoComplete="name" value={values.name} onChange={update("name")} />
          </label>
          <label htmlFor="signup-email">
            Email
            <input id="signup-email" type="email" autoComplete="email" value={values.email} onChange={update("email")} />
          </label>
          <label htmlFor="signup-password">
            Password
            <input id="signup-password" type="password" autoComplete="new-password" value={values.password} onChange={update("password")} />
          </label>
          <label htmlFor="signup-confirm">
            Confirm password
            <input id="signup-confirm" type="password" autoComplete="new-password" value={values.confirm} onChange={update("confirm")} />
          </label>
          {msg && (
            <p className={error ? "msg error" : "msg"} role="alert">
              {msg}
            </p>
          )}
          <button type="submit" className="btn lime wide">
            Create account
          </button>
        </form>
      </div>
    </div>
  );
}