import type { ReactNode } from "react";
import styles from "./Page.module.css";
import clsx from "clsx";

interface PageProps {
  children: ReactNode;
  className?: string;
}

const Page = ({ children, className }: PageProps) => {
  return <div className={clsx(styles.page, className)}>{children}</div>;
};

export default Page;
