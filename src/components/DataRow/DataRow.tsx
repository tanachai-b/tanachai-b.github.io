import cx from "classnames";
import { RowDetails, RowIcon, RowLink } from "./components";

export function DataRow({
  icon,
  color,
  title,
  path,
  external,
}: {
  icon: string;
  color: string;
  title: string;
  path: string;
  external?: string;
}) {
  return (
    <div
      className={cx(
        "grid",
        "grid-cols-[auto_1fr]",

        "gap-x-[10px]",
        "gap-y-[5px]",

        "mb-[20px]",
      )}
    >
      <RowIcon icon={icon} color={color} />

      <RowDetails title={title} subtitle={`/${path}`} />

      <div
        className={cx(
          "col-start-2",

          "flex",
          "flex-row",
          "gap-[10px]",
        )}
      >
        <RowLink label="GitHub" href={`https://github.com/tanachai-b/${path}`} />

        <RowLink label="Page" href={`https://tanachai-b.github.io/${path}`} />

        <RowLink label="External" href={external != null ? external : `https://${path}.tbun.dev`} />
      </div>
    </div>
  );
}
