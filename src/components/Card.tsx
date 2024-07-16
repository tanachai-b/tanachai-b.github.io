import cx from "classnames";
import { ReactNode, UIEvent, UIEventHandler, useMemo, useState } from "react";
import { useDivRect } from "./useDivRect";

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
        "w-full",
        "max-w-[500px]",
        "max-h-full",

        "grid",
        "grid-rows-1",
        "grid-cols-1",

        "overflow-hidden",

        { "p-[10px]": isLargeScreen },
      )}
    >
      <div
        className={cx(
          "bg-[#101010]",

          { "rounded-[10px]": isLargeScreen },

          "flex",
          "flex-col",

          "overflow-auto",
        )}
        onScroll={onScroll}
      >
        {children}
      </div>
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
    <div
      className={cx(
        "sticky",
        "top-[0px]",

        "flex",
        "flex-col",
      )}
      style={{ minHeight: `${maxHeight}px` }}
    >
      <div
        className={cx(
          "bg-[#101010]",

          "grid",
          "place-items-center",
        )}
        style={{ height: `${height}px` }}
      >
        <div className={cx("flex", "flex-col", "items-center")}>
          <div className={cx("text-[#a0a0a0]")} style={{ fontSize: `${fontSize}px` }}>
            {title}
          </div>

          <div className={cx("text-[#606060]", "text-[13px]")}>{subtitle}</div>
        </div>
      </div>
    </div>
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
