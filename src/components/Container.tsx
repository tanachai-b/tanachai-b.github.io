import cx from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children?: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",

        "bg-[#101010]",

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

        "text-[#c0c0c0]",
        "text-[15px]",
        "font-bold",
      )}
    >
      {title}
    </div>
  );
}
