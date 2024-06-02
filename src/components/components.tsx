import cx from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",
        "p-[10px]",

        "bg-[#101010]",

        "text-[#c0c0c0]",
        "text-[15px]",

        "flex",
        "flex-col",
        "items-center",
        "justify-center",
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

        "font-bold",
      )}
    >
      {title}
    </div>
  );
}
