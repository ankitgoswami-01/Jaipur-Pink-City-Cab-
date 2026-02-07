"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import Image from "next/image";

export default function ScrollToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-center gap-3">

      {/* WHATSAPP IMAGE BUTTON */}
      <a
        href="https://wa.me/919660046645" // 👉 apna number
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-14 h-14 rounded-full shadow-xl
        animate-bounce hover:scale-110 transition"
      >
        <Image
          src="/images/whatsapp-logo.webp"
          alt="WhatsApp"
          fill
          className="object-contain"
          priority
        />

        {/* pulse effect */}
        <span className="absolute inset-0 rounded-full bg-green-400 opacity-40 animate-ping"></span>
      </a>

      {/* SCROLL TO TOP */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`rounded-full bg-[#EFA701] p-3 text-black shadow-lg
        transition-all duration-300 hover:bg-[#d4b671] hover:scale-110
        border-none outline-none cursor-pointer
        ${show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}`}
      >
        <ArrowUp size={22} />
      </button>

    </div>
  );
}
