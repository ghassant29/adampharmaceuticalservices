import { PropsWithChildren, useLayoutEffect } from "react";
import DefaultLayout from "./default";

type Props = {
  title?: string;
  onlyHome?: boolean;
};

const Page = ({ children, title, onlyHome }: PropsWithChildren<Props>) => {
  useLayoutEffect(() => {
    document.title = title ? `${title} | Adam Pharmaceutical Services` : "Adam Pharmaceutical Services";
  }, []);

  return <DefaultLayout onlyHome={onlyHome}>{children}</DefaultLayout>;
};

export default Page;
