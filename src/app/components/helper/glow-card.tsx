"use client";
import { useEffect } from "react";
import { GlowCardProps } from "@/Types/types";

const GlowCard = ({ children, identifier }: GlowCardProps) => {
  useEffect(() => {
    // Ensure this code runs only in the client-side
    if (typeof window === "undefined" || typeof document === "undefined")
      return;

    const CONTAINER = document.querySelector(
      `.glow-container-${identifier}`,
    ) as HTMLElement | null;
    const CARDS = document.querySelectorAll(
      `.glow-card-${identifier}`,
    ) as NodeListOf<HTMLElement>;

    const CONFIG = {
      proximity: 40,
      spread: 80,
      blur: 12,
      gap: 32,
      vertical: false,
      opacity: 0,
    };

    let rafId: number | null = null;
    let lastX = 0;
    let lastY = 0;

    const applyUpdate = () => {
      CARDS.forEach((CARD) => {
        const CARD_BOUNDS = CARD.getBoundingClientRect();

        if (
          lastX > CARD_BOUNDS.left - CONFIG.proximity &&
          lastX < CARD_BOUNDS.left + CARD_BOUNDS.width + CONFIG.proximity &&
          lastY > CARD_BOUNDS.top - CONFIG.proximity &&
          lastY < CARD_BOUNDS.top + CARD_BOUNDS.height + CONFIG.proximity
        ) {
          CARD.style.setProperty("--active", "1");
        } else {
          CARD.style.setProperty("--active", CONFIG.opacity.toString());
        }

        const CARD_CENTER = [
          CARD_BOUNDS.left + CARD_BOUNDS.width * 0.5,
          CARD_BOUNDS.top + CARD_BOUNDS.height * 0.5,
        ];

        let ANGLE =
          (Math.atan2(lastY - CARD_CENTER[1], lastX - CARD_CENTER[0]) * 180) /
          Math.PI;

        ANGLE = ANGLE < 0 ? ANGLE + 360 : ANGLE;

        CARD.style.setProperty("--start", `${ANGLE + 90}`);
      });
      rafId = null;
    };

    const UPDATE = (event: PointerEvent) => {
      lastX = event.clientX;
      lastY = event.clientY;
      if (rafId === null) {
        rafId = requestAnimationFrame(applyUpdate);
      }
    };

    document.body.addEventListener("pointermove", UPDATE, { passive: true });

    const RESTYLE = () => {
      if (CONTAINER) {
        CONTAINER.style.setProperty("--gap", CONFIG.gap.toString());
        CONTAINER.style.setProperty("--blur", CONFIG.blur.toString());
        CONTAINER.style.setProperty("--spread", CONFIG.spread.toString());
        CONTAINER.style.setProperty(
          "--direction",
          CONFIG.vertical ? "column" : "row",
        );
      }
    };

    RESTYLE();
    const initialEvent = new PointerEvent("pointermove", {
      clientX: window.innerWidth / 2,
      clientY: window.innerHeight / 2,
    });
    UPDATE(initialEvent);

    return () => {
      document.body.removeEventListener("pointermove", UPDATE);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [identifier]);

  return (
    <div className={`glow-container-${identifier} glow-container`}>
      <article
        className={`glow-card glow-card-${identifier} h-fit cursor-pointer border border-[#2a2e5a] transition-all duration-300 relative bg-[#101123] text-gray-200 rounded-xl hover:border-transparent w-full`}
      >
        <div className="glows"></div>
        {children}
      </article>
    </div>
  );
};

export default GlowCard;
