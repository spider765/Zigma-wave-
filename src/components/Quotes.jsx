import { useState } from "react";

export default function Quotes() {
  const services = {
    "Web Development": ["E-commerce", "SaaS", "Landing Page"],
    "Mobile Apps": ["iOS", "Android", "Cross-platform"],
    "AI Solutions": ["Chatbots", "Automation", "LLM Integration"],
    "Cloud & DevOps": ["AWS Setup", "CI/CD", "Docker"],
    "UI/UX Design": ["Figma", "Prototyping", "Design System"],
  };

  const [main, setMain] = useState("");
  const [subs, setSubs] = useState([]);

  const toggleSub = (item) => {
    setSubs((prev) =>
      prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item]
    );
  };

  const openWA = () => {
    if (!main) return alert("Select a service first!");

    const msg = `Hi Zigma Wave! I need *${main}* ${
      subs.length ? `(Details: ${subs.join(", ")})` : ""
    }. Can we talk?`;

    window.open(
      `https://wa.me/2348000000000?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="contact">
      <div className="contact-grid">

        {/* LEFT */}
        <div className="contact-left">
          <span className="cw-tag">Get Started Today</span>
          <h2 className="cw-title">
            Ready to Build Something Remarkable?
            <span className="badge">5+ Years</span>
          </h2>

          <p className="cw-sub">
            Tell us what you need and we’ll respond within hours.
          </p>

          <div className="service-box">
            {Object.keys(services).map((s) => (
              <button
                key={s}
                className={`chip ${main === s ? "on" : ""}`}
                onClick={() => {
                  setMain(s);
                  setSubs([]);
                }}
              >
                {s}
              </button>
            ))}
          </div>

          {main && (
            <div className="sub-box">
              {services[main].map((s) => (
                <button
                  key={s}
                  className={`sub-chip ${subs.includes(s) ? "on" : ""}`}
                  onClick={() => toggleSub(s)}
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          <button className="wa-btn" onClick={openWA}>
            Chat on WhatsApp
          </button>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <div className="preview-card">
            <h4>Message Preview</h4>
            <p>
              {main
                ? `Service: ${main} ${
                    subs.length ? `| ${subs.join(", ")}` : ""
                  }`
                : "Select a service to preview message"}
            </p>
          </div>

          <div className="stats-card">
            <div>
              <h3>94%</h3>
              <p>Client Retention</p>
            </div>
            <div>
              <h3>4–8 Weeks</h3>
              <p>MVP Delivery</p>
            </div>
            <div>
              <h3>24h</h3>
              <p>Response Time</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}