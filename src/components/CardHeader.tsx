import cx from "classnames";
import { ReactNode } from "react";
import { useWindowScroll } from "src/common-hooks";

export function CardHeader({ title, subtitle }: { title: ReactNode; subtitle: ReactNode }) {
  const { scroll } = useWindowScroll();

  const maxHeight = 150;
  const minHeight = 100;
  const height = Math.max(maxHeight - scroll, minHeight);

  const factor = unlerp(minHeight, maxHeight, height);

  const fontSize = lerp(20, 30, factor);

  return (
    <div className={cx("sticky", "top-[0px]", "invisible")} style={{ height: `${maxHeight}px` }}>
      <div
        className={cx(
          "visible",

          "bg-[#10101080]",
          "backdrop-blur-[10px]",
          "shadow-[0_10px_20px_0_#101010]",

          "grid",
          "place-content-center",
          "justify-items-center",

          "gap-[10px]",
        )}
        style={{ height: `${height}px` }}
      >
        <div
          className={cx(
            "flex",
            "flex-col",
            "items-center",

            "text-[#ffffff80]",
          )}
          style={{ fontSize: `${fontSize}px` }}
        >
          {title}
        </div>

        <div
          className={cx(
            "flex",
            "flex-row",

            "gap-[20px]",

            "text-[#ffffff40]",
            "text-[13px]",
          )}
        >
          {subtitle}
        </div>
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
