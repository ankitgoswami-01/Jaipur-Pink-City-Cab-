"use client";
import Image from "next/image";
import SpotlightButton from "./SpotlightButton";

/* slug generator */
const slugify = (text) =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");

const services = [
  {
    title: "Jaipur to Delhi One Way Taxi Service",
    desc: "There are many variations of Jaipur Pink City Cab services available, but our service stands out for its comfort, reliability, and professional drivers.",
    img: "/images/jaipur-pink-city-cab-dzire-taxi-service.png.webp",
     imgAlt: "Jaipur to Delhi One Way Taxi Service by Jaipur Pink City Cab",
    iconImg: "/images/taxi-booking-1.svg",
     iconAlt: "Jaipur to Delhi One Way Taxi Booking Icon",
  },
  {
    title: "Taxi Service in Jaipur",
    desc: "Jaipur Pink City Cab provides a trusted and affordable Taxi Service in Jaipur for travelers looking for comfort, safety, and reliable transportation. ",
    img: "/images/jaipur-pink-city-cab-innova.png.webp",
    imgAlt: "Taxi Service in Jaipur by Jaipur Pink City Cab with Innova Car",
    iconImg: "/images/taxi-booking-2.svg",
    iconAlt: "Taxi Booking Service Icon",
  
  },
  {
    title: "Cab Service in Jaipur",
    desc: "Our Cab Service in Jaipur is perfect for local travel, sightseeing tours, airport and railway station transfers, corporate travel, and outstation trips.",
    img: "/images/cab-service-in-jaipur.png.webp",
    imgAlt: "Cab Service in Jaipur by Jaipur Pink City Cab for local and outstation travel",
    iconImg: "/images/taxi-booking-3.svg",
    iconAlt: "Cab Booking Service Icon",
  },
  {
    title: "Car Rental in Jaipur",
    desc: "Jaipur Pink City Cab provides a reliable and affordable Car Rental in Jaipur for travelers seeking comfort, flexibility, and convenience. ",
    img: "/images/taxi-service-in-jaipur-toyota-innova-optimized.webp",
    imgAlt: "Car Rental in Jaipur by Jaipur Pink City Cab with Innova for comfortable travel",
    iconImg: "/images/taxi-booking-4.svg",
    iconAlt: "Car Rental Booking Icon",
  },
  {
    title: "Jaipur To Khatu Shyam Ji Taxi Service",
    desc: "Our Jaipur to Khatu Shyam Ji Taxi Service is ideal for one-day trips, religious visits, family travel, and group journeys.",
    img: "/images/jaipur-pink-city-cab-tempo-traveller-taxi-optimized.webp",
      imgAlt: "Jaipur to Khatu Shyam Ji Taxi Service by Jaipur Pink City Cab with Tempo Traveller",
    iconImg: "/images/taxi-booking-5.svg",
     iconAlt: "Khatu Shyam Ji Taxi Booking Icon",
  },
  {
    title: "Jaipur To Jodhpur Taxi Service",
    desc: "Jaipur Pink City Cab provides a safe, comfortable, and affordable Jaipur To Jodhpur Taxi Service for travelers who want a smooth long-distance journey. ",
    img: "/images/hyundai-venue-taxi-jaipur-pink-city-cab.png.webp",
    iconImg: "/images/taxi-booking-6.svg",
  },
   {
    title: "Jaipur To Udaipur And Mount Abu Taxi Service",
    desc: "Our Jaipur To Udaipur And Mount Abu Taxi Service is ideal for tourists, family vacations, honeymoon trips, and corporate travel.",
    img: "/images/tempo-traveller-taxi-service-jaipur-optimized.webp",
     imgAlt: "Jaipur to Jodhpur Taxi Service by Jaipur Pink City Cab with Hyundai Venue",
    iconImg: "/images/taxi-booking-6.svg",
      iconAlt: "Jaipur to Jodhpur Taxi Booking Icon",
  },

   {
    title: "Jaipur To Jaisalmer Taxi Service",
    desc: "Jaipur Pink City Cab offers a safe, comfortable, and reliable Jaipur To Jaisalmer Taxi Service for travelers planning a memorable journey to  Golden City.",
    img: "/images/jaipur-ertiga-taxi.png.webp",
    imgAlt: "Jaipur to Jaisalmer Taxi Service by Jaipur Pink City Cab with Ertiga",
    iconImg: "/images/taxi-booking-6.svg",
     iconAlt: "Jaipur to Jaisalmer Taxi Booking Icon",
  },
    {
    title: "Jaipur To Sawai Madhopur Taxi Service",
    desc: "Our Jaipur To Sawai Madhopur Taxi Service is ideal for tourists, wildlife enthusiasts, family trips, and business travel.",
    img: "/images/tourImg-optimized.webp",
     imgAlt: "Jaipur to Sawai Madhopur Taxi Service by Jaipur Pink City Cab for Ranthambore travel",
    iconImg: "/images/taxi-booking-6.svg",
     iconAlt: "Jaipur to Sawai Madhopur Taxi Booking Icon",
  },
    {
    title: "Tempo Traveller Service in Jaipur",
    desc: "Jaipur Pink City Cab offers a reliable and comfortable Tempo Traveller Service in Jaipur for group travel, family tours,  and wedding transportation.",
    img: "/images/tempo-traveller-taxi-service-jaipur-optimized.webp",
     imgAlt: "Tempo Traveller Service in Jaipur by Jaipur Pink City Cab for group and wedding travel",
    iconImg: "/images/taxi-booking-6.svg",
    iconAlt: "Tempo Traveller Booking Service Icon",
  },
    {
    title: "Jaipur To Agra One Way Cab Service",
    desc: "Our Jaipur To Agra One Way Cab Service is ideal for tourists, families, business travelers, and same-day travel plans.",
    img: "/images/tourImg-optimized.webp",
      imgAlt: "Jaipur to Agra One Way Cab Service by Jaipur Pink City Cab for Taj Mahal travel",
    iconImg: "/images/taxi-booking-6.svg",
      iconAlt: "Jaipur to Agra One Way Cab Booking Icon",
  },
    {
    title: "Golden Triangle Tours Package",
    desc: "Our Golden Triangle Tours Package is ideal for tourists, families, honeymoon couples, and international visitors.",
    img: "/images/tempo-traveller-taxi-service-jaipur-optimized.webp",
     imgAlt: "Golden Triangle Tours Package covering Delhi Jaipur Agra by Jaipur Pink City Cab",
    iconImg: "/images/taxi-booking-6.svg",
      iconAlt: "Golden Triangle Tour Booking Icon",
  },
     {
    title: "Jaipur to Ayodhya Taxi Service",
    desc: "Jaipur Pink City Cab offers a safe, comfortable, reliable Jaipur to Ayodhya Taxi Service for pilgrims and travelers seeking a peaceful long-distance journey.",
    img: "/images/jaipur-cab-booking-dzire.png.webp",
    imgAlt: "Jaipur to Ayodhya Taxi Service by Jaipur Pink City Cab for Ram Mandir pilgrimage",
    iconImg: "/images/taxi-booking-6.svg",
      iconAlt: "Jaipur to Ayodhya Taxi Booking Icon",
  },
     {
    title: "Jaipur Airport Taxi Service",
    desc: "Jaipur Pink City Cab offers a reliable and timely Jaipur Airport Taxi Service for travelers who need stress-free airport transfers.",
    img: "/images/tourImg-optimized.webp",
     imgAlt: "Jaipur Airport Taxi Service by Jaipur Pink City Cab for pickup and drop",
    iconImg: "/images/taxi-booking-6.svg",
     iconAlt: "Jaipur Airport Taxi Booking Icon",
  },
];

const ServiceIntro = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-400 tracking-widest font-semibold mb-2">
            SERVICES
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Our Best Services For You
          </h2>
          <div className="heading-divider"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 cursor-pointer">
          {services.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              {/* Image */}
              {/* <div className="relative overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

         
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

              
                <div className="absolute bottom-2 right-6 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
                  <Image src={item.iconImg} alt="icon" width={30} />
                </div>
              </div> */}
              <div className="relative h-52 w-full overflow-hidden">
  {/* Main Image */}
  <Image
    src={item.img}
    alt={item.imgAlt || item.title}
    fill
    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
  />

  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>

  {/* Icon */}
  <div className="absolute bottom-2 right-6 w-14 h-14 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110">
    <Image
      src={item.iconImg}
      alt={item.iconAlt || "Service icon"}
      width={30}
      height={30}
    />
  </div>
</div>


              {/* Content */}
              <div className="p-6 pt-10">
                <h3 className="text-lg font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  {item.desc}
                </p>

                <SpotlightButton
                  text="READ MORE →"
                  ariaLabel={`Read more about ${item.title}`}
                  bgColor="bg-[#EFA701]"
                  hoverBgColor="hover:bg-black"
                  textColor="text-black"
                  hoverTextColor="hover:text-white"
                  href={`/service/${slugify(item.title)}`}
                />
              </div>
            </div>
          ))}
        </div>

      </div>  
    </section>
  );
};

export default ServiceIntro;
