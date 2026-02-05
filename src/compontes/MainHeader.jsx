"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SpotlightButton from "./SpotlightButton";
import { Car, X } from "lucide-react";
import { usePathname } from "next/navigation";


const MainHeader = () => {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Scroll hide / show
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      if (current > lastScrollY && current > 100) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  const pathname = usePathname();

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  // { name: "Taxi", href: "/taxi" },
  { name: "Service", href: "/service" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];


  return (
    <>
      {/* HEADER */}
      <header
        className={`fixed top-0 left-0 w-full z-50 bg-white shadow-sm
        transition-transform duration-500 ease-in-out
        ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
      >

        {/* TOP INFO BAR – DESKTOP ONLY */}
        <div className="hidden lg:block relative w-full bg-black text-white text-sm overflow-hidden">

          <div className="absolute left-0 top-0 h-full w-36">
            <div className="absolute inset-0 bg-white rounded-br-[120px]" />
            <div className="absolute top-0 left-0 h-full w-24 bg-[#EFA701] rounded-br-[100px]" />
          </div>

          <div className="absolute right-0 top-0 h-full w-36">
            <div className="absolute inset-0 bg-white rounded-bl-[120px]" />
            <div className="absolute top-0 right-0 h-full w-24 bg-[#EFA701] rounded-bl-[100px]" />
          </div>

          <div className="relative max-w-7xl mx-auto flex justify-between px-8 py-3">
            <div className="flex gap-8">
              <span>✉ info@example.com</span>
              <span>📞 +9660046645</span>
              <span>⏰ Sun - Fri (08AM - 10PM)</span>
            </div>

            <div className="flex gap-8">
              {/* <a className="hover:text-yellow-400">Login</a> */}
              {/* <a className="hover:text-yellow-400">Register</a> */}
              <div className="flex gap-3">
                <span>Follow:</span>
                <a>f</a><a>𝕏</a><a>📸</a><a>in</a>
              </div>
            </div>
          </div>

          <div className="absolute bottom-0 w-full h-0.5 bg-[#EFA701]" />
        </div>

        {/* MAIN NAV */}
<div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-4">
          <img src="/images/Weblogo.png" width={150} alt="logo" />

          <nav className="hidden lg:flex gap-8 font-medium">
  {navLinks.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      className={`relative transition
        ${
          pathname === item.href
            ? "text-[#EFA701] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-[#EFA701]"
            : "hover:text-yellow-400"
        }`}
    >
      {item.name}
    </Link>
  ))}
</nav>


          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <SpotlightButton
                text="Book Taxi"
                icon={Car}
                href="/book"
                bgColor="bg-[#EFA701]"
                hoverBgColor="hover:bg-black"
                textColor="text-black"
                hoverTextColor="hover:text-white"
              />
            </div>

            <button onClick={()=>setMenuOpen(true)} className="lg:hidden text-3xl cursor-pointer">
              ☰
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed inset-0 z-50">
          <div
            onClick={()=>setMenuOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-md"
          />

          <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm
          bg-white/80 backdrop-blur-xl p-6 animate-slideIn">

            <button
              onClick={()=>setMenuOpen(false)}
              className="absolute top-4 right-4 cursor-pointer"
            >
              <X />
            </button>

            <nav className="mt-16 flex flex-col gap-6 text-lg font-semibold text-center">
              {navLinks.map((item) => (
    <Link
      key={item.name}
      href={item.href}
      onClick={() => setMenuOpen(false)}
      className={`${
        pathname === item.href
          ? "text-[#EFA701]"
          : "hover:text-yellow-500"
      }`}
    >
      {item.name}
    </Link>
  ))}

              <SpotlightButton
                text="Book Taxi"
                icon={Car}
                href="/book"
                bgColor="bg-[#EFA701]"
                hoverBgColor="hover:bg-black"
                textColor="text-black"
                hoverTextColor="hover:text-white"
              />

              {/* EXTRA INFO */}
              <div className="mt-10 text-sm space-y-3 border-t pt-6">
                <p>✉ info@example.com</p>
                <p>📞 +9660046627</p>
                <p>⏰ Sun - Fri (08AM - 10PM)</p>

                <div className="flex justify-center gap-4 pt-3">
                  <a>f</a><a>𝕏</a><a>📸</a><a>in</a>
                </div>

                <div className="flex justify-center gap-6 pt-4 font-semibold">
                  <a>Login</a>
                  <a>Register</a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default MainHeader;
