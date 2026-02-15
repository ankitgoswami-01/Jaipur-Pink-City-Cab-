import React from "react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Jaipur to Jodhpur Taxi Service | One Way Cab at Best Price",
  description:
    "Book Jaipur to Jodhpur taxi service at affordable rates. One-way & round-trip cab options with professional drivers. Safe, comfortable & reliable travel across Rajasthan.",
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* HERO SECTION */}
        <section className="text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight demo">
            🚖 Jaipur to Jodhpur Taxi Service – Comfortable, Safe & Affordable
            Travel
          </h1>

          <div className="relative w-full h-[220px] sm:h-[300px] md:h-[400px] mt-6">
            <Image
              src="/images/jaipur-to-jodhpur-highway.jpeg"
              alt="Jaipur to Jodhpur highway road trip Rajasthan"
              fill
              priority
              className="object-cover rounded-xl"
            />
          </div>

          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            If you want to travel, <strong>Jaipur</strong> to{" "}
            <strong>Jodhpur</strong> Jodhpur journey through the heart of the
            Rajasthan. Choose a best taxi service that give you immense
            experience of beautiful culture and architecture. This this blue
            city connects many beautiful destinations of India.
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            Looking for a taxi service, that is both convenient and values.
            Privacy is such a huge task, book our taxi service in jaipur for
            smooth and relaxing experience.
          </p>
        </section>

        {/* DISTANCE SECTION */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            📍Distance and Travel Time from Jaipur to Jodhpur
          </h2>
          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            The distance between Jaipur to Jodhpur is approximately is almost{" "}
            <strong>335 km,</strong> depending on traffic and road conditions.
            With a planned taxi service in Jaipur, you will enjoy smooth and an
            organised trip with planned breaks.
          </p>
        </section>

        {/* WHY CHOOSE */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            ⭐ Why Choose a Taxi from Jaipur to Jodhpur?
          </h2>

          {/* 3 Image Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
            {/* Image 1 */}
            <div className="relative h-[220px] overflow-hidden rounded-xl group cursor-pointer">
              <Image
                src="/images/private-taxi-rajasthan.jpg"
                alt="Private taxi service Rajasthan"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Image 2 */}
            <div className="relative h-[220px] overflow-hidden rounded-xl group cursor-pointer ">
              <Image
                src="/images/jaipur-to-jodhpur-road-trip.jpg"
                alt="Jaipur to Jodhpur road trip"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Image 3 */}
            <div className="relative h-[220px] overflow-hidden rounded-xl group cursor-pointer ">
              <Image
                src="/images/rajasthan-highway-taxi-service.jpg"
                alt="Rajasthan highway taxi service"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Key advantages include:
          </h3>

          {/* Features Section */}
          <div className="grid sm:grid-cols-2 gap-4 text-gray-700 text-sm sm:text-base">
            <p className="bg-gray-100 p-4 rounded-lg shadow-sm">
              ✔ Door-to-door pickup and drop
            </p>
            <p className="bg-gray-100 p-4 rounded-lg shadow-sm">
              ✔ No luggage restrictions
            </p>
            <p className="bg-gray-100 p-4 rounded-lg shadow-sm">
              ✔ Flexible departure time
            </p>
            <p className="bg-gray-100 p-4 rounded-lg shadow-sm">
              ✔ Private and peaceful journey
            </p>
            <p className="bg-gray-100 p-4 rounded-lg shadow-sm">
              ✔ Option to stop for food, rest, or sightseeing
            </p>
          </div>
        </section>

         {/* CAB OPTIONS */}
        <section className="mt-12">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            🚘 Comfortable and Well-Maintained Cabs
          </h4>

          <p className="mt-6 text-base sm:text-lg text-gray-700">
            Choosing a professional cab service in Jaipur is suitable for long
            distance travel. Book a Jaipur to Jodhpur taxi service which offers
            <strong> clean, well-maintained vehicles</strong> suitable for
            long-distance travel. We offer different cab options based on your
            budget and group size, such as:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
            {/* Sedan */}
            <div className="relative h-[220px] overflow-hidden rounded-xl group cursor-pointer">
              <Image
                src="/images/jaipur-pink-city-cab-dzire-taxi-service.png.webp"
                alt="Sedan taxi Jaipur to Jodhpur"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Sedan (Dzire, Etios)
                </span>
              </div>
            </div>

            {/* SUV */}
            <div className="relative h-[220px] overflow-hidden rounded-xl group cursor-pointer">
              <Image
                src="/images/jaipur-pink-city-cab-innova.png.webp"
                alt="SUV taxi Innova Rajasthan"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  SUV (Innova, Ertiga)
                </span>
              </div>
            </div>

            {/* Tempo Traveller */}
            <div className="relative h-[220px] overflow-hidden rounded-xl group cursor-pointer">
              <Image
                src="/images/jaipur-pink-city-cab-tempo-traveller-taxi-optimized.webp"
                alt="Tempo Traveller Jaipur to Jodhpur"
                fill
                loading="lazy"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">
                  Tempo Traveller (Group Travel)
                </span>
              </div>
            </div>
          </div>

          <ul className="mt-6 space-y-2 text-gray-700 text-sm sm:text-base">
            <li>
              <strong>Sedan:</strong> Dzire, Etios
            </li>
            <li>
              <strong>SUV:</strong> Innova, Ertiga
            </li>
            <li>
              <strong>Tempo Traveller:</strong> For group travel
            </li>
          </ul>
        </section>
        {/* Safe Journey */}
         <section className="mt-12">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            Experienced Drivers for a Safe Journey
          </h4>
          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            Our team prioritise your safety during intercity travel. Our taxi
            services in jaipur offer vehicles with verified drivers to make you
            familiar with Rajasthan routes.
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            You can also book:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✔Safe and steady driving</li>
            <li>✔Knowledge of best routes and road conditions</li>
            <li>✔Polite and professional behavior</li>
            <li>✔Assistance during breaks and stops</li>
          </ul>

          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            We choose drivers for your travel with local knowledge also helps in
            avoiding traffic and choosing better roads.
          </p>
        </section>
        {/*Taxi Options  */}
          <section className="mt-12">
          <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6">
            One-Way and Round-Trip Taxi Options
          </h4>
          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            Our specialty is that we offer <strong>one-way taxi options.</strong> Booking one-way taxi service from Jaipur to Jodhpur taxi service. With our taxi services in Jaipur you only pay for one side of the journey, we make your journey making  cost-effective for travelers who don’t plan to return immediately.
          </p>
          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            You can also book:
          </p>
          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✔One-way taxi Jaipur to Jodhpur</li>
            <li>✔Round-trip taxi</li>
            <li>✔Multi-day travel packages</li>
            <li>✔Customized travel plans</li>
          </ul>

          <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            Our flexible taxi service offers the suitable for all types of travelers.
          </p>
        </section>

        {/* SIGHTSEEING */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-center">
            🏰 Popular Sightseeing in Jodhpur
          </h2>

       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

  {/* Mehrangarh Fort */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden 
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group cursor-pointer">
    <div className="relative h-[220px] overflow-hidden">
      <Image
        src="/images/mehrangarh-fort.jpg"
        alt="Mehrangarh Fort Jodhpur Rajasthan"
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">🏰 Mehrangarh Fort</h3>
      <p className="text-sm text-gray-600 mt-2">
        One of the largest forts in India with panoramic city views.
      </p>
    </div>
  </div>

  {/* Jaswant Thada */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden 
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group  cursor-pointer ">
    <div className="relative h-[220px] overflow-hidden">
      <Image
        src="/images/jaswant-thada.jpg"
        alt="Jaswant Thada Jodhpur Rajasthan"
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">🌿 Jaswant Thada</h3>
      <p className="text-sm text-gray-600 mt-2">
        Beautiful marble cenotaph located near Mehrangarh Fort.
      </p>
    </div>
  </div>

  {/* Umaid Bhawan Palace */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden 
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group  cursor-pointer ">
    <div className="relative h-[220px] overflow-hidden">
      <Image
        src="/images/umaid-bhawan.webp"
        alt="Umaid Bhawan Palace Jodhpur"
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">🏛 Umaid Bhawan Palace</h3>
      <p className="text-sm text-gray-600 mt-2">
        Luxury palace and heritage museum in Jodhpur.
      </p>
    </div>
  </div>

  {/* Ghanta Ghar */}
  <div className="bg-white rounded-xl shadow-md overflow-hidden 
                  transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group  cursor-pointer ">
    <div className="relative h-[220px] overflow-hidden">
      <Image
        src="/images/ghanta-ghar.jpg"
        alt="Ghanta Ghar Clock Tower Jodhpur Market"
        fill
        loading="lazy"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
    </div>
    <div className="p-4">
      <h3 className="font-semibold text-lg">🛍 Ghanta Ghar Clock Tower</h3>
      <p className="text-sm text-gray-600 mt-2">
        Famous local market for shopping and street food.
      </p>
    </div>
  </div>

</div>

           <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
            If you want to explore Rajasthan’s culture and landscapes. Our taxi service allows you to stop at scenic or cultural locations of Jaipur and Jodhpur. You can also customise your tour and add heritage spots into your tour. Passengers can change transport schedules and destinations.
          </p>
        </section>

        {/* PRICING */}
        <section className="mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            💰 Affordable and Transparent Pricing
          </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
                Our taxis always is always known for maintaining transparent pricing and no hidden charges. We share the pricing in advance,  so passengers do not face any inconvenience.
          </p>

          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✔ Per km charges</li>
            <li>✔ Driver allowance included</li>
            <li>✔ Toll & parking details shared</li>
            <li>✔ No hidden charges</li>
          </ul>
            <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
                Planning with us, travel budget becomes friendly and stress-free.
          </p>
        </section>
       <section className="mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Easy Booking Process
          </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
                Our booking process is very easy and simple. Many jaipur and Jodhpur taxi providers offer:
          </p>

          <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
            <li>✔ Phone booking</li>
            <li>✔ Online booking</li>
            <li>✔ WhatsApp assistance</li>
            <li>✔ Instant confirmation</li>
          </ul>
            <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
                We provide customer support for passengers and solve travel queries.
          </p>
        </section>
         <section className="mt-12">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
           Conclusion
          </h2>
            <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
                Our <strong>Jaipur to Jodhpur taxi service</strong> is the perfect choice for passengers who value comfort, safety, and flexibility all together. Our professional drivers, clean vehicles, transparent pricing, and easy booking process ensures a smooth journey between two royal cities of Rajasthan.
          </p>

            <p className="mt-6 text-base sm:text-lg text-gray-700 cursor-pointer">
                We transform our journey into a pleasant experience Whether you’re traveling for leisure, work, or family reasons, a taxi transforms the journey into a pleasant experience rather than just a commute. Choose a trusted taxi service and enjoy the road trip from Jaipur to Jodhpur in complete comfort.
          </p>
        </section>
        
        

        {/* CTA */}
      <section className="mt-14 text-center">
  <Link
    href="/contact"
    className="inline-block bg-[#EFA701] hover:bg-[#d99600] text-white 
               px-6 sm:px-8 py-3 rounded-lg 
               text-base sm:text-lg font-semibold 
               transition duration-300 shadow-md hover:shadow-lg"
  >
    🚖 Book Cab Now
  </Link>
</section>


      </div>
    </div>
  );
}
