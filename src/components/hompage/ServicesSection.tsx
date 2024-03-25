import { FaCapsules, FaSyringe } from "react-icons/fa";
import { FaPrescriptionBottleMedical } from "react-icons/fa6";
import SectionHeader from "../SectionHeader";
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  return (
    <div
      id="#services"
      className="bg-light flex items-center justify-center flex-col py-28 gap-16"
    >
      <SectionHeader
        title="Our Health Offerings"
        subtitle="Explore Our Diverse Range of Medical Supplies and Supplement Solutions"
      />

      <div className="px-6 flex flex-col md:flex-row gap-6 flex-wrap items-center justify-center">
        <ServiceCard
          icon={FaPrescriptionBottleMedical}
          title="Pharmaceutical Distribution"
          description="Efficient distribution of pharmaceuticals with timely delivery and robust supply chain management to pharmacies, hospitals, and medical institutions."
        />
        <ServiceCard
          icon={FaSyringe}
          title="Medical Supply Distribution"
          description="Swiftly delivering essential medical supplies to healthcare facilities, ensuring seamless access and enhanced patient care through streamlined logistics."
        />
        <ServiceCard
          icon={FaCapsules}
          title="Diverse Supplements/Vitamins"
          description="Sells a diverse range of supplements to meet various health needs, including vitamins, minerals, herbal extracts, and specialty supplements."
        />
      </div>
    </div>
  );
};

export default ServicesSection;
