import { CiLocationOn, CiMail, CiPhone } from "react-icons/ci";

const ContactUsSection = () => {
  return (
    <div
      id="#services"
      className="bg-white flex items-center justify-center flex-col py-28 gap-16"
    >
      <div className="flex items-start justify-center md:justify-start flex-col gap-6 text-center md:pr-16 ">
        <h1 className="text-primary font-bold text-4xl md:text-5xl md:w-fit w-full">
          Let’s Get In Touch
        </h1>
        <h2 className="text-primary md:text-lg px-6 md:px-0">
          Reach out to us for inquiries, partnerships, or any assistance you
          need. We're here to help!
        </h2>
      </div>

      <div className="flex flex-col-reverse md:flex-row md:h-[500px] w-full md:px-36 px-6">
        <div className="bg-primary w-full h-full rounded-b-2xl md:rounded-l-2xl md:rounded-br-none overflow-hidden flex flex-col py-8">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 md:gap-6 md:pl-5">
            <div className="flex flex-col justify-center items-center gap-6 flex-1 px-4">
              <div className="flex flex-col gap-3 items-center">
                <CiLocationOn
                  className="text-white text-4xl border-4 rounded-full p-4"
                  size={100}
                />
                <h3 className="text-white text-2xl font-semibold">Location</h3>
              </div>
              <p className="text-white text-sm font-light text-center max-w-xl">
                Boulevard Fouad chehab Tom bldg, Ist Floor Tripoli, Lebanon
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-6 flex-1 px-4">
              <div className="flex flex-col gap-3 items-center justify-center">
                <CiPhone
                  className="text-white text-4xl border-4 rounded-full p-4"
                  size={100}
                />
                <h3 className="text-white text-2xl font-semibold">Phone</h3>
              </div>
              <ul className="text-white text-sm font-light list-none">
                <li>Tel: +961 6 629 000</li>
                <li>Tel: +961 6 628 000</li>
                <li>Fax: +961 6 427 527</li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 flex-1 px-4 mt-12 md:mt-0">
            <div className="flex flex-col gap-3 items-center justify-center">
              <CiMail
                className="text-white text-4xl border-4 rounded-full p-4"
                size={100}
              />
              <h3 className="text-white text-2xl font-semibold">Email</h3>
            </div>
            <ul className="text-white text-sm font-light list-none md:mb-10 md:ml-4">
              <li>
                Email:{" "}
                <a
                  href="mailto:adampharmco@gmail.com"
                  className="text-white hover:underline"
                >
                  adampharmco@gmail.com
                </a>
              </li>
              <li>
                Info:{" "}
                <a
                  href="mailto:info@adampharmlb.com"
                  className="text-white hover:underline"
                >
                  info@adampharmlb.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <iframe
          className="w-full h-[400px] md:h-full rounded-t-2xl md:rounded-r-2xl md:rounded-tl-none overflow-hidden"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=%D8%A2%D8%AF%D9%85%20%D9%81%D8%B1%D9%85%D8%B3%D8%AA%D9%83%D9%84%20%D8%B3%D8%B1%D9%81%D8%B3%D8%B2+(Adam%20Pharmaceuticals%20Services)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        />
      </div>
    </div>
  );
};

export default ContactUsSection;
