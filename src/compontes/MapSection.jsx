"use client";

import { useState } from "react";

const MapSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden shadow-[0_10px_40px_rgba(0,0,0,0.08)]">
          
          {/* YELLOW ACCENT BORDER */}
          <span className="absolute top-0 left-0 w-full h-full border border-[#F7A600] rounded-3xl pointer-events-none z-10" />

          {/* LOADER */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-20">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 border-4 border-[#F7A600] border-t-transparent rounded-full animate-spin" />
                <p className="text-sm text-gray-600">Loading map...</p>
              </div>
            </div>
          )}

          {/* MAP */}
          <iframe
            title="Google Map"src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3391.4746748506223!2d75.84227779999999!3d26.894972199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjbCsDUzJzQxLjkiTiA3NcKwNTAnMzIuMiJF!5e1!3m2!1sen!2sin!4v1770529271033!5m2!1sen!2sin"
            className="w-full h-112.5 border-0"
            loading="lazy"
            onLoad={() => setIsLoading(false)}
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default MapSection;
