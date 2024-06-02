import cx from "classnames";
import { ReactNode, useMemo } from "react";

import { FlexCol } from "./commons";
import { useDivRect } from "./hooks";

export function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: ReactNode;
  children?: ReactNode;
}) {
  return (
    <CardBorder>
      <CardHeader title={title} subtitle={subtitle} />
      <CardBody>{children}</CardBody>
    </CardBorder>
  );
}

function CardBorder({ children }: { children?: ReactNode }) {
  const { ref, width } = useDivRect();
  const isLargeScreen = useMemo<boolean>(() => width >= 499, [width]);

  return (
    <div
      ref={ref}
      className={cx(
        "w-[500px]",
        "max-w-full",

        "overflow-hidden",

        { "p-[10px]": isLargeScreen },
      )}
    >
      <FlexCol
        className={cx(
          "max-h-full",

          "bg-[#181818]",

          {
            "border-[#303030]": isLargeScreen,
            "border-[1px]": isLargeScreen,
            "rounded-[10px]": isLargeScreen,
          },
        )}
      >
        {children}
      </FlexCol>
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
    <FlexCol className={cx("p-[30px]", "items-center")}>
      <div className={cx("text-[30px]")}>{title}</div>
      <div className={cx("text-[13px]", "text-[#606060]")}>{subtitle}</div>
    </FlexCol>
  );
}

function CardBody({ children }: { children?: ReactNode }) {
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
