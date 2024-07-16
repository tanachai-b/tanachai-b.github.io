import cx from "classnames";
import { useState } from "react";
import { ObserveResize } from "src/common-components";
import { RowDetails, RowIcon, RowLink } from "./components";

export function DataRow({
  icon,
  color,
  title,
  path,
}: {
  icon: string;
  color: string;
  title: string;
  path: string;
}) {
  const [width, setWidth] = useState(0);
  const isVertical = width < 350;

  return (
    <ObserveResize onResize={({ width }) => setWidth(width)}>
      <div
        className={cx(
          "flex",
          "flex-row",
          { "flex-col": isVertical },

          "mb-[10px]",
        )}
      >
        <div className={cx("flex-grow", "flex", "flex-row")}>
          <RowIcon icon={icon} color={color} />

          <RowDetails title={title} subtitle={`/${path}`} />
        </div>

        <div className={cx("flex", "flex-row", { "pl-[30px]": isVertical })}>
          <RowLink label="GitHub" href={`https://github.com/tanachai-b/${path}`} />

          <RowLink label="Website" href={`https://tanachai-b.github.io/${path}`} />
        </div>
      </div>
    </ObserveResize>
  );
}
