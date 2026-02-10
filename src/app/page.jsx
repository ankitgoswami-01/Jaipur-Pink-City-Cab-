import dynamic from "next/dynamic";

// ❌ NOT lazy (important for first load)
import SlidrBox from "@/compontes/SlidrBox";
import AboutIntro from "@/compontes/AboutIntro";

// ✅ Lazy components (below the fold)
const ServiceIntro = dynamic(() => import("@/compontes/ServiceIntro"));
const OurTaxiIntro = dynamic(() => import("@/compontes/OurTaxiIntro"));
const OurAwesomeFeature = dynamic(() => import("@/compontes/OurAwesomeFeature"));
const TaxiRate = dynamic(() => import("@/compontes/TaxiRate"));
const OurExpertDrivers = dynamic(() => import("@/compontes/OurExpertDrivers"));
const WhyChooseUs = dynamic(() => import("@/compontes/WhyChooseUs"));

export default function Home() {
  return (
    <main className="mt-18 contain-content">
      <SlidrBox />
      <AboutIntro />
      <ServiceIntro />
      <OurTaxiIntro />
      <OurAwesomeFeature />
      <TaxiRate />
      <OurExpertDrivers />
      <WhyChooseUs />
    </main>
  );
}
