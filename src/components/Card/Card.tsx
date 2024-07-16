import cx from "classnames";
import { ReactNode, UIEvent, UIEventHandler, useMemo, useState } from "react";
import { useDivRect } from "src/common-hook";
import { CardHeader } from "./CardHeader";

export function Card({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: ReactNode;
  children: ReactNode;
}) {
  const [scroll, setScroll] = useState<number>(0);

  const onScroll = (e: UIEvent) => {
    setScroll((e.target as HTMLDivElement).scrollTop);
  };

  return (
    <Container onScroll={onScroll}>
      <CardHeader title={title} subtitle={subtitle} scroll={scroll} />

      <div className={cx("p-[30px]", "pt-[0px]")}>{children}</div>
    </Container>
  );
}

function Container({ onScroll, children }: { onScroll: UIEventHandler; children: ReactNode }) {
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
