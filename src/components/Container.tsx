import cx from "classnames";
import { ReactNode } from "react";

export function Container({
  onScroll,
  children,
}: {
  onScroll: (scroll: number) => void;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        "size-full",
        "overflow-auto",

        "bg-[#000000]",

        "flex",
        "flex-col",
      )}
      onScroll={(e) => onScroll((e.target as HTMLDivElement).scrollTop)}
    >
      {children}
    </div>
  );
}
