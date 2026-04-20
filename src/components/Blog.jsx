export default function Blog() {
    const posts = [
      {
        category: "Backend",
        date: "Dec 18, 2024",
        title: "Why Your Startup Needs a Rails API in 2025",
        excerpt:
          "Rails remains the fastest way to ship scalable products without sacrificing quality.",
      },
      {
        category: "AI",
        date: "Dec 5, 2024",
        title: "Integrating GPT-4 Into Your Product: Lessons Learned",
        excerpt:
          "What we learned building 15+ AI features across real production systems.",
      },
      {
        category: "Mobile",
        date: "Nov 22, 2024",
        title: "React Native vs Flutter in 2025",
        excerpt:
          "A real-world breakdown of performance, scalability, and developer experience.",
      },
      {
        category: "Design",
        date: "Nov 10, 2024",
        title: "Design Systems That Actually Scale",
        excerpt:
          "How to build reusable design systems that survive production growth.",
      },
      {
        category: "Startup",
        date: "Oct 28, 2024",
        title: "From Idea to MVP in 3 Weeks",
        excerpt:
          "Our exact framework for helping startups launch fast and validate early.",
      },
      {
        category: "Security",
        date: "Oct 14, 2024",
        title: "Security Mistakes That Kill SaaS Products",
        excerpt:
          "The most common security failures we see in early-stage products.",
      },
  
      // ➕ EXTRA REALISTIC BLOG POSTS
      {
        category: "Cloud",
        date: "Mar 10, 2025",
        title: "Cloud Migration in Nigeria: Best Practices",
        excerpt:
          "How businesses move from local servers to AWS/Azure without downtime.",
      },
      {
        category: "AI",
        date: "Jul 8, 2025",
        title: "The Future of AI in Nigerian Businesses",
        excerpt:
          "How AI is transforming healthcare, fintech, and e-commerce in Africa.",
      },
      {
        category: "Enterprise",
        date: "Mar 3, 2026",
        title: "Building Scalable Systems for African Businesses",
        excerpt:
          "Enterprise architecture patterns that actually scale across regions.",
      },
    ];
  
    return (
      <section id="blog">
        <div className="inner">
  
          {/* HEADER */}
          <div className="blog-head">
            <div>
              <div className="section-label">Insights</div>
              <h2 className="section-title">
                From the <br />
                <span className="accent">Zigma Wave Blog</span>
              </h2>
            </div>
  
            <button className="blog-btn">
              All Articles →
            </button>
          </div>
  
          {/* GRID */}
          <div className="blog-grid">
            {posts.map((p, i) => (
              <article className="blog-card" key={i}>
                <div className="blog-cat">{p.category}</div>
  
                <h3 className="blog-title">{p.title}</h3>
  
                <p className="blog-excerpt">{p.excerpt}</p>
  
                <div className="blog-date">{p.date}</div>
              </article>
            ))}
          </div>
  
        </div>
      </section>
    );
  }