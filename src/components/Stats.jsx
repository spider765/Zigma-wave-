import { useEffect } from "react";

export default function Stats() {
  useEffect(() => {
    const counter = (id, end) => {
      let i = 0;
      const el = document.getElementById(id);

      // ✅ prevent crash
      if (!el) return;

      const interval = setInterval(() => {
        i += Math.ceil(end / 50);

        if (i >= end) {
          i = end;
          clearInterval(interval);
        }

        el.innerText = i + "+";
      }, 30);
    };

    counter("s1", 120);
    counter("s2", 85);
  }, []);

  return (
    <section id="stats">
      <div className="stats-row">
        <div className="stat">
          <div id="s1">0+</div>
          <p>Projects</p>
        </div>

        <div className="stat">
          <div id="s2">0+</div>
          <p>Clients</p>
        </div>
      </div>
    </section>
  );
}