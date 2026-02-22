"use client";

import dynamic from "next/dynamic";
import { AnimationLottieProps } from "@/Types/types";
import { useEffect, useRef, useState } from "react";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Lottie-JSON-Dateien sind 1–1.5 MB groß – nur laden wenn sichtbar.
const AnimationLottie = ({
  animationPath,
  width = "95%",
}: AnimationLottieProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "150px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} style={{ width, minHeight: "80px" }}>
      {isVisible && (
        <Lottie
          animationData={animationPath}
          loop
          autoplay
          style={{ width: "100%", height: "auto" }}
        />
      )}
    </div>
  );
};

export default AnimationLottie;
