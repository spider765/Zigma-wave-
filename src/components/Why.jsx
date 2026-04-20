export default function Why() {
    const techStack = [
      "Cyber Security",
      "Agile Delivery",
      "Cloud-Native",
      "React / Next.js",
      "Node.js / Django",
      "Flutter / React Native",
      "AI & Automation",
      "AWS / Azure",
      "24/7 Support",
    ];
  
    return (
      <section id="why">
        <div className="inner">
  
          <div className="why-grid">
  
            {/* LEFT SIDE (ABOUT TEXT) */}
            <div>
              <span className="sec-tag">ABOUT ZIGMA WAVE NIGERIA</span>
  
              <h2 className="h2">
                Your Technology Partner in Africa
                <span className="badge">5+ Years</span>
              </h2>
  
              <p className="sec-sub" style={{ marginBottom: "2rem" }}>
                Zigma Wave Limited is a leading web development company in Nigeria with deep expertise in building scalable, secure, and innovative digital solutions. Headquartered in Lagos, Nigeria, we have delivered 50+ successful projects for startups, SMEs, and enterprises across Nigeria, Ghana, Kenya, the UK, and the USA.
              </p>
  
              <p className="sec-sub" style={{ marginBottom: "2.5rem" }}>
                Our team of experienced engineers, designers, and strategists specializes in custom software development, hospital management systems (HMS), mobile app development, cloud infrastructure, and AI/ML solutions using agile methodologies to deliver on time, every time.
              </p>
  
              {/* TECH STACK BOXES */}
              <div className="why-cards">
                {techStack.map((item, i) => (
                  <div key={i} className="why-item">
                    <div className="wi-title">{item}</div>
                  </div>
                ))}
              </div>
            </div>
  
            
  
          </div>
  
        </div>
      </section>
    );
  }