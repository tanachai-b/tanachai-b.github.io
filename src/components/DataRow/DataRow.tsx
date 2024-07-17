import cx from "classnames";
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
  return (
    <div
      className={cx(
        "flex",
        "flex-row",
        "gap-[10px]",

        "mb-[20px]",
      )}
    >
      <RowIcon icon={icon} color={color} />

      <div className={cx("flex", "flex-col", "gap-[5px]")}>
        <RowDetails title={title} subtitle={`/${path}`} />

        <div className={cx("flex", "flex-row", "gap-[10px]")}>
          <RowLink label="GitHub" href={`https://github.com/tanachai-b/${path}`} />

          <RowLink label="Website" href={`https://tanachai-b.github.io/${path}`} />
        </div>
      </div>
    </div>
  );
}
