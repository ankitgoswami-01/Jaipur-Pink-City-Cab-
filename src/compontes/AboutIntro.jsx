"use client";
import { Scale } from "lucide-react";
import Image from "next/image";
import SpotlightButton from "./SpotlightButton";

const AboutIntro = () => {
  return (
    <section className="w-full bg-white pt-60 pb-20">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* LEFT IMAGE AREA */}
        <div className="relative flex justify-center">
          {/* Badge */}
          <div className="absolute -top-16 left-4 z-20 bg-black text-white px-5 py-3 rounded-full flex items-center gap-3 shadow-lg">
            <span className="bg-yellow-400 p-2 text-black w-10 h-10 flex items-center justify-center rounded-full font-bold">
              <Image
              src="/Images/taxi-booking.svg"
              alt="Online Taxi Booking Icon in Jaipur"
              width={30}
              height={30}
              priority
            className="relative z-10 w-full max-w-md"
            style={{
              transform:'Scale(1.3)'
            }}
            /> 
            </span>
            <span className="text-sm font-medium">
            15+  Years Of <br /> Quality Service
            </span>
          </div>

          {/* Yellow Circle */}
          <div className="absolute w-90 h-90 bg-yellow-400 rounded-full -z-10"></div>

          {/* Car Image */}
          {/* <img
            src="/imags/imageTexi01.png.webp"
            alt="Taxi"
            className="relative z-10 w-full max-w-md"
          /> */}
        <Image
  src="/images/jaipur-cab-booking-dzire.png.webp"
  alt="Jaipur Pink City Cab Booking – Comfortable Dzire Taxi Service in Jaipur"
  width={300}
  height={100}
  priority
  className="
    relative z-10
    w-full
    max-w-[420px]
    sm:max-w-[280px]
    md:max-w-[340px]
    lg:max-w-[720px]
    h-auto
  "
/>

        </div>

        {/* RIGHT CONTENT */}
        <div>
          <p className="text-yellow-400 font-semibold tracking-widest mb-3">
            ABOUT US
          </p>

          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6">
            We Provide Trusted{" "}
            <span className="text-yellow-400">Cab Service</span> in Jaipur
          </h2>

          <p className="text-gray-600 mb-6">
            Jaipur Pink City Cab is a trusted name in the travel industry, offering reliable and affordable cab services across Jaipur and nearby destinations. We specialize in Taxi Service in Jaipur, airport transfers, outstation taxi services, and customized travel solutions for tourists, families, and corporate clients. Our goal is to provide safe, comfortable, and timely transportation with complete customer satisfaction.
          </p>

          {/* Points */}
        <ul className="space-y-4 mb-8">
  <li className="flex items-start gap-3">
    <span className="check-icon"></span>
    <span className="text-gray-700">
      Trusted Taxi Service in Jaipur with experienced and verified drivers
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="check-icon"></span>
    <span className="text-gray-700">
      On-time pickup, transparent pricing, and well-maintained vehicles
    </span>
  </li>

  <li className="flex items-start gap-3">
    <span className="check-icon"></span>
    <span className="text-gray-700">
      24/7 customer support for airport, local, and outstation travel
    </span>
  </li>
</ul>

          {/* Button */}
          {/* <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:bg-yellow-500 transition">
            DISCOVER MORE →
          </button> */}
           <SpotlightButton
                  text="DISCOVER MORE →"
                  href="/about"
                  bgColor="bg-[#EFA701]"
                  hoverBgColor="hover:bg-black"
                  textColor="text-black"
                  hoverTextColor="hover:text-white"
                />
        </div>

      </div>
    </section>
  );
};

export default AboutIntro;
