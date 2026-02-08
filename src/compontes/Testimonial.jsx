"use client";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Customer",
    image: "/images/testmonial02-optimized.webp",
    review:
      "I had a great experience with Jaipur Pink City Cab. The driver was very polite, arrived on time, and knew all the local routes very well. The cab was clean and comfortable, which made our city tour smooth and enjoyable. Highly recommended for anyone visiting Jaipur.",
  },
  {
    name: "Priya Verma",
    role: "Customer",
    image: "/images/testmonial02-optimized.webp",
    review:
      "Jaipur Pink City Cab provided excellent service for our airport pickup. The booking process was simple, the cab arrived on time, and the driver was very helpful. The ride was comfortable and stress-free. I will definitely use their service again.",
  },
  {
    name: "Amit Singh",
    role: "Customer",
    image: "/images/testmonial03-optimized.webp",
    review:
      "Very professional and reliable cab service in Jaipur. The driver was friendly, well-behaved, and ensured a safe journey throughout. The car was neat and well-maintained. Jaipur Pink City Cab is a trustworthy option for local and outstation travel.",
  },
  {
    name: "Neha Gupta",
    role: "Customer",
    image: "/images/testmonial04-optimized.webp",
    review:
      "My experience with Jaipur Pink City Cab was excellent. The driver was punctual and cooperative, and the entire trip was very comfortable. The service was well-organized and reasonably priced. I would strongly recommend this cab service in Jaipur.",
  },
];


export default function Testimonial() {
  return (
    <section
      className="relative py-24 bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/testmonialbg-optimized.webp')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-yellow-400 font-semibold tracking-widest uppercase">
            Testimonials
          </p>
          <h2 className="text-4xl font-bold text-white mt-2">
            What Our Clients Say
          </h2>
          <div className="flex justify-center mt-4">
            <span className="w-12 h-1 bg-yellow-400 rounded-full"></span>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 text-center shadow-lg hover:scale-105 transition-transform duration-300"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mx-auto rounded-full border-4 border-yellow-400 object-cover"
              />

              <h4 className="font-semibold text-lg mt-4">
                {item.name}
              </h4>
              <span className="text-sm text-yellow-500">
                {item.role}
              </span>

              <p className="text-gray-600 text-sm mt-4">
                {item.review}
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-4 text-yellow-400 text-lg">
                ★★★★★
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
