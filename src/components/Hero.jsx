import { useEffect, useRef } from "react";
import * as THREE from "three";
import { RoundedBoxGeometry } from "three-stdlib";

export default function Hero() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;

    const renderer = new THREE.WebGLRenderer({
      canvas,
      alpha: true,
      antialias: true,
    });
    renderer.setSize(480, 440);
    renderer.setPixelRatio(window.devicePixelRatio);

    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(50, 480 / 440, 0.1, 100);
    camera.position.z = 7;

    // LIGHTING
    const light = new THREE.PointLight(0x7775ff, 3);
    light.position.set(3, 3, 3);
    scene.add(light);

    const ambient = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambient);

    // 🎯 GROUP (CAROUSEL HOLDER)
    const group = new THREE.Group();
    scene.add(group);

    // 🖼️ IMAGE LOADER
    const loader = new THREE.TextureLoader();

    // 🔥 PRODUCT IMAGES (READY TO USE — NO SETUP)
    const images = [
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d",
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
    ];

    // 🧱 CREATE CARD WITH IMAGE
    const createCard = (img) => {
      const geo = new RoundedBoxGeometry(1.6, 2.2, 0.15, 4, 0.12);

      const texture = loader.load(img);
      texture.anisotropy = renderer.capabilities.getMaxAnisotropy();
      texture.minFilter = THREE.LinearFilter;

      const mat = new THREE.MeshStandardMaterial({
        map: texture,
        metalness: 0.5,
        roughness: 0.2,
        emissive: 0x111122,
      });

      const card = new THREE.Mesh(geo, mat);
      return card;
    };

    // 🔁 CREATE CAROUSEL
    const radius = 3;
    const cards = [];

    images.forEach((img, i) => {
      const card = createCard(img);

      const angle = (i / images.length) * Math.PI * 2;

      card.position.x = Math.cos(angle) * radius;
      card.position.z = Math.sin(angle) * radius;

      // FACE CENTER
      card.lookAt(0, 0, 0);

      group.add(card);
      cards.push(card);
    });

    // 🎬 ANIMATION
    const animate = () => {
      requestAnimationFrame(animate);

      // rotate carousel
      group.rotation.y += 0.003;

      // floating motion
      group.position.y = Math.sin(Date.now() * 0.001) * 0.2;

      renderer.render(scene, camera);
    };

    animate();

    // CLEANUP
    return () => {
      renderer.dispose();
    };
  }, []);

  return (
    <section id="hero">
      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="h1">We Build Software That Transforms.</h1>

          <p className="hero-sub">
            Zigma Wave is Nigeria's leading web development and custom software
            company building scalable web applications, hospital systems, mobile
            apps, cloud platforms, and enterprise solutions across Africa and beyond.
          </p>

          <div className="hero-btns">
            <button className="btn-p">Start Your Project</button>
            <button className="btn-g">Our Services</button>
          </div>
        </div>

        <div className="hero-visual">
          <canvas ref={canvasRef}></canvas>
        </div>
      </div>
    </section>
  );
}