import cx from "classnames";
import { ReactNode } from "react";

export function CardHeader({
  title,
  subtitle,
  scroll,
}: {
  title: string;
  subtitle: ReactNode;
  scroll: number;
}) {
  const maxHeight = 150;
  const minHeight = 80;
  const height = Math.max(maxHeight - scroll, minHeight);

  const factor = unlerp(minHeight, maxHeight, height);

  const fontSize = lerp(20, 30, factor);

  return (
    <div
      className={cx(
        "sticky",
        "top-[0px]",

        "flex",
        "flex-col",
      )}
      style={{ minHeight: `${maxHeight}px` }}
    >
      <div
        className={cx(
          "bg-[#101010]",

          "grid",
          "place-content-center",
          "justify-items-center",
        )}
        style={{ height: `${height}px` }}
      >
        <div className={cx("text-[#a0a0a0]")} style={{ fontSize: `${fontSize}px` }}>
          {title}
        </div>

        <div className={cx("text-[#606060]", "text-[13px]")}>{subtitle}</div>
      </div>
    </div>
  );
}

function lerp(start: number, end: number, factor: number) {
  return (end - start) * factor + start;
}

function unlerp(start: number, end: number, value: number) {
  return (value - start) / (end - start);
}
