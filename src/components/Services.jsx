import { useEffect, useState } from "react";

export default function Services() {
  const [visible, setVisible] = useState([]);

  const services = [
    {
      num: "01",
      title: "Web Application Development",
      desc: "Blazing-fast, scalable web apps built with modern frameworks. Ruby on Rails, React, Next.js — engineered for performance and growth.",
      icon: (
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="4" y="8" width="40" height="28" rx="3"/>
          <path d="M16 36v4M32 36v4M12 40h24"/>
          <path d="M12 20l6 4-6 4"/>
          <path d="M24 28h8"/>
        </svg>
      ),
    },
    {
      num: "02",
      title: "Mobile App Development",
      desc: "Native-quality iOS & Android apps with React Native.",
      icon: (
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="13" y="4" width="22" height="40" rx="4"/>
          <circle cx="24" cy="38" r="2"/>
          <path d="M20 9h8"/>
        </svg>
      ),
    },
    {
      num: "03",
      title: "AI & Automation",
      desc: "Custom AI systems, chatbots, and automation tools.",
      icon: (
        <svg width="48" height="48" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="10" y="14" width="28" height="22" rx="3"/>
          <circle cx="18" cy="25" r="3"/>
          <circle cx="30" cy="25" r="3"/>
        </svg>
      ),
    },
  ];

  // 👇 simple reveal animation (replaces your "rv" + observer)
  useEffect(() => {
    setTimeout(() => {
      setVisible(services.map((_, i) => i));
    }, 200);
  }, []);

  return (
    <section id="services">
      <div className="inner">

        {/* HEADER */}
        <div className="svc-head">
          <div>
            <span className="sec-tag">What We Do</span>
            <h2 className="h2">
              End-to-End <br /> Digital Solutions
            </h2>
          </div>

          <p className="sec-sub">
            From concept to deployment — we handle the full stack so you can focus on growth.
          </p>
        </div>

        {/* GRID */}
        <div className="svc-grid">
          {services.map((s, i) => (
            <div
              key={i}
              className={`svc-card ${visible.includes(i) ? "show" : ""}`}
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="svc-icon">{s.icon}</div>

              <div className="svc-num">{s.num}</div>

              <div className="svc-title">{s.title}</div>

              <p className="svc-desc">{s.desc}</p>

              <div className="svc-arrow">
                Learn more →
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}