"use client";

const testimonials = [
  {
    name: "Heruli Nez",
    role: "Customer",
    image: "/images/testmonial01.jpg",
  },
  {
    name: "Sylvia Green",
    role: "Customer",
    image: "/images/testmonial02.jpg",
  },
  {
    name: "Gordo Novak",
    role: "Customer",
    image: "/images/testmonial03.jpg",
  },
  {
    name: "Reid Butt",
    role: "Customer",
    image: "/images/testmonial04.jpg",
  },
];

export default function Testimonial() {
  return (
    <section
      className="relative py-24 bg-center bg-cover"
      style={{
        backgroundImage: "url('/images/testmonialbg.jpg')",
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
            What Our Client Say’s
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
              className="bg-white rounded-xl p-6 text-center shadow-lg"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 mx-auto rounded-full border-4 border-yellow-400"
              />

              <h4 className="font-semibold text-lg mt-4">
                {item.name}
              </h4>
              <span className="text-sm text-yellow-500">
                {item.role}
              </span>

              <p className="text-gray-600 text-sm mt-4">
                There are many variations of words suffered alteration
                injected hidden at middle text.
              </p>

              {/* Stars */}
              <div className="flex justify-center mt-4 text-yellow-400">
                ★★★★★
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
