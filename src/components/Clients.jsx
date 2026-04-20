export default function Testimonials() {
    const testimonials = [
      {
        initials: "VC",
        name: "MD / CEO",
        company: "Vaden Specialist Clinic, Owerri",
        text: "Since implementing Deluxe Care HMS, our operations have transformed significantly. Patient records are seamlessly managed, appointments better organized, and billing accuracy has improved tremendously.",
      },
      {
        initials: "PP",
        name: "Operations Manager",
        company: "Pokerz Planet Hotel, Plateau",
        text: "Skyline has streamlined our bookings, front desk, and guest experience. Real-time room availability and automated billing saved us time and reduced errors enormously.",
      },
      {
        initials: "MT",
        name: "CEO",
        company: "Matomsy Pharmacy, Benin City",
        text: "Odexa changed my business completely. I went from WhatsApp sales to reaching customers across Nigeria. The analytics are extremely valuable.",
      },
  
      // ➕ EXTRA TESTIMONIALS
      {
        initials: "AK",
        name: "Founder",
        company: "Karex Logistics, Lagos",
        text: "Their team delivered our logistics platform ahead of schedule. Clean UI, fast performance, and reliable backend.",
      },
      {
        initials: "DN",
        name: "CTO",
        company: "NovaFin Tech, UK",
        text: "Zigma Wave understands scalable systems. Our fintech product runs smoothly with zero downtime.",
      },
    ];
  
    return (
      <section id="testimonials" className="testi-section">
        <div className="inner">
  
          {/* HEADER */}
          <div className="testi-head">
            <div className="section-label">Client Stories</div>
  
            <h2 className="section-title">
              Trusted by <span className="accent">Businesses</span><br />
              Across the Globe
            </h2>
          </div>
  
          {/* GRID */}
          <div className="testi-grid">
            {testimonials.map((t, i) => (
              <article className="testi-card" key={i}>
                <div className="testi-quote">"</div>
  
                <p className="testi-text">{t.text}</p>
  
                <div className="testi-author">
                  <div className="author-av">{t.initials}</div>
  
                  <div>
                    <div className="author-name">{t.name}</div>
                    <div className="author-co">{t.company}</div>
                  </div>
  
                  <div className="stars">★★★★★</div>
                </div>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }