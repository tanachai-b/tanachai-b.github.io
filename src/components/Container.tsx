import cx from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children?: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",

        "bg-[#000000]",

        "grid",
        "place-items-center",
      )}
    >
      {children}
    </div>
  );
}

export function DataHeader({ title }: { title: string }) {
  return (
    <div
      className={cx(
        "pt-[30px]",
        "pb-[20px]",

        "text-[#606060]",
        "text-[13px]",
        "font-bold",
      )}
    >
      {title}
    </div>
  );
}
