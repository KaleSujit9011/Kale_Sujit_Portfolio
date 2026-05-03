import { useState } from "react";

function Contact() {
  const [status, setStatus] = useState("");

  const fieldStyle = {
    backgroundColor: "var(--field-bg)",
    borderColor: "var(--border)",
    color: "var(--text-main)",
  };

  function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = formData.get("name").trim();
    const email = formData.get("email").trim();
    const message = formData.get("message").trim();

    if (!name || !email || !message) {
      setStatus("Please fill in your name, email, and message.");
      return;
    }

    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    );

    window.location.href = `mailto:sujitkale@example.com?subject=${subject}&body=${body}`;
    setStatus("Opening your email app with the message ready to send.");
    event.currentTarget.reset();
  }

  return (
    <section id="contact" className="px-4 py-16">
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em]" style={{ color: "var(--accent)" }}>
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-semibold md:text-3xl">
            Have a useful product or system to build?
          </h2>
          <p
            className="mt-4 max-w-md text-sm leading-6"
            style={{ color: "var(--text-secondary)" }}
          >
            Send a short note with what you are building, where you are stuck,
            or what kind of developer support you need.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="glow-card rounded-lg border p-5 md:p-6"
          style={{
            backgroundColor: "var(--surface)",
            borderColor: "var(--border)",
            boxShadow: "var(--shadow)",
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <input
              name="name"
              type="text"
              placeholder="Your name"
              className="glow-field rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--primary)]"
              style={fieldStyle}
            />

            <input
              name="email"
              type="email"
              placeholder="Your email"
              className="glow-field rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--primary)]"
              style={fieldStyle}
            />
          </div>

          <textarea
            name="message"
            rows="5"
            placeholder="Your message"
            className="glow-field mt-4 w-full resize-none rounded-lg border px-3.5 py-2.5 text-sm outline-none transition focus:border-[var(--primary)]"
            style={fieldStyle}
          />

          {status && (
            <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
              {status}
            </p>
          )}

          <button
            type="submit"
            className="glow-button mt-5 w-full rounded-lg px-5 py-2.5 text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 active:translate-y-0"
            style={{
              backgroundColor: "var(--primary)",
              boxShadow: "0 16px 35px color-mix(in srgb, var(--primary) 22%, transparent)",
            }}
          >
            Send message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
