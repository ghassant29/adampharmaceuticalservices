import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  title: string;
  description: string;
};

const ServiceCard = ({ icon: Icon, description, title }: Props) => {
  return (
    <div className="select-none group bg-white rounded-lg flex flex-col items-center justify-center gap-5 px-6 py-12 border max-w-[400px] hover:bg-secondary transition-all duration-300">
      <Icon
        size={40}
        className="text-secondary group-hover:text-white transition-all duration-300"
      />
      <h3 className="text-2xl font-semibold text-primary group-hover:text-white transition-all duration-300">
        {title}
      </h3>
      <p className="text-center text-[#333] group-hover:text-white transition-all duration-300">
        {description}
      </p>
    </div>
  );
};

export default ServiceCard;
