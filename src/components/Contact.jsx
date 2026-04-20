import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const openWhatsApp = () => {
    const msg = `
Hello Zigma Wave 👋

Name: ${form.name}
Email: ${form.email}
Phone: ${form.phone}
Company: ${form.company}
Service: ${form.service}

Message:
${form.message}
    `;

    window.open(
      `https://wa.me/2347016614609?text=${encodeURIComponent(msg)}`,
      "_blank"
    );
  };

  return (
    <section id="contact">
      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <span className="sec-tag">Get in Touch</span>

          <h2 className="h2">
            Let's Build <br />
            <span className="accent">Something Great</span>
          </h2>

          <p className="sec-sub">
            Ready to transform your business with custom software?
            We respond within 2–4 hours.
          </p>

          <div className="contact-box">
            <div>📧 info@zigmawave.com.ng</div>
            <div>📞 +234 701 661 4609</div>
            <div>📍 Lagos, Nigeria</div>
            <div>🕒 Mon – Fri (9AM – 6PM WAT)</div>
          </div>
        </div>

        {/* FORM */}
        <form
          className="contact-form"
          onSubmit={(e) => {
            e.preventDefault();
            openWhatsApp();
          }}
        >
          <div className="row">
            <input
              name="name"
              placeholder="Full Name"
              onChange={handleChange}
              value={form.name}
            />
            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              value={form.email}
            />
          </div>

          <div className="row">
            <input
              name="phone"
              placeholder="Phone Number"
              onChange={handleChange}
              value={form.phone}
            />
            <input
              name="company"
              placeholder="Company"
              onChange={handleChange}
              value={form.company}
            />
          </div>

          <select
            name="service"
            onChange={handleChange}
            value={form.service}
          >
            <option value="">Select Service</option>
            <option>Web Development</option>
            <option>Mobile Apps</option>
            <option>HMS / ERP Systems</option>
            <option>Cloud & DevOps</option>
            <option>AI Solutions</option>
            <option>UI/UX Design</option>
            <option>E-commerce</option>
          </select>

          <textarea
            name="message"
            placeholder="Project Details..."
            onChange={handleChange}
            value={form.message}
          />

          <button type="submit" className="submit-btn">
            Send Message & Get Free Quote →
          </button>
        </form>

      </div>
    </section>
  );
}