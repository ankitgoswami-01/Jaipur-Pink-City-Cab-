"use client";
import { useState } from "react";
import SpotlightButton from "./SpotlightButton";

const taxiTabs = [
  "All Taxi",
  "Hybrid Taxi",
  "Town Taxi",
  "SUV Taxi",
  "Limousine Taxi",
];

const taxisData = [
  {
    type: "Hybrid Taxi",
    name: "Dzire Taxi",
    price: "₹10/km",
    image: "/images/jaipur-pink-city-cab-dzire-taxi-service.png.webp",
    imageAlt: "Dzire Taxi Service in Jaipur by Jaipur Pink City Cab with affordable per km pricing",
    specs: [
      { label: "Taxi Doors", value: "4" },
      { label: "Passengers", value: "4" },
      { label: "Luggage Carry", value: "2" },
      { label: "Air Condition", value: "Yes" },
      { label: "GPS Navigation", value: "Yes" },
      { label: "Driver Choosing", value: "Yes" },
    ],
  },
  {
    type: "Town Taxi",
    name: "Innova Taxi",
    price: "₹16/km",
    image: "/images/taxi-service-in-jaipur-toyota-innova-optimized.webp",
    imageAlt: "Innova Taxi Service in Jaipur by Jaipur Pink City Cab for comfortable family and outstation travel",
    specs: [
      { label: "Taxi Doors", value: "4" },
      { label: "Passengers", value: "6" },
      { label: "Luggage Carry", value: "4" },
      { label: "Air Condition", value: "Yes" },
      { label: "GPS Navigation", value: "Yes" },
      { label: "Driver Choosing", value: "Yes" },
    ],
  },
  {
    type: "SUV Taxi",
    name: "Tempo Traveller Taxi",
    price: "₹24/km",
    image: "/images/tempo-traveller-taxi-service-jaipur-optimized.webp",
     imageAlt: "Tempo Traveller Taxi Service in Jaipur by Jaipur Pink City Cab for group travel and tours",
    specs: [
      { label: "Passengers", value: "12–17" },
      { label: "Luggage Carry", value: "Large" },
      { label: "Air Condition", value: "Yes" },
      { label: "Ideal For", value: "Group Travel" },
      { label: "GPS Navigation", value: "Yes" },
      { label: "Driver Choosing", value: "Yes" },

    ],
  },
  {
    type: "Limousine Taxi",
    name: "Urbania Tempo Traveller ",
    price: "₹30/km",
    image: "/images/jaipur-pink-city-cab-tempo-traveller-taxi-optimized.webp",
     imageAlt: "Urbania Tempo Traveller Luxury Taxi Service in Jaipur by Jaipur Pink City Cab for VIP travel",
    specs: [
      { label: "Passengers", value: "10–14" },
      { label: "Luxury Seats", value: "Yes" },
      { label: "Air Condition", value: "Premium" },
      { label: "Best For", value: "VIP Travel" },
    ],
  },
  {
    type: "Hybrid Taxi",
    name: "Innova Crasta Taxi ",
    price: "₹18/km",
    image: "/images/jaipur-pink-city-cab-innova.png.webp",
    imageAlt: "Innova Crysta Taxi Service in Jaipur by Jaipur Pink City Cab with comfortable hybrid travel",
    specs: [
      { label: "Taxi Doors", value: "4" },
      { label: "Passengers", value: "4" },
      { label: "Fuel Type", value: "Hybrid" },
      { label: "Air Condition", value: "Yes" },
    ],
  },
  {
    type: "SUV Taxi",
    name: "Hyundai Aura Taxi",
    price: "₹18/km", 
    image: "/images/jaipur-cab-booking-dzire.png.webp",
     imageAlt: "Hyundai Aura Taxi Service in Jaipur by Jaipur Pink City Cab for comfortable city and outstation travel",
    specs: [
      { label: "Passengers", value: "6–7" },
      { label: "Luggage Carry", value: "Medium" },
      { label: "Air Condition", value: "Yes" },
      { label: "Drive Type", value: "SUV" },
    ],
  },
];

const OurTaxiIntro = () => {
  const [activeTab, setActiveTab] = useState("All Taxi");

  const filteredTaxis =
    activeTab === "All Taxi"
      ? taxisData
      : taxisData.filter((taxi) => taxi.type === activeTab);

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-10">
          <p className="text-yellow-400 tracking-widest font-semibold mb-2">
            OUR TAXI
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Let's Check Available Taxi
          </h2>
          <div className="heading-divider mx-auto mt-4"></div>
        </div>

        {/* Mobile Select */}
        <div className="block md:hidden mb-6">
          <select
            value={activeTab}
            onChange={(e) => setActiveTab(e.target.value)}
            className="w-full border-2 border-yellow-400 rounded-full px-4 py-3 font-semibold"
          >
            {taxiTabs.map((tab, i) => (
              <option key={i} value={tab}>
                {tab}
              </option>
            ))}
          </select>
        </div>

        {/* Tabs */}
        <div className="hidden md:flex flex-wrap justify-center gap-3 mb-12">
          {taxiTabs.map((tab, i) => (
            <button
              key={i}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeTab === tab
                    ? "bg-yellow-400 text-black"
                    : "bg-black text-white hover:bg-yellow-400 hover:text-black"
                }`}
            >
              {tab.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Taxi Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTaxis.map((taxi, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-6 text-center"
            >
              <img
                src={taxi.image}
                alt={taxi.name}
                className="w-full max-w-xs mx-auto mb-4 object-contain"
              />

              <h3 className="font-bold text-lg">{taxi.name}</h3>
              <p className="text-yellow-400 font-semibold text-sm mb-4">
                {taxi.price}
              </p>

              <ul className="text-sm text-gray-600 space-y-2 mb-6 text-left">
                {taxi.specs.map((item, idx) => (
                  <li key={idx} className="flex justify-between">
                    <span className="flex items-center gap-2">
                      <span className="text-yellow-400">✔</span>
                      {item.label}:
                    </span>
                    <span>{item.value}</span>
                  </li>
                ))}
              </ul>

              <SpotlightButton
                text="BOOK TAXI NOW →"
                bgColor="bg-[#EFA701]"
                hoverBgColor="hover:bg-black"
                textColor="text-black"
                hoverTextColor="hover:text-white"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OurTaxiIntro;
