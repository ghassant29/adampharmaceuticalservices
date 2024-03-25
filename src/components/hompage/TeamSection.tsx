import { allTeam } from "../../utils/constants";
import SectionHeader from "../SectionHeader";
import TeamCard from "./TeamCard";

const TeamSection = () => {
  return (
    <div
      id="#services"
      className="bg-light flex items-center justify-center flex-col py-28 gap-16"
    >
      <SectionHeader
        title="Meet Our People"
        subtitle="Meet the Minds Behind Adam Pharm"
      />

      <div className="flex flex-col justify-center md:flex-row items-center flex-wrap gap-12 w-full">
        {allTeam.map((team) => (
          <TeamCard
            key={team.name}
            image={team.image}
            name={team.name}
            role={team.role}
            email="#"
            facebook="#"
            linkedin="#"
            tel="#"
          />
        ))}
      </div>
    </div>
  );
};

export default TeamSection;
