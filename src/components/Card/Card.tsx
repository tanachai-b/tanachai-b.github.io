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

      <div className={cx("p-[30px]", "pt-[0px]")}>{children}</div>
    </Container>
  );
}

function Container({ children }: { children: ReactNode }) {
  const [width, setWidth] = useState(0);
  const isLargeScreen = width >= 499;

  return (
    <div className={cx("w-full", "max-w-[500px]")}>
      <ObserveResize onResize={({ width }) => setWidth(width)}>
        <div className={cx({ "p-[20px]": isLargeScreen })}>
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
