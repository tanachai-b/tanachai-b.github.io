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
        "m-[10px]",
        "w-[500px]",

        "bg-[#181818]",
        "border-[#303030]",
        "border-[1px]",
        "rounded-[10px]",

        "p-[30px]",

        "flex",
        "flex-col",

        "overflow-auto",
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle: ReactNode;
}) {
  return (
    <div className={cx("pb-[20px]", "flex", "flex-col", "items-center")}>
      <div className={cx("text-center", "text-[30px]")}>{title}</div>
      {subtitle}
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
