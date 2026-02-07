import {
  Phone,
  MapPin,
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  ArrowUp,
} from "lucide-react";
import SpotlightButton from "./SpotlightButton";

const Footer = () => {
  return (
    <footer className="bg-[#0b0b0b] text-white relative">

      {/* Taxi Pattern Strip */}
      <div className="h-6 bg-[linear-gradient(90deg,#ffb703_50%,#000_50%)] bg-[length:40px_40px]"></div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Logo + Info */}
        <div>
          {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 pl-4"> */}
    <img
      src="/images/jaipur-pink-city-cab-logo.png"
      className="w-20 lg:w-24"
      alt="logo"
    />
  {/* </div> */}

          <p className="text-gray-400 mb-6 text-sm">
            Jaipur Pink City Cab provides reliable and comfortable taxi services with
professional drivers, clean vehicles, and affordable pricing to ensure a
smooth and stress-free travel experience.
          </p>

          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3">
              <span className="bg-yellow-400 p-2 rounded-full text-black">
                <Phone size={16} />
              </span>
              <a
  href="https://wa.me/919660046645"
  target="_blank"
  rel="noopener noreferrer"
  className="text-xl font-semibold tracking-wide cursor-pointer hover:text-green-500 transition-colors duration-200"
>
  +91 9660046645
</a>

            </li>

            <li className="flex items-center gap-3">
              <span className="bg-yellow-400 p-2 rounded-full text-black">
                <MapPin size={16} />
              </span>
              Shop No. 2/451 Jawahar Nagar Jaipur (RAJ) Pin / 📌 302004
            </li>

            <li className="flex items-center gap-3">
              <span className="bg-yellow-400 p-2 rounded-full text-black">
                <Mail size={16} />
              </span>
              info@example.com
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold text-lg mb-6 relative">
            Quick Links
            <span className="block w-10 h-1 bg-yellow-400 mt-2"></span>
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "About Us",
              "Update News",
              "Testimonials",
              "Terms Of Service",
              "Privacy Policy",
              "Our Drivers",
            ].map((item, i) => (
             <li key={i}
  className="
    flex items-center gap-2
    cursor-pointer
    text-gray-300
    transition-all duration-300 ease-out
    hover:text-yellow-400
    hover:translate-x-2
  "
>
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    ▶
  </span>
  {item}
</li>

            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold text-lg mb-6 relative">
            Support Center
            <span className="block w-10 h-1 bg-yellow-400 mt-2"></span>
          </h3>

          <ul className="space-y-3 text-sm text-gray-300">
            {[
              "FAQ's",
              "Affiliates",
              "Booking Tips",
              "Book A Ride",
              "Contact Us",
              "Sitemap",
            ].map((item, i) => (
<li key={i}
  className="
    flex items-center gap-2
    cursor-pointer
    text-gray-300
    transition-all duration-300 ease-out
    hover:text-yellow-400
    hover:translate-x-2
  "
>
  <span className="transition-transform duration-300 group-hover:translate-x-1">
    ▶
  </span>
  {item}
</li>

            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="font-semibold text-lg mb-6 relative">
            Newsletter
            <span className="block w-10 h-1 bg-yellow-400 mt-2"></span>
          </h3>

          <p className="text-gray-400 text-sm mb-5">
            Subscribe Our Newsletter To Get Latest Update And News
          </p>

          <input
            type="email"
            placeholder="Your Email"
            className="w-full px-4 py-3 rounded-full text-black outline-none mb-4"
          />

           <SpotlightButton
                  text="SUBSCRIBE NOW ✈"
                  href="/contect"
                  bgColor="bg-[#EFA701]"
                  hoverBgColor="hover:bg-white"
                  textColor="text-black"
                  hoverTextColor="hover:text-black"
                />
        </div>
      </div>

   {/* Bottom Bar */}
<div className="relative bg-[#141414] overflow-hidden">
  <div className="max-w-7xl mx-auto px-6 py-6 flex  md:flex-row items-center justify-between gap-4 relative z-10">

    {/* Left Copyright */}
    <p className="text-sm text-gray-400 text-center md:text-left">
      © Copyright 2026{" "}
      <span className="text-yellow-400 font-semibold">Skysdev</span>{" "}
      All Rights Reserved.
    </p>

    {/* Right Social */}
    <div className="flex gap-4">
      {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
        <div
          key={i}
          className="bg-black text-yellow-400 p-3 rounded-full cursor-pointer 
                     hover:bg-gray-800 transition"
        >
          <Icon size={16} />
        </div>
      ))}
    </div>
  </div>

  {/* ANGLED YELLOW SHAPE */}
  <div className="absolute right-0 top-0 h-full w-[45%] bg-yellow-400 clip-shape"></div>




      
      </div>
    </footer>
  );
};

export default Footer;
