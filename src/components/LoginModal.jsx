import { useEffect, useState } from "react";
import { CloseIcon } from "./Icons.jsx";

// Front end only. Nothing is sent or checked. Replace onSubmit with the real
// college SSO redirect once the backend and identity provider exist.
export default function LoginModal({ onClose }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  const submit = (e) => {
    e.preventDefault();
    if (!id.trim() || !pw) {
      setError(true);
      setMsg("Enter your student number or email, and your password.");
      return;
    }
    setError(false);
    setMsg("Demo only. Login will work once the backend and college SSO are connected.");
  };

  return (
    <div className="scrim center" onMouseDown={(e) => e.target === e.currentTarget && onClose()}>
      <div className="modal" role="dialog" aria-modal="true" aria-label="Member login">
        <div className="modal-top">
          <h2>Member login</h2>
          <button type="button" className="icon-btn dark" onClick={onClose} aria-label="Close">
            <CloseIcon />
          </button>
        </div>
        <button
          type="button"
          className="btn navy wide"
          onClick={() => {
            setError(false);
            setMsg("Demo only. The college SSO button will redirect to the college sign-in page.");
          }}
        >
          Continue with college account
        </button>
        <div className="or">or use your details</div>
        <form onSubmit={submit} noValidate>
          <label htmlFor="login-id">
            Student number or email
            <input id="login-id" autoFocus autoComplete="username" value={id} onChange={(e) => setId(e.target.value)} />
          </label>
          <label htmlFor="login-pw">
            Password
            <input id="login-pw" type="password" autoComplete="current-password" value={pw} onChange={(e) => setPw(e.target.value)} />
          </label>
          {msg && (
            <p className={error ? "msg error" : "msg"} role="alert">
              {msg}
            </p>
          )}
          <button type="submit" className="btn lime wide">
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}
