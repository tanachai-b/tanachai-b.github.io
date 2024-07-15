import cx from "classnames";
import { ReactNode, UIEvent, UIEventHandler, useMemo, useState } from "react";

import { FlexCen, FlexCol } from "./commons";
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
  const [scroll, setScroll] = useState<number>(0);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    setScroll((e.target as HTMLDivElement).scrollTop);
  };

  return (
    <CardBorder onScroll={onScroll}>
      <CardHeader title={title} subtitle={subtitle} scroll={scroll} />
      <CardBody>{children}</CardBody>
    </CardBorder>
  );
}

function CardBorder({
  onScroll,
  children,
}: {
  onScroll?: UIEventHandler<HTMLDivElement>;
  children?: ReactNode;
}) {
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

          "overflow-auto",
        )}
        onScroll={onScroll}
      >
        {children}
      </FlexCol>
    </div>
  );
}

function CardHeader({
  title,
  subtitle,
  scroll,
}: {
  title: string;
  subtitle: ReactNode;
  scroll: number;
}) {
  const maxHeight = 150;
  const minHeight = 80;
  const height = Math.max(maxHeight - scroll, minHeight);

  const factor = unlerp(minHeight, maxHeight, height);

  const fontSize = lerp(20, 30, factor);

  return (
    <FlexCol className={cx("sticky", "top-[0px]")} style={{ minHeight: `${maxHeight}px` }}>
      <FlexCen className={cx("bg-[#181818]")} style={{ height: `${height}px` }}>
        <FlexCol className={cx("items-center")}>
          <div style={{ fontSize: `${fontSize}px` }}>{title}</div>
          <div className={cx("text-[13px]", "text-[#606060]")}>{subtitle}</div>
        </FlexCol>
      </FlexCen>
    </FlexCol>
  );
}

function lerp(start: number, end: number, factor: number) {
  return (end - start) * factor + start;
}

function unlerp(start: number, end: number, value: number) {
  return (value - start) / (end - start);
}

function CardBody({ children }: { children?: ReactNode }) {
  return <div className={cx("p-[30px]", "pt-[0px]")}>{children}</div>;
}
