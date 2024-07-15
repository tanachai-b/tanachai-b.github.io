import cx from "classnames";
import { ReactNode } from "react";
import { FlexCen } from "./commons";

export function Container({ children }: { children?: ReactNode }) {
  return (
    <FlexCen
      className={cx(
        "h-full",

        "bg-[#101010]",

        "text-[#c0c0c0]",
        "text-[15px]",

        "flex-col",
      )}
    >
      {children}
    </FlexCen>
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
