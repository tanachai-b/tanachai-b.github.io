import cx from "classnames";
import { ReactNode, UIEvent, UIEventHandler, useState } from "react";
import { ObserveResize } from "src/common-components";
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
  const [width, setWidth] = useState(0);
  const isLargeScreen = width >= 499;

  return (
    <div
      className={cx(
        "w-full",
        "max-w-[500px]",
        "h-fit",
        "max-h-full",

        "grid",
        "grid-rows-1",

        "overflow-hidden",
      )}
    >
      <ObserveResize onResize={({ width }) => setWidth(width)}>
        <div
          className={cx(
            "size-full",

            { "p-[10px]": isLargeScreen },
          )}
        >
          <div
            className={cx(
              "size-full",

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
      </ObserveResize>
    </div>
  );
}
