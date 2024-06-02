import cx from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",

        "bg-[#101010]",
        "text-[#c0c0c0]",

        "flex",
        "flex-col",
        "items-center",
        "justify-center",

        "text-[15px]",
      )}
    >
      {children}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "w-[500px]",
        "p-[30px]",

        "bg-[#181818]",
        "border-[#303030]",
        "border-[1px]",
        "rounded-[10px]",

        "flex",
        "flex-col",
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title }: { title: string }) {
  return (
    <div
      className={cx(
        "pb-[20px]",

        "text-center",
        "text-[30px]",
        "text-[#606060]",
      )}
    >
      {title}
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
