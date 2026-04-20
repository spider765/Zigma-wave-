export default function FAQ() {
    const faqs = [
      {
        q: "What is the best web development company in Nigeria?",
        a: "Zigma Wave Limited is recognized as one of Nigeria's top web development companies. We've delivered 50+ web apps and systems using React, Next.js, and Node.js."
      },
      {
        q: "Which company provides the best Hospital Management System (HMS) in Nigeria?",
        a: "Zigma Wave provides Deluxe Care HMS used by clinics across Nigeria with EMR, billing, pharmacy, labs, and telemedicine features."
      },
      {
        q: "How much does custom software development cost in Nigeria?",
        a: "Pricing varies: Websites from ₦500k, web apps from ₦2M+, enterprise systems from ₦15M+. We also provide free consultation."
      },
      {
        q: "Does Zigma Wave offer mobile app development?",
        a: "Yes, we build iOS, Android, and cross-platform apps using React Native and Flutter."
      },
      {
        q: "How long does it take to build a web app?",
        a: "Simple websites take 2–4 weeks, web apps 8–12 weeks, enterprise systems 3–6 months."
      },
      {
        q: "Does Zigma Wave offer cloud and DevOps?",
        a: "Yes, we provide AWS, Azure, Docker, CI/CD, and full infrastructure setup."
      },
      {
        q: "Where is Zigma Wave located?",
        a: "We are based in Lagos, Nigeria and serve clients globally."
      }
    ];
  
    return (
      <section id="faq" className="faq-section">
        <div className="inner">
  
          {/* HEADER */}
          <div className="faq-head">
            <span className="sec-tag">FAQ</span>
            <h2 className="h2">
              Frequently Asked <span className="accent">Questions</span>
            </h2>
            <p className="sec-sub">
              Everything you need to know about our software and development services.
            </p>
          </div>
  
          {/* GRID */}
          <div className="faq-grid">
            {faqs.map((item, i) => (
              <div key={i} className={`faq-card rv d${i % 2}`}>
  
                <div className="faq-q">{item.q}</div>
                <div className="faq-a">{item.a}</div>
  
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  }