export default function Product() {
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
  
      // ➕ MORE PROJECTS ADDED
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
                    <div className="feat" key={j}>
                      {f}
                    </div>
                  ))}
                </div>
  
                {p.link ? (
                  <a href={p.link} className="product-btn" target="_blank">
                    {p.btn} →
                  </a>
                ) : (
                  <button className="product-btn">{p.btn} →</button>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }