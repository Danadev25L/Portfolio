"use client";

import React, { useEffect, useRef, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm";

// 1,600 stars instead of 5,000: the star field is a backdrop, and every point is re-drawn on every frame while the
// page scrolls. Rendering at device pixel ratio 1 (not 2–3 on phones and Retina screens) cuts the fill work again.
const STAR_COUNT = 1600;

const StarBackground = (props: any) => {
  const ref: any = useRef();
  const [sphere] = useState(() => {
    // Generate points in a sphere and replace NaN values with valid coordinates
    const points = random.inSphere(new Float32Array(STAR_COUNT * 3), { radius: 1.2 });
    for (let i = 0; i < points.length; i++) {
      if (isNaN(points[i]) || !isFinite(points[i])) {
        points[i] = (Math.random() - 0.5) * 2;
      }
    }
    return points;
  });

  useFrame((state, delta) => {
    ref.current.rotation.x -= delta / 10;
    ref.current.rotation.y -= delta / 15;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial transparent color="#fff" size={0.002} sizeAttenuation={true} depthWrite={false} />
      </Points>
    </group>
  );
};

/** Draw only while the page is visible and the visitor has not asked for reduced motion. */
function useAnimate() {
  const [animate, setAnimate] = useState(true);
  useEffect(() => {
    const motion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setAnimate(!document.hidden && !motion.matches);
    update();
    document.addEventListener("visibilitychange", update);
    motion.addEventListener("change", update);
    return () => {
      document.removeEventListener("visibilitychange", update);
      motion.removeEventListener("change", update);
    };
  }, []);
  return animate;
}

const StarsCanvas = () => {
  const animate = useAnimate();
  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] h-auto w-full">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        dpr={1}
        frameloop={animate ? "always" : "never"}
        gl={{ antialias: false, powerPreference: "low-power", alpha: true }}
      >
        <Suspense fallback={null}>
          <StarBackground />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default StarsCanvas;
