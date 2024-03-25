import LogoSVG from "../assets/logo";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-light border-t-2 shadow-md flex items-center justify-center py-6 flex-col w-full">
      <LogoSVG className="h-24 w-fit hidden md:block" />
      <img className="h-28 w-28 md:hidden" src="/images/logo_adam.png" />
      <p className="text-sm text-center text-gray-500">
        &copy; {year} | Adam Pharmaceutical Services | All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
