import cx from "classnames";
import { useMemo } from "react";
import { useDivRect } from "src/common-hook";
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
  const { ref, width } = useDivRect();
  const isVertical = useMemo<boolean>(() => width < 350, [width]);

  return (
    <div
      ref={ref}
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
  );
}
