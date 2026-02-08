"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import SpotlightButton from "./SpotlightButton";
import { toast } from "react-toastify";

const slides = [
  {
    image: "/images/cabSlide01.png.webp",
    title: "Book Taxi for Your Ride in Jaipur – Jaipur Pink City Cab",
  },
  
  {
    image: "/images/cabSlide02.png.webp",
    title: "Safe & Fast Taxi Service in Jaipur | Jaipur Pink City Cab",
  },
  {
    image: "/images/cabSlide03.png.webp",
    title: "24/7 Taxi Available in Jaipur | Jaipur Pink City Cab",
  },
];

const SlidrBox = () => {
  const [current, setCurrent] = useState(0);
  const [open, setOpen] = useState(false);
const [openDropdown, setOpenDropdown] = useState(null);

const [selectedCab, setSelectedCab] = useState("Choose Cab");
const [selectedAge, setSelectedAge] = useState("Choose Age");
const [selectedModel, setSelectedModel] = useState("Choose Model");

const dropdownWrapperRef = useRef(null);


useEffect(() => {
  const handleClickOutside = (e) => {
    if (
      dropdownWrapperRef.current &&
      !dropdownWrapperRef.current.contains(e.target)
    ) {
      setOpenDropdown(null);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, []);



  const headingRef = useRef(null);
  const contentRef = useRef(null);


  // AUTO SLIDE
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  // GSAP TEXT + CONTENT ANIMATION
  useEffect(() => {
    // Reset
    gsap.set(contentRef.current.children, { opacity: 0, y: 40 });

    // POP animation
    gsap.to(contentRef.current.children, {
      opacity: 1,
      y: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
    });

    // Typing Effect
    const text = slides[current].title;
    let index = 0;
    headingRef.current.innerHTML = "";

    const typing = setInterval(() => {
      headingRef.current.innerHTML +=
        text[index] === "T"
          ? `<span class="text-yellow-400">T</span>`
          : text[index];
      index++;
      if (index >= text.length) clearInterval(typing);
    }, 70);

    return () => clearInterval(typing);
  }, [current]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
const [pickup, setPickup] = useState("");
const [drop, setDrop] = useState("");
const [passengers, setPassengers] = useState("");
const [date, setDate] = useState("");
const [time, setTime] = useState("");
const [errors, setErrors] = useState({
  pickup: "",
  drop: "",
  passengers: "",
  cab: "",
  date: "",
  time: "",
  name: "",
  contact: "",
});
const [name, setName] = useState("");
const [contact, setContact] = useState("");
const [isSubmitting, setIsSubmitting] = useState(false);

const handleBookTaxi = async () => {
  const newErrors = {};

  if (!pickup) newErrors.pickup = true;
  if (!drop) newErrors.drop = true;
  if (!passengers) newErrors.passengers = true;
  if (selectedCab === "Choose Cab") newErrors.cab = true;
  if (!date) newErrors.date = true;
  if (!time) newErrors.time = true;
  if (!name) newErrors.name = true;
  if (!contact) newErrors.contact = true;

  setErrors(newErrors);
  if (Object.keys(newErrors).length > 0) return;

  setIsSubmitting(true);

  try {
    const res = await fetch("/api/book-taxi", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pickup,
        drop,
        passengers,
        cab: selectedCab,
        date,
        time,
        name,
        contact,
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success(
        "🚕 Booking Confirmed! Jaipur Pink City Cab will contact you shortly."
      );

      // ✅ RESET FORM
      setPickup("");
      setDrop("");
      setPassengers("");
      setSelectedCab("Choose Cab");
      setName("");
      setContact("");

      const now = new Date();
      setDate(now.toISOString().split("T")[0]);
      setTime(now.toTimeString().slice(0, 5));

      setErrors({});
    } else {
      toast.error("❌ Booking failed. Please try again.");
    }
  } catch (error) {
    toast.error("❌ Server error. Please try later.");
  } finally {
    setIsSubmitting(false);
  }
};





useEffect(() => {
  const now = new Date();

  // YYYY-MM-DD
  const today = now.toISOString().split("T")[0];

  // HH:MM
  const currentTime = now.toTimeString().slice(0, 5);

  setDate(today);
  setTime(currentTime);
}, []);

  return (
    <section
      className="relative w-full min-h-[90vh] bg-cover bg-center transition-all duration-700"
      style={{ backgroundImage: `url(${slides[current].image})` }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div
        ref={contentRef}
        className="relative z-10 max-w-7xl mx-auto px-4 pt-32 pb-24 text-center text-white"
      >
        <p className="text-yellow-400 tracking-widest font-semibold mb-4">
          WELCOME TO  Jaipur Pink City Cab
        </p>

        <h1
          ref={headingRef}
          className="text-4xl md:text-6xl font-extrabold leading-tight min-h-20"
        ></h1>

        <p className="max-w-3xl mx-auto text-gray-300 mt-6">
          Jaipur Pink City Cab | Premium Taxi Service in Jaipur – 24/7 Available
        </p>

      <div className="flex justify-center gap-4 mt-10">

     <SpotlightButton
  text="ABOUT MORE →"
  //  icon={Car}
  href="/contact"
  bgColor="bg-[#EFA701]"
  hoverBgColor="hover:bg-black"
  textColor="text-black"
  hoverTextColor="hover:text-white"
/>
     <SpotlightButton
  text="LEARN MORE →"
  //  icon={Car}
  href="/contact"
  bgColor="bg-white"
  hoverBgColor="hover:bg-[#EFA701]"
  textColor="text-black"
  hoverTextColor="hover:text-white"
/>


  {/* <button ref={btn2Ref} className="spotlight-btn gray">
    <span className="spotlight"></span>
    <span className="relative z-10 text-white">LEARN MORE →</span>
  </button> */}
</div>

      </div>

      {/* Arrows */}
     <button
  onClick={prevSlide}
  className="slider-arrow left-6"
>
  ←
</button>

<button
  onClick={nextSlide}
  className="slider-arrow right-6"
>
  →
</button>


{/* Booking Form */}
{/* Booking Form */}
<div className="relative z-20 max-w-6xl mx-auto -mt-20 px-4 top-40">
  <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
    <h3 className="text-xl font-bold mb-6">Book Your Ride</h3>

    <div
      ref={dropdownWrapperRef}
      className="grid grid-cols-1 md:grid-cols-4 gap-4"
    >
      {/* PICKUP */}
      <input
        value={pickup}
        onChange={(e) => {
          setPickup(e.target.value);
          setErrors({ ...errors, pickup: "" });
        }}
        placeholder="Pick Up Location"
        className={`input ${
          errors.pickup
            ? "border-red-500 ring-1 ring-red-500"
            : pickup
            ? "border-[#EFA701] ring-1 ring-[#EFA701]"
            : ""
        }`}
      />

      {/* DROP */}
      <input
        value={drop}
        onChange={(e) => {
          setDrop(e.target.value);
          setErrors({ ...errors, drop: "" });
        }}
        placeholder="Drop Off Location"
        className={`input ${
          errors.drop
            ? "border-red-500 ring-1 ring-red-500"
            : drop
            ? "border-[#EFA701] ring-1 ring-[#EFA701]"
            : ""
        }`}
      />

      {/* PASSENGERS */}
      <input
        value={passengers}
        onChange={(e) => {
          setPassengers(e.target.value);
          setErrors({ ...errors, passengers: "" });
        }}
        placeholder="Passengers"
        className={`input ${
          errors.passengers
            ? "border-red-500 ring-1 ring-red-500"
            : passengers
            ? "border-[#EFA701] ring-1 ring-[#EFA701]"
            : ""
        }`}
      />

      {/* CHOOSE CAB */}
      <div className="relative">
        <button
          onClick={() =>
            setOpenDropdown(openDropdown === "cab" ? null : "cab")
          }
          className={`select-trigger ${
            errors.cab
              ? "border-red-500 ring-1 ring-red-500"
              : selectedCab !== "Choose Cab"
              ? "border-[#EFA701] ring-1 ring-[#EFA701]"
              : ""
          }`}
        >
          {selectedCab}
          <span className={`arrow ${openDropdown === "cab" ? "rotate" : ""}`}>
            ⌃
          </span>
        </button>

        {openDropdown === "cab" && (
          <div className="cab-options open">
            {["Mini", "Sedan", "SUV", "Luxury"].map((item) => (
              <div
                key={item}
                className={`cab-option ${
                  selectedCab === item ? "active" : ""
                }`}
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCab(item);
                  setOpenDropdown(null);
                }}
              >
                {item}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* DATE */}
      <input
        type="date"
        value={date}
        onChange={(e) => {
          setDate(e.target.value);
          setErrors({ ...errors, date: "" });
        }}
        className={`input ${
          errors.date
            ? "border-red-500 ring-1 ring-red-500"
            : date
            ? "border-[#EFA701] ring-1 ring-[#EFA701]"
            : ""
        }`}
      />

      {/* TIME */}
      <input
        type="time"
        value={time}
        onChange={(e) => {
          setTime(e.target.value);
          setErrors({ ...errors, time: "" });
        }}
        className={`input ${
          errors.time
            ? "border-red-500 ring-1 ring-red-500"
            : time
            ? "border-[#EFA701] ring-1 ring-[#EFA701]"
            : ""
        }`}
      />

      {/* NAME */}
      <input
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setErrors({ ...errors, name: "" });
        }}
        placeholder="Your Name"
        className={`input ${
          errors.name
            ? "border-red-500 ring-1 ring-red-500"
            : name
            ? "border-[#EFA701] ring-1 ring-[#EFA701]"
            : ""
        }`}
      />

      {/* CONTACT */}
      <input
        type="tel"
        value={contact}
        onChange={(e) => {
          setContact(e.target.value);
          setErrors({ ...errors, contact: "" });
        }}
        placeholder="Contact Number"
        className={`input ${
          errors.contact
            ? "border-red-500 ring-1 ring-red-500"
            : contact
            ? "border-[#EFA701] ring-1 ring-[#EFA701]"
            : ""
        }`}
      />
    </div>

    {/* SUBMIT */}
   <div className="flex justify-end mt-6">
  <button onClick={handleBookTaxi} disabled={isSubmitting}>
    <SpotlightButton
      text={isSubmitting ? "BOOKING..." : "BOOK TAXI →"}
      bgColor="bg-[#EFA701]"
      hoverBgColor="hover:bg-black"
      textColor="text-black"
      hoverTextColor="hover:text-white"
      className={isSubmitting ? "opacity-70 cursor-not-allowed" : ""}
    />
  </button>
</div>

  </div>
</div>





    </section>
  );
};

export default SlidrBox;
