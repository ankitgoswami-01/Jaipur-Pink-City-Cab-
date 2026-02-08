"use client";

import SpotlightButton from "./SpotlightButton";

const plans = [
  {
    title: "Basic Package (Creta)",
    price: "₹180",
    image: "/images/hyundai-venue-taxi-jaipur-pink-city-cab.png.webp",
    details: [
      { label: "Base Charge", value: "₹180" },
      { label: "Distance Allowance", value: "3 km" },
      { label: "Up To 30 km", value: "₹18/km" },
      { label: "Booking Fee", value: "₹40" },
      { label: "Extra Passengers", value: "₹50" },
    ],
  },
  {
    title: "Standard Package (Innova)",
    price: "₹250",
    image: "/images/toyota-innova-taxi-service-jaipur.png",
    details: [
      { label: "Base Charge", value: "₹250" },
      { label: "Distance Allowance", value: "5 km" },
      { label: "Up To 50 km", value: "₹22/km" },
      { label: "Booking Fee", value: "₹60" },
      { label: "Extra Passengers", value: "₹70" },
    ],
  },
  {
    title: "Premium Package (Ertiga)",
    price: "₹350",
    image: "/images/jaipur-ertiga-taxi.png.webp",
    details: [
      { label: "Base Charge", value: "₹350" },
      { label: "Distance Allowance", value: "8 km" },
      { label: "Up To 80 km", value: "₹26/km" },
      { label: "Booking Fee", value: "₹90" },
      { label: "Extra Passengers", value: "₹100" },
    ],
  },
];

export default function TaxiRate() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold uppercase tracking-widest text-sm">
            Taxi Rate
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-2">
            Our Taxi Rate For You
          </h2>
          <div className="flex justify-center mt-4">
            <div className="heading-divider"></div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                bg-[#ece5e545]
                rounded-2xl
                shadow-md
                p-6
                text-center
                transition-all
                duration-500
                hover:-translate-y-3
                hover:shadow-2xl
              "
            >
              {/* Taxi Image */}
              <img
                src={plan.image}
                alt={plan.title}
                className="mx-auto h-24 sm:h-28 object-contain"
              />

              <h4 className="mt-4 font-bold text-base sm:text-lg uppercase">
                {plan.title}
              </h4>
              <p className="text-xs sm:text-sm text-yellow-500">
                One Time Payment
              </p>

              {/* Price Box */}
              <div className="relative bg-black text-white rounded-xl mt-6 p-5 sm:p-6 overflow-hidden">

                {/* Background Shape */}
                <img
                  src="/images/texiRateshape-4.png"
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-20"
                />

                {/* Content */}
                <div className="relative z-10">

                  {/* Taxi Icon */}
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black text-xl shadow-lg">
                    🚕
                  </div>

                  <ul className="text-sm mt-8 space-y-3">
                    {plan.details.map((item, i) => (
                      <li key={i} className="flex justify-between">
                        <span className="rate-check">{item.label}</span>
                        <span>{item.value}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6">
                    <SpotlightButton
                      text="CHOOSE PLAN →"
                      bgColor="bg-[#EFA701]"
                      hoverBgColor="hover:bg-white"
                      textColor="text-black"
                      hoverTextColor="hover:text-black"
                    />
                  </div>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
