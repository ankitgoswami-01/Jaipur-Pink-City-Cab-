
"use client";

import { Car } from "lucide-react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import SpotlightButton from "@/compontes/SpotlightButton";
import PageHeading from "@/compontes/PageHeading";

/* ================= SERVICE DATA ================= */

const services = {
  //   Jaipur to Delhi One Way Taxi Service start
  "jaipur-to-delhi-one-way-taxi-service": {
    title: "Jaipur to Delhi One Way Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  //   Jaipur to Delhi One Way Taxi Service end
  //  Taxi Service in Jaipur start

  "taxi-service-in-jaipur": {
    title: "Taxi Service in Jaipur",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },

  // Taxi Service in Jaipur end

  // Cab Service in Jaipur  start

  "cab-service-in-jaipur": {
    title: "Cab Service in Jaipur",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Cab Service in Jaipur  end

  // Car Rental in Jaipur  start

  "car-rental-in-jaipur": {
    title: "Car Rental in Jaipur",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Car Rental in Jaipur  end

  // Jaipur To Khatu Shyam Ji Taxi Service   start

  "jaipur-to-khatu-shyam-ji-taxi-service": {
    title: "Jaipur To Khatu Shyam Ji Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Jaipur To Khatu Shyam Ji Taxi Service  end

  // Jaipur To Jodhpur Taxi Service  start

  "jaipur-to-jodhpur-taxi-service": {
    title: "Jaipur To Jodhpur Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Jaipur To Jodhpur Taxi Service  end

  // Jaipur To Udaipur And Mount Abu Taxi Service  start

  "jaipur-to-udaipur-and-mount-abu-taxi-service": {
    title: "Jaipur To Udaipur And Mount Abu Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  //  Jaipur To Udaipur And Mount Abu Taxi Service end

  // Jaipur To Jaisalmer Taxi Service start

  "jaipur-to-jaisalmer-taxi-service": {
    title: "Jaipur To Jaisalmer Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Jaipur To Jaisalmer Taxi Service end

  //Jaipur To Sawai Madhopur Taxi Service start

  "jaipur-to-sawai-madhopur-taxi-service": {
    title: "Jaipur To Sawai Madhopur Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Jaipur To Sawai Madhopur Taxi Service end

  //Tempo Traveller Service in Jaipur start

  "tempo-traveller-service-in-jaipur": {
    title: "Tempo Traveller Service in Jaipur",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Tempo Traveller Service in Jaipur end

  //Jaipur To Agra One Way Cab Service start

  "jaipur-to-agra-one-way-cab-service": {
    title: "Jaipur To Agra One Way Cab Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Jaipur To Agra One Way Cab Service end

  //Golden Triangle Tours Package  start

  "golden-triangle-tours-package": {
    title: "Golden Triangle Tours Package",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Golden Triangle Tours Package  end

  // Jaipur to Ayodhya Taxi Service   start

  "jaipur-to-ayodhya-taxi-service": {
    title: "Jaipur to Ayodhya Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Jaipur to Ayodhya Taxi Service  end

  // Jaipur Airport Taxi Service  start

  "jaipur-airport-taxi-service": {
    title: "Jaipur Airport Taxi Service",

    image: "/images/jaipur-to-delhi-one-way-taxi-service-innova-crysta.png",

    intro: (
      <>
        <h1 className="text-3xl font-bold mt-5 mb-5">
          Jaipur to Delhi One Way Taxi Service – Comfortable, Affordable &
          Hassle-Free Travel
        </h1>

        <p className="mb-4">
          Our team is dedicated to providing the
          <strong>best taxi service in Jaipur</strong>. Business travellers and
          tourists always prefer us as we provide on-time
          <strong> one-way cabs in Jaipur</strong>. Our agents make budgeting
          easier and avoid last-minute surprises. Tourists need flexibility
          while travelling, and we provide customisation even in one-way tour
          packages. Whether you want a break for shopping or refreshment, we
          offer customization for a comfortable travel. Families travelling with
          elderly people and children would find our cab services more reliable
          and comfortable.
        </p>

        <p className="font-semibold mb-5">
          With our company, you do not need to pay for a return journey.
        </p>
      </>
    ),

    why: {
      title: "Why Choose Jaipur to Delhi One Way Taxi Service?",
      intro:
        "Smart travellers choose a one-way taxi and comfort without unnecessary charges. Here’s why passengers prefer one-way cabs:",
      points: [
        "Pay only for one-sided travel",
        "No return fare or hidden costs",
        "Door-to-door pickup and drop-off",
        "Flexible travel time",
        "More comfortable than buses or trains",
      ],
    },

    distance: [
      <>
        <strong>Distance: </strong>Jaipur to Delhi tour covers approx 280 km
      </>,
      <>
        <strong>Travel Time: </strong> Jaipur to Delhi tour takes approx 5 to 6
        hours (depending on traffic and route)
      </>,
    ],

    cabTypes: {
      intro:
        "We provide multiple cab options to our clients according to their budget and group size:",
      list: [
        "Hatchback: Swift, WagonR – Budget friendly",
        "Sedan: Dzire, Etios – Comfortable for small families",
        "SUV: Ertiga, Innova – Ideal for group travel",
        "Luxury Cars – For a premium travel experience",
      ],
    },

    benefits: [
      <strong>Affordable pricing</strong>,
      <strong>24/7 availability</strong>,
      <strong>Professional and verified drivers</strong>,
      <strong>No luggage limit</strong>,
      <strong>Easy booking process</strong>,
    ],

    idealFor: [
      "Airport pickup and drop",
      "Office and business trips",
      "Students shifting to hostels",
      "Tourists exploring Delhi",
      "Emergency and late-night travel",
    ],

    safety: (
      <>
        Passengers' safety is our top priority. We sanitize our cabs, enable
        GPS, and verify drivers.Another major benefit of the one-way Jaipur to
        Delhi Cab service is transparent pricing. Our company offers a Jaipur to
        Delhi taxi service with clear fare structures and no hidden charges. We
        also include Toll taxes, driver allowance, and fuel costs, so our
        passengers travel with peace of mind.
      </>
    ),

    bookingSteps: {
      introTitle: "How to Book a Jaipur to Delhi One-Way Taxi?",
      introText: "With our taxi in Jaipur, booking is quick and simple:",
      steps: [
        "Choose your pickup point in Jaipur",
        "Select drop location in Delhi / NCR",
        "Pick your preferred vehicle",
        "Click confirm and travel stress-free",
      ],
    },

    finalText: (
      <>
        If you are planning for a unique yet reliable taxi service in Delhi,
        book our taxi service for your next trip. Our company provides a perfect
        travel experience and a smooth journey. We make your journey economical.
        One-way cab service is helpful for late-night travellers. Book our cabs
        to avoid worrying about train availability or bus timings. Book our{" "}
        <strong>cab service in Jaipur</strong> today and enjoy a great journey.
      </>
    ),
  },
  // Jaipur Airport Taxi Service   end
};

/* ================= PAGE ================= */

export default function ServiceSlugPage() {
  const params = useParams();
  const slug = Array.isArray(params.slug) ? params.slug[0] : params.slug;
  const service = services[slug];

  if (!service) {
    return (
      <div className="text-center py-20 text-xl font-semibold">
        Service not found
      </div>
    );
  }

  return (
    <>
      {/* HERO */}
      <PageHeading title={service.title} bgImage={service.image} />

      <section className="max-w-7xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="bg-gray-100 rounded-xl p-6">
            <h3 className="font-semibold text-lg mb-4">All Services</h3>
            <ul className="space-y-2 text-sm  text-gray-700">
              <li>
                <Link
                  href="/service/jaipur-to-delhi-one-way-taxi-service"
                  className="hover:underline"
                >
                  Jaipur to Delhi One Way Taxi Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/taxi-service-in-jaipur"
                  className="hover:underline"
                >
                  Taxi Service in Jaipur
                </Link>
              </li>

              <li>
                <Link
                  href="/service/cab-service-in-jaipur"
                  className="hover:underline"
                >
                  Cab Service in Jaipur
                </Link>
              </li>
              <li>
                <Link
                  href="/service/car-rental-in-jaipur"
                  className="hover:underline"
                >
                  Car Rental in Jaipur
                </Link>
              </li>
              <li>
                <Link
                  href="/service/jaipur-to-khatu-shyam-ji-taxi-service"
                  className="hover:underline"
                >
                  Jaipur To Khatu Shyam Ji Taxi Service
                </Link>
              </li>

              <li>
                <Link
                  href="/service/jaipur-to-jodhpur-taxi-service"
                  className="hover:underline"
                >
                  Jaipur To Jodhpur Taxi Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/jaipur-to-udaipur-and-mount-abu-taxi-service"
                  className="hover:underline"
                >
                  Jaipur To Udaipur And Mount Abu Taxi Service
                </Link>
              </li>

              <li>
                <Link
                  href="/service/jaipur-to-jaisalmer-taxi-service"
                  className="hover:underline"
                >
                  Jaipur To Jaisalmer Taxi Service
                </Link>
              </li>

              <li>
                <Link
                  href="/service/jaipur-to-sawai-madhopur-taxi-service"
                  className="hover:underline"
                >
                  Jaipur To Sawai Madhopur Taxi Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/tempo-traveller-service-in-jaipur"
                  className="hover:underline"
                >
                  Tempo Traveller Service in Jaipur
                </Link>
              </li>

              <li>
                <Link
                  href="/service/jaipur-to-agra-one-way-cab-service"
                  className="hover:underline"
                >
                  Jaipur To Agra One Way Cab Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/golden-triangle-tours-package"
                  className="hover:underline"
                >
                  Golden Triangle Tours Package
                </Link>
              </li>
              <li>
                <Link
                  href="/service/jaipur-to-ayodhya-taxi-service"
                  className="hover:underline"
                >
                  Jaipur to Ayodhya Taxi Service
                </Link>
              </li>
              <li>
                <Link
                  href="/service/jaipur-airport-taxi-service"
                  className="hover:underline"
                >
                  Jaipur Airport Taxi Service
                </Link>
              </li>
            </ul>
          </div>
        </aside>

        {/* CONTENT */}
        <article className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 space-y-12">
          {/* IMAGE */}
          <div className="relative w-full h-80">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover rounded-xl"
              priority
            />
          </div>

          {/* INTRO */}
          <div className="text-gray-700 leading-8">{service.intro}</div>

          {/* WHY */}
          <section>
            <h2 className="text-2xl font-bold mb-4 my-5">
              {service.why.title}
            </h2>
            <p className="text-gray-700">{service.why.intro}</p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-700">
              {service.why.points.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* DISTANCE */}
          <section>
            <h2 className="text-2xl font-bold mb-4 mt-5">
              Distance & Travel Time
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {service.distance.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* CAB TYPES */}
          <section>
            <h2 className="text-2xl font-bold mb-4  mt-5">
              Types of Cabs Available
            </h2>

            <p className="text-gray-700 mb-3 font-semibold">
              {service.cabTypes.intro}
            </p>

            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {service.cabTypes.list.map((cab, i) => (
                <li key={i} className="font-semibold">
                  {cab}
                </li>
              ))}
            </ul>
          </section>

          {/* BENEFITS */}
          <section>
            <h2 className="text-2xl font-bold mb-4 mt-5 ">
              Benefits of Booking a One-Way Taxi
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {service.benefits.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* IDEAL FOR */}
          <section>
            <h2 className="text-2xl font-bold mb-4 mt-5 ">
              Perfect for All Travel Needs
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {service.idealFor.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* SAFETY */}
          <section>
            <h2 className="text-2xl font-bold mb-4 mt-5 ">
              Safety & Comfort Assured
            </h2>
            <p className="text-gray-700 leading-8">{service.safety}</p>
          </section>

          {/* BOOKING */}
          <section>
            <h2 className="text-2xl font-bold mb-4  mt-5 ">
              {service.bookingSteps.introTitle}
            </h2>

            <p className="text-gray-700 mb-3 font-semibold">
              {service.bookingSteps.introText}
            </p>

            <ol className="list-decimal pl-6 space-y-2 text-gray-700">
              {service.bookingSteps.steps.map((step, i) => (
                <li key={i} className="font-semibold">
                  {step}
                </li>
              ))}
            </ol>
          </section>

          {/* FINAL */}
          <section>
            <h2 className="text-2xl font-bold mb-4 mt-5 ">Final Words</h2>
            <p className="text-gray-700 leading-8 mb-5">{service.finalText}</p>
          </section>

          {/* CTA */}
          <SpotlightButton
            bgColor="bg-yellow-400"
            text="Book Cab Now"
            href="/contact"
            icon={Car}
          />
        </article>
      </section>
    </>
  );
}
