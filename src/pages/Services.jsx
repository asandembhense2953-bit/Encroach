import ServicesHero from "./services/ServicesHero.jsx";
import ServiceCards from "./services/ServiceCards.jsx";
import HowWeWork from "./services/HowWeWork.jsx";
import ServicesCta from "./services/ServicesCta.jsx";

export default function Services() {
  return (
    <div className="svc">
      <div className="svc-top">
        <ServicesHero />
        <ServiceCards />
      </div>
      <HowWeWork />
      <ServicesCta />
    </div>
  );
}