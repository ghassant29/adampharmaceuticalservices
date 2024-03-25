import { BsTelephoneFill } from "react-icons/bs";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

type Props = {
  name: string;
  role: string;
  image: string;
  linkedin: string;
  email: string;
  facebook: string;
  tel: string;
};

const TeamCard = ({
  email,
  facebook,
  linkedin,
  name,
  role,
  tel,
  image
}: Props) => {
  return (
    <div className="flex flex-col items-center w-3/4 md:w-[300px] justify-center bg-white border rounded-xl py-6 pb-0 overflow-hidden transition-all hover:shadow-xl duration-300">
      <img
        src={image}
        alt={name}
        className="w-48 h-48 object-cover rounded-full"
      />
      <h3 className="text-primary text-xl font-bold mt-4">{name}</h3>
      <p className="text-secondary text-center mt-2 font-semibold">{role}</p>
      <div className="flex items-center justify-center gap-4 mt-4 bg-secondary w-full px-12 py-4 border-t-primary border-t-2">
        <a
          href={linkedin}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:opacity-80 duration-200"
        >
          <FaLinkedin size={24} />
        </a>
        <a
          href={facebook}
          target="_blank"
          rel="noreferrer"
          className="text-white hover:opacity-80 duration-200"
        >
          <FaFacebook size={24} />
        </a>
        <a
          href={`mailto:${email}`}
          className="text-white hover:opacity-80 duration-200"
        >
          <IoIosMail size={30} />
        </a>
        <a
          href={`tel:${tel}`}
          className="text-white hover:opacity-80 duration-200"
        >
          <BsTelephoneFill size={24} />
        </a>
      </div>
    </div>
  );
};

export default TeamCard;
