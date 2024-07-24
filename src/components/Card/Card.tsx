import cx from "classnames";
import { ReactNode, useState } from "react";
import { Resizable } from "src/common-components";
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
  const [width, setWidth] = useState(0);
  const columns = Math.min(Math.floor((width - (40 + 50) * 2) / 250), 3);

  return (
    <Container onResize={setWidth}>
      <CardHeader title={title} subtitle={subtitle} scroll={scroll} />

      <div
        className={cx("p-[50px]", "pt-[0px]")}
        style={{ columnCount: columns, columnWidth: "250px" }}
      >
        {children}
      </div>
    </Container>
  );
}

function Container({
  onResize,
  children,
}: {
  onResize: (width: number) => void;
  children: ReactNode;
}) {
  const [width, setWidth] = useState(0);
  const isLargeScreen = width >= 400;

  return (
    <Resizable
      className={cx("grow")}
      onResize={({ width }) => {
        setWidth(width);
        onResize(width);
      }}
    >
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
    </Resizable>
  );
}
