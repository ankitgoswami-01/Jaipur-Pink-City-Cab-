"use client";

const testimonials = [
  {
    name: "Heruli Nez",
    role: "Customer",
    image: "/images/testmonial01.jpg",
    review:
      "Amazing experience with Jaipur Pink City Cab in Jaipur. The driver was extremely polite, punctual, and well-mannered, making the entire journey smooth and comfortable. The cab was clean, well-maintained, and perfect for a relaxed ride through the city. From pickup to drop-off, the service was professional and well-organized. Jaipur Pink City Cab truly delivers reliable, safe, and hassle-free travel. I would highly recommend their cab service to anyone looking for a comfortable and trustworthy taxi service in Jaipur.",
  },
  {
    name: "Sylvia Green",
    role: "Customer",
    image: "/images/testmonial02.jpg",
    review:
      "I had a wonderful experience with Jaipur Pink City Cab. The booking process was easy, the cab arrived on time, and the driver was very courteous. The vehicle was clean and comfortable, making the journey stress-free. This is one of the most reliable cab services in Jaipur, and I would definitely use it again.",
  },
  {
    name: "Gordo Novak",
    role: "Customer",
    image: "/images/testmonial03.jpg",
    review:
      "Jaipur Pink City Cab provided excellent service during my trip in Jaipur. The driver was professional, knowledgeable about local routes, and ensured a smooth ride throughout. The cab was well-maintained and comfortable. Overall, a safe, affordable, and dependable taxi service that I highly recommend.",
  },
  {
    name: "Reid Butt",
    role: "Customer",
    image: "/images/testmonial04.jpg",
    review:
      "My experience with Jaipur Pink City Cab was outstanding. The driver was polite and punctual, and the entire journey was comfortable and well-managed. The service felt very professional from start to finish. If you are looking for a trustworthy and hassle-free cab service in Jaipur, Jaipur Pink City Cab is a great choice.",
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
