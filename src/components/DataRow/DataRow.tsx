import cx from "classnames";
import { RowDetails, RowIcon, RowLink } from "./components";

export function DataRow({
  icon,
  color,
  image,
  title,
  repo,
  page,
  external,
}: (
  | {
      icon: string;
      color: string;
      image?: undefined;
    }
  | {
      icon?: undefined;
      color?: undefined;
      image: string;
    }
) & {
  title: string;
  repo: string;
  page?: string;
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
      {icon != null && <RowIcon icon={icon} color={color} />}

      {image != null && <img src={image} width={30} />}

      <RowDetails title={title} subtitle={`/${repo}`} />

      <div
        className={cx(
          "col-start-2",

          "flex",
          "flex-row",
          "gap-[10px]",
        )}
      >
        <RowLink label="GitHub" href={`https://github.com/tanachai-b/${repo}`} />

        <RowLink label="Page" href={page ?? `https://tanachai-b.github.io/${repo}`} />

        <RowLink label="External" href={external ?? `https://${repo}.tbun.dev`} />
      </div>
    </div>
  );
}
