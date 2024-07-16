import cx from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
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
