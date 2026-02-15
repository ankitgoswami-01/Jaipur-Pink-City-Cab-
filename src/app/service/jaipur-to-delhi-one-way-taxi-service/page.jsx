import React from "react";

export const metadata = {
  title: "Jaipur to Delhi One Way Taxi Service | Affordable Cab Booking",
  description:
    "Book Jaipur to Delhi one-way taxi service at best price. Safe, comfortable & reliable cab with professional drivers. Easy booking & transparent pricing.",
};

export default function Page() {
  return (
    <div className="bg-gray-50">

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">

        {/* Hero Section */}
       <div className="text-center mb-16">
  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-gray-900 mb-6 mt-25">
    Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable & Hassle-Free Travel
  </h1>

  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-6">
    Our team is dedicated to providing the best taxi service in Jaipur. Business travellers and tourists always prefer us as we provide on-time one-way cabs in Jaipur. We offer flexibility, comfort, and transparent pricing for a smooth journey.
  </p>

  <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-10">
    With our company, you do not need to pay for a return journey.
  </p>

  {/* 3 Image Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 cursor-pointer">
  
  {/* Card 1 */}
  <div className="group bg-white rounded-2xl shadow-lg p-4 transition duration-500 hover:shadow-2xl hover:-translate-y-3">
    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/jaipur-pink-city-cab-dzire-taxi-service.png.webp"
        alt="Jaipur Pink City Cab Dzire Taxi Service"
        className="w-full h-[250px] object-contain transition duration-500 group-hover:scale-110"
      />
    </div>
  </div>

  {/* Card 2 */}
  <div className="group bg-white rounded-2xl shadow-lg p-4 transition duration-500 hover:shadow-2xl hover:-translate-y-3">
    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/tourImg-optimized.webp"
        alt="Tour Image"
        className="w-full h-[250px] object-contain transition duration-500 group-hover:scale-110"
      />
    </div>
  </div>

  {/* Card 3 */}
  <div className="group bg-white rounded-2xl shadow-lg p-4 transition duration-500 hover:shadow-2xl hover:-translate-y-3">
    <div className="overflow-hidden rounded-xl">
      <img
        src="/images/jaipur-pink-city-cab-innova.png.webp"
        alt="SUV Taxi Service"
        className="w-full h-[250px] object-contain transition duration-500 group-hover:scale-110"
      />
    </div>
  </div>

</div>


  {/* CTA Buttons */}
  <div className="flex flex-col sm:flex-row justify-center gap-4">
    <a
      href="tel:+919660046645"
      className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-800 transition duration-300 shadow-md"
    >
      📞 Call Now
    </a>

    <a
      href="/contact"
      className="border border-black px-8 py-3 rounded-full font-medium hover:bg-black hover:text-white transition duration-300"
    >
      🚖 Book Now
    </a>
  </div>
</div>


        {/* Distance Section */}
     <div className="px-4 sm:px-6 lg:px-8 py-12 mb-12 ">
  
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-10">
    Why Choose Jaipur to Delhi One Way Taxi Service?
  </h2>

  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-base sm:text-lg">
    Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">

    {/* Card 1 */}
    <div className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold mb-2">💰 Pay <strong>only for one-sided travel</strong></p>
      <p className="text-gray-600 text-sm sm:text-base">
        Pay only for one-sided travel without unnecessary return charges.
      </p>
    </div>

    {/* Card 2 */}
    <div className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold mb-2">🚫 No return fare or hidden costs</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Transparent pricing with no return fare or hidden costs.
      </p>
    </div>

    {/* Card 3 */}
    <div className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold mb-2">🏠 Door-to-door pickup and drop-off</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Easy pickup and drop-off directly from your location.
      </p>
    </div>

    {/* Card 4 */}
    <div className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold mb-2">⏰ Flexible travel time</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Travel anytime as per your schedule and convenience.
      </p>
    </div>

    {/* Card 5 */}
    <div className="group bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 text-center sm:col-span-2 lg:col-span-1">
      <p className="text-lg font-semibold mb-2">🚘More comfortable than buses or trains</p>
      <p className="text-gray-600 text-sm sm:text-base">
        More private and comfortable than buses or trains.
      </p>
    </div>

  </div>
</div>

        {/* Why Choose Us */}
     <div className="mb-16 px-4 sm:px-6 lg:px-8">
  
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
    Distance & Travel Time
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">

    {/* Distance Card */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg sm:text-xl font-semibold mb-3">
        📍 Distance
      </p>
      <p className="text-gray-600 text-base sm:text-lg">
        Jaipur to Delhi tour covers approx <strong>270–280 km</strong>.
      </p>
    </div>

    {/* Travel Time Card */}
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg sm:text-xl font-semibold mb-3">
        ⏳ Travel Time
      </p>
      <p className="text-gray-600 text-base sm:text-lg">
        Journey takes approx <strong>5 to 6 hours</strong> depending on traffic and route.
      </p>
    </div>

  </div>

</div>


        {/* Cab Section */}
      <div className="  p-6 sm:p-8 mb-16">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900">
    Types of Cabs Available
  </h2>

  <div className="grid lg:grid-cols-2 gap-10 items-center">

  {/* Image Section */}
  <div className="group w-full">
    <div className="relative w-full aspect-[4/3] bg-gray-50 rounded-3xl overflow-hidden shadow-md">
      <img
        src="/images/jaipur-pink-city-cab-dzire-taxi-service.png.webp"
        alt="Jaipur to Delhi Cab Service"
        className="w-full h-full object-cover lg:object-contain transition duration-500 group-hover:scale-105"
      />
    </div>
  </div>

  {/* Cab Types Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 cursor-pointer">

    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold">🚗 Hatchback</p>
      <p className="text-gray-600 text-sm mt-2">
        Budget-friendly option for solo or couple travel.
      </p>
    </div>

    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold">🚘 Sedan</p>
      <p className="text-gray-600 text-sm mt-2">
        Comfortable choice for small families.
      </p>
    </div>

    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold">🚙 SUV</p>
      <p className="text-gray-600 text-sm mt-2">
        Ideal for group travel with extra luggage.
      </p>
    </div>

    <div className="bg-gray-50 p-6 rounded-2xl shadow-sm hover:shadow-lg transition duration-500 hover:-translate-y-2 text-center">
      <p className="text-lg font-semibold">✨ Luxury Cars</p>
      <p className="text-gray-600 text-sm mt-2">
        Premium travel experience with extra comfort.
      </p>
    </div>

  </div>

</div>


</div>


        {/* Booking Section */}
   <div
  id="benefits"
  className=" px-6 sm:px-10 py-16 mb-16 bg-gradient-to-b  cursor-pointer"
>
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
    Benefits of Booking a One-Way Taxi with Us
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">💰 Affordable Pricing</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Transparent fares with no hidden charges.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">🕒 24/7 Availability</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Book your cab anytime as per your schedule.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">👨‍✈️ Professional Drivers</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Experienced and verified drivers for safe travel.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">🧳 No Luggage Limit</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Carry your luggage without restrictions.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100 sm:col-span-2 lg:col-span-1">
      <p className="text-lg font-semibold mb-3">📲 Easy Booking</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Simple and quick booking process in just a few steps.
      </p>
    </div>

  </div>

  {/* CTA Button */}
  <div className="mt-14 text-center">
    <a
      href="tel:+919660046645"
      className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300 shadow-lg"
    >
      🚖 Book Your Cab Now
    </a>
  </div>
</div>
<div className="px-6 sm:px-10 py-16 mb-16 bg-gray-50 rounded-3xl">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
    Perfect for All Travel Needs
  </h2>

  <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-base sm:text-lg">
    Our Jaipur to Delhi one-way taxi service is ideal for various travel purposes,
    ensuring comfort, reliability, and timely service.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">✈️ Airport Transfers</p>
      <p className="text-gray-600 text-sm sm:text-base">
        On-time airport pickup and drop-off service without delays.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">💼 Business Trips</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Reliable and punctual travel for office and corporate needs.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">🎓Comfortable for students shifting to hostels</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Comfortable travel for students shifting to hostels or colleges.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">🗺️ Tourist Trips</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Helping tourists explore Delhi safely and comfortably.
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100 sm:col-span-2 lg:col-span-1">
      <p className="text-lg font-semibold mb-3">🚨 Emergency Travel</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Instant taxi service available for urgent and emergency needs.
      </p>
    </div>

  </div>

</div>

<div className="px-6 sm:px-10 py-16 mb-16  cursor-pointer">

  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
    Safety & Comfort Assured
  </h2>

  <p className="text-center text-gray-600 max-w-4xl mx-auto mb-12 text-base sm:text-lg leading-relaxed">
    Passengers' safety is our top priority. We sanitize our cabs, enable GPS tracking, 
    and verify drivers to ensure a secure journey. Another major benefit of our 
    one-way Jaipur to Delhi taxi service is transparent pricing. We offer clear fare 
    structures with no hidden charges, including toll taxes, driver allowance, and 
    fuel costs — so you can travel with complete peace of mind.
  </p>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">

    <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">🧼 Sanitized Cabs</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Regular cleaning and proper sanitization before every ride.
      </p>
    </div>

    <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">📍 GPS Enabled</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Live tracking for enhanced safety and route monitoring.
      </p>
    </div>

    <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">👨‍✈️ Verified Drivers</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Background-checked and experienced professional drivers.
      </p>
    </div>

    <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-lg font-semibold mb-3">💰 Transparent Pricing</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Clear fare structure with no hidden or surprise charges.
      </p>
    </div>

    <div className="bg-gray-50 p-8 rounded-2xl shadow-md hover:shadow-2xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100 sm:col-span-2 lg:col-span-1">
      <p className="text-lg font-semibold mb-3">🛣️ All Costs Included</p>
      <p className="text-gray-600 text-sm sm:text-base">
        Toll taxes, driver allowance, and fuel costs included.
      </p>
    </div>

  </div>

</div>

<div className="px-6 sm:px-10 py-16 mb-16 bg-gray-50 rounded-3xl">

  {/* Heading */}
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
    How to Book a Jaipur to Delhi One-Way Taxi?
  </h2>

  {/* Steps Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-16">

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-3xl font-bold text-black mb-4">1</p>
      <p className="text-gray-700 font-medium">
        Choose your pickup point in Jaipur
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-3xl font-bold text-black mb-4">2</p>
      <p className="text-gray-700 font-medium">
        Select drop location in Delhi / NCR
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-3xl font-bold text-black mb-4">3</p>
      <p className="text-gray-700 font-medium">
        Pick your preferred vehicle
      </p>
    </div>

    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-500 hover:-translate-y-3 text-center border border-gray-100">
      <p className="text-3xl font-bold text-black mb-4">4</p>
      <p className="text-gray-700 font-medium">
        Confirm booking & travel stress-free
      </p>
    </div>

  </div>

  {/* Final Words Section */}
  <div className="max-w-4xl mx-auto text-center">
    <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
      Final Words
    </h3>

    <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
      If you are planning a reliable and comfortable taxi service from Jaipur to Delhi,
      book with us for your next trip. We provide a smooth and economical travel experience.
      Our one-way cab service is especially helpful for late-night travellers. 
      Avoid worrying about train availability or bus timings — book our Jaipur taxi service 
      today and enjoy a safe, comfortable, and hassle-free journey.
    </p>

    {/* CTA Button */}
    <div className="mt-10">
      <a
        href="tel:+919660046645"
        className="bg-black text-white px-8 py-3 rounded-full font-semibold hover:bg-gray-800 transition duration-300 shadow-lg"
      >
        🚖 Book Your Cab Now
      </a>
    </div>
  </div>

</div>





      </div>
    </div>
  );
}
