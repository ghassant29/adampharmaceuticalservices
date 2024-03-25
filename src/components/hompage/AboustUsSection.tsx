import { FaChevronRight } from "react-icons/fa";

const AboustUsSection = () => {
  return (
    <div
      id="#about"
      className="bg-secondary flex items-center justify-center flex-col md:flex-row py-28 gap-20 md:pl-6 px-12 md:px-0"
    >
      <img
        src="/images/about-us.png"
        alt="About Us"
        className="w-96 rounded-xl md:-rotate-6 border-8"
      />
      <div className="flex flex-col gap-4 max-w-2xl">
        <div className="flex items-center">
          <FaChevronRight className="text-4xl font-bold text-white pt-1 pr-4" />
          <h2 className="text-2xl md:text-4xl font-bold text-white">
            Meet Adam Pharm
          </h2>
        </div>
        <p className="text-white md:text-lg font-light">
          Adam Pharmaceutical S.A.L is a pharmaceutical company based in
          Tripoli, Lebanon, operating since 2005. Initially starting as a drug
          store with a limited customer base, the company has grown
          significantly. Through sustainable performance and a strong
          reputation, Adam Pharmaceutical has established partnerships with
          hospitals, medical institutions, and pharmacies. They have expanded
          their operations to become the sole distributor for numerous imported
          and local pharmaceutical products. Our strategy focuses on maintaining
          growth and exploring new opportunities for expansion.
        </p>
      </div>
    </div>
  );
};

export default AboustUsSection;
