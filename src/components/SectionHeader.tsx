type Props = {
  title: string;
  subtitle: string;
};

const SectionHeader = ({ subtitle, title }: Props) => {
  return (
    <div className="flex items-center justify-center flex-col gap-6 text-center">
      <h1 className=" text-[#b12625] text-primary font-bold text-4xl md:text-5xl">
        {title}
      </h1>
      <h2 className="text-primary md:text-lg px-6 md:px-0">{subtitle}</h2>
    </div>
  );
};

export default SectionHeader;
