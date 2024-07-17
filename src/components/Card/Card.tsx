import cx from "classnames";
import { ReactNode, useState } from "react";
import { ObserveResize } from "src/common-components";
import { CardHeader } from "./CardHeader";

export function Card({
  title,
  subtitle,
  scroll,
  children,
}: {
  title: string;
  subtitle: ReactNode;
  scroll: number;
  children: ReactNode;
}) {
  return (
    <Container>
      <CardHeader title={title} subtitle={subtitle} scroll={scroll} />

      <div
        className={cx(
          "p-[50px]",
          "pt-[0px]",

          "columns-[3_250px]",
        )}
      >
        {children}
      </div>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  const [width, setWidth] = useState(0);
  const isLargeScreen = width >= 400;

  return (
    <div className={cx("grow")}>
      <ObserveResize onResize={({ width }) => setWidth(width)}>
        <div
          className={cx(
            "size-full",

            { "p-[20px]": isLargeScreen },

            "grid",
            isLargeScreen ? "place-items-center" : "place-items-stretch",
          )}
        >
          <div
            className={cx(
              "bg-[#101010]",

              { "rounded-[10px]": isLargeScreen },

              "flex",
              "flex-col",

              "overflow-clip",
            )}
          >
            {children}
          </div>
        </div>
      </ObserveResize>
    </div>
  );
}
