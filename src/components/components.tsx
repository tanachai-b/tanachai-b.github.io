import cx from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",
        "p-[10px]",

        "bg-[#101010]",

        "text-[#c0c0c0]",
        "text-[15px]",

        "flex",
        "flex-col",
        "items-center",
        "justify-center",
      )}
    >
      {children}
    </div>
  );
}

export function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "w-[500px]",
        "max-w-full",

        "bg-[#181818]",
        "border-[#303030]",
        "border-[1px]",
        "rounded-[10px]",

        "flex",
        "flex-col",

        "overflow-hidden",
      )}
    >
      <CardHeader title={title} subtitle={subtitle} />
      <CardBody>{children}</CardBody>
    </div>
  );
}

function CardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) {
  return (
    <div
      className={cx(
        "p-[30px]",

        "flex",
        "flex-col",
        "items-center",
      )}
    >
      <div className={cx("text-[30px]")}>{title}</div>
      <div className={cx("text-[13px]", "text-[#606060]")}>{subtitle}</div>
    </div>
  );
}

function CardBody({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "p-[30px]",
        "pt-[0px]",

        "overflow-auto",
      )}
    >
      {children}
    </div>
  );
}

export function DataHeader({ title }: { title: string }) {
  return (
    <div
      className={cx(
        "pt-[30px]",
        "pb-[20px]",

        "font-bold",
      )}
    >
      {title}
    </div>
  );
}
