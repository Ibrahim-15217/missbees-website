import { useState } from "react";
import Button from "./Button";

function ContactForm({ fields, note, submitLabel = "Send Enquiry", dark = false }) {
  const [values, setValues] = useState(
    Object.fromEntries(fields.map((f) => [f.name, ""]))
  );
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [sending, setSending] = useState(false);

  const validate = (data) => {
    const next = {};
    fields.forEach((f) => {
      const value = data[f.name] ?? "";
      if (f.required && !value.trim()) {
        next[f.name] = "This field is required.";
      } else if (f.type === "email" && value.trim()) {
        const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
        if (!ok) next[f.name] = "Please enter a valid email address.";
      }
    });
    const message = data.message || "";
    if ("message" in data && message.trim().length < 10) {
      next.message = "Please write a message of at least 10 characters.";
    }
    return next;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((err) => ({ ...err, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setSending(true);
    setStatus(null);

    const endpoint = import.meta.env.VITE_FORM_ENDPOINT;
    const payload = {
      ...values,
      _subject: `${submitLabel} from Missbees website`,
      _template: "table",
    };

    try {
      if (endpoint) {
        const res = await fetch(endpoint, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify(payload),
        });
        if (!res.ok) throw new Error("Request failed");
      } else {
        // Placeholder mode: Formspree endpoint not configured yet.
        await new Promise((r) => setTimeout(r, 800));
        console.info("[Missbees] Demo form submission:", payload);
      }
      setStatus("success");
      setValues(Object.fromEntries(fields.map((f) => [f.name, ""])));
    } catch {
      setStatus("error");
    } finally {
      setSending(false);
    }
  };

  return (
    <form className={`form ${dark ? "form--dark" : ""}`} onSubmit={handleSubmit} noValidate>
      <div className="form__grid">
        {fields.map((f) => {
          const id = `field-${f.name}`;
          return (
            <div key={f.name} className={f.component === "select" || f.full ? "form-group form-group--full" : "form-group"}>
              <label className="form-label" htmlFor={id}>
                {f.label} {f.required && <span aria-hidden="true">*</span>}
              </label>

              {f.component === "textarea" ? (
                <textarea
                  id={id}
                  name={f.name}
                  className={`form-control ${errors[f.name] ? "has-error" : ""}`}
                  rows={f.rows || 5}
                  value={values[f.name]}
                  onChange={handleChange}
                  aria-invalid={!!errors[f.name]}
                />
              ) : f.component === "select" ? (
                <select
                  id={id}
                  name={f.name}
                  className={`form-control ${errors[f.name] ? "has-error" : ""}`}
                  value={values[f.name]}
                  onChange={handleChange}
                  aria-invalid={!!errors[f.name]}
                >
                  <option value="">Please select...</option>
                  {f.options.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  id={id}
                  type={f.type || "text"}
                  name={f.name}
                  className={`form-control ${errors[f.name] ? "has-error" : ""}`}
                  value={values[f.name]}
                  onChange={handleChange}
                  placeholder={f.placeholder || ""}
                  aria-invalid={!!errors[f.name]}
                />
              )}

              {errors[f.name] && (
                <span className="form-error" role="alert">
                  {errors[f.name]}
                </span>
              )}
            </div>
          );
        })}

        {note && (
          <p className="form-note form-group--full">{note}</p>
        )}
      </div>

      {status === "success" && (
        <div className="form-status show form-status--success" role="status">
          Thank you! Your message has been sent successfully.
        </div>
      )}
      {status === "error" && (
        <div className="form-status show form-status--error" role="alert">
          Sorry, something went wrong. Please try again or contact us directly.
        </div>
      )}

      <div style={{ marginTop: "1.4rem" }}>
        <Button type="submit" variant="primary" size="lg" className={sending ? "btn--loading" : ""}>
          {sending ? "Sending..." : submitLabel}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;