export default function Footer() {
  return (
    <footer id="footer">
      <div className="footer-container">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-brand">
            <h3 className="logo">
              Zigma<span>.</span>Wave
            </h3>

            <p className="footer-desc">
              Nigeria's leading web development and software company delivering
              scalable digital solutions across Africa and globally since 2022.
            </p>

            <div className="footer-social">
              <a href="#">in</a>
              <a href="#">𝕏</a>
              <a href="#">ig</a>
              <a href="#">fb</a>
            </div>
          </div>

          {/* SERVICES */}
          <div>
            <h4>Services</h4>
            <ul>
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>UI/UX Design</li>
              <li>AI & ML</li>
              <li>IT Consulting</li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4>Products</h4>
            <ul>
              <li>Deluxe Care HMS</li>
              <li>Odexa Marketplace</li>
              <li>Skyline HMS</li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4>Company</h4>
            <ul>
              <li>About Us</li>
              <li>Client Stories</li>
              <li>Blog</li>
              <li>Contact</li>
              <li>Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <p>© 2026 Zigma Wave Limited. All rights reserved.</p>
          <p className="locations">
            Lagos · Abuja · Port Harcourt · Ghana · Kenya · UK · USA
          </p>
        </div>
      </div>
    </footer>
  );
}