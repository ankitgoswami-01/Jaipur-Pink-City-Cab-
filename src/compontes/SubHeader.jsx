const SubHeader = () => {
  return (
    <div className="relative w-full bg-black text-white text-sm overflow-hidden">

      {/* LEFT SHAPE */}
      <div className="absolute left-0 top-0 h-full w-36">
        <div className="absolute inset-0 bg-white rounded-br-[120px]"></div>
        <div className="absolute top-0 left-0 h-full w-24 bg-[#EFA701] rounded-br-[100px]"></div>
      </div>

      {/* RIGHT SHAPE */}
      <div className="absolute right-0 top-0 h-full w-36">
        <div className="absolute inset-0 bg-white rounded-bl-[120px]"></div>
        <div className="absolute top-0 right-0 h-full w-24 bg-[#EFA701] rounded-bl-[100px]"></div>
      </div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-8 py-3">
        
        {/* Left */}
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <span className="text-yellow-400">✉</span>
            <span>info@example.com</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400">📞</span>
            <span>+2 123 654 7898</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-yellow-400">⏰</span>
            <span>Sun - Fri (08AM - 10PM)</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
          <a href="#" className="hover:text-yellow-400 transition">➜ Login</a>
          <a href="#" className="hover:text-yellow-400 transition">👤 Register</a>

          <div className="flex items-center gap-3">
            <span className="text-gray-300">Follow Us:</span>
            <a className="hover:text-yellow-400">f</a>
            <a className="hover:text-yellow-400">𝕏</a>
            <a className="hover:text-yellow-400">📸</a>
            <a className="hover:text-yellow-400">in</a>
          </div>
        </div>
      </div>

      {/* BOTTOM YELLOW LINE */}
      <div className="absolute bottom-0 left-0 w-full h-0.75 bg-[#EFA701]"></div>

    </div>
  );
};

export default SubHeader;
