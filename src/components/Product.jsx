export default function Product() {
  const WHATSAPP_NUMBER = "2347016614609";

  const getWhatsAppMsg = (product) => {
    switch (product.name) {
      case "Deluxe Care HMS":
        return `Hello Zigma Wave \n\nI'm interested in *Deluxe Care HMS*.\n\nWe are a healthcare facility and would like to see a demo of your Hospital Management System.\n\nPlease share pricing and demo details.`;
      case "Odexa":
        return `Hello Zigma Wave \n\nI'm interested in *Odexa Marketplace*.\n\nI would like to learn more about the platform and how vendors can join.\n\nCan we schedule a walkthrough?`;
      case "Skyline HMS":
        return `Hello Zigma Wave \n\nI'm interested in *Skyline HMS*.\n\nWe run a hospitality business and need a hotel management system demo.\n\nPlease share how it works.`;
      case "ZigmaPay":
        return `Hello Zigma Wave \n\nI'm interested in *ZigmaPay*.\n\nI want to understand your payment gateway API and integration process.\n\nCan we discuss?`;
      case "EduCore LMS":
        return `Hello Zigma Wave \n\nI'm interested in *EduCore LMS*.\n\nWe are an education provider and need a learning management system demo.\n\nKindly share details and pricing.`;
      default:
        return `Hello Zigma Wave \n\nI'm interested in *${product.name}*.\nCan I get a demo and more details?`;
    }
  };

  const products = [
    {
      tag: "Healthcare — Nigeria",
      name: "Deluxe Care HMS",
      desc: "Nigeria's most comprehensive Hospital Management System for clinics and hospitals.",
      features: [
        "EMR/EHR System",
        "Appointment Scheduling",
        "Billing & Payments",
        "Lab Integration",
        "NDPR Security",
        "Telemedicine",
      ],
      btn: "Request Demo",
    },
    {
      tag: "Marketplace — Africa",
      name: "Odexa",
      desc: "Multi-vendor marketplace for African entrepreneurs with AI analytics.",
      features: [
        "POS System",
        "AI Sales Analytics",
        "Multi-Vendor System",
        "Secure Payments",
        "Order Tracking",
      ],
      btn: "View Product",
      link: "https://odexa.zigmawave.com.ng",
    },
    {
      tag: "Hospitality — Nigeria",
      name: "Skyline HMS",
      desc: "Hotel management system for bookings, billing, and operations.",
      features: [
        "Booking Engine",
        "Revenue Analytics",
        "Multi-Property",
        "POS System",
        "Smart Ordering",
      ],
      btn: "Request Demo",
    },
    {
      tag: "FinTech — Africa",
      name: "ZigmaPay",
      desc: "Secure digital payment gateway for businesses and startups.",
      features: [
        "Payment API",
        "Wallet System",
        "Fraud Detection",
        "Multi-Currency",
      ],
      btn: "Explore",
    },
    {
      tag: "Education — SaaS",
      name: "EduCore LMS",
      desc: "Learning management system for schools and online academies.",
      features: [
        "Student Portal",
        "Course Builder",
        "Live Classes",
        "Progress Tracking",
      ],
      btn: "Request Demo",
    },
  ];

  return (
    <section id="products">
      <div className="inner">
        <div>
          <div className="section-label">Our Products</div>
          <h2 className="section-title">
            Ready-to-Deploy <span className="accent">Software Solutions</span>
          </h2>
        </div>

        <div className="products-grid">
          {products.map((p, i) => (
            <article className="product-card" key={i}>
              <div className="product-tag">{p.tag}</div>
              <h3>{p.name}</h3>
              <p>{p.desc}</p>
              <div className="product-features">
                {p.features.map((f, j) => (
                  <div className="feat" key={j}>{f}</div>
                ))}
              </div>

              {p.link ? (
                <a
                  href={p.link}
                  className="product-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {p.btn} →
                </a>
              ) : (
                <button
    className="product-btn"
    onClick={() => window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(getWhatsAppMsg(p))}`,
      "_blank"
    )}
  >
    {p.btn} →
  </button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}