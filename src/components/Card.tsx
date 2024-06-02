import cx from "classnames";
import { ReactNode } from "react";
import { FlexCol } from "./commons";

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
    <FlexCol
      className={cx(
        "w-[500px]",
        "max-w-full",

        "bg-[#181818]",
        "border-[#303030]",
        "border-[1px]",
        "rounded-[10px]",

        "overflow-hidden",
      )}
    >
      <CardHeader title={title} subtitle={subtitle} />
      <CardBody>{children}</CardBody>
    </FlexCol>
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
    <FlexCol className={cx("p-[30px]", "items-center")}>
      <div className={cx("text-[30px]")}>{title}</div>
      <div className={cx("text-[13px]", "text-[#606060]")}>{subtitle}</div>
    </FlexCol>
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
