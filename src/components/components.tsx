import cx from "classnames";
import { ReactNode } from "react";
import { Resizable } from "src/common-components";

export function Container({
  children,
  onResize,
}: {
  children: ReactNode;
  onResize: (width: number) => void;
}) {
  return (
    <Resizable className={cx("size-full")} onResize={({ width }) => onResize(width)}>
      <div
        className={cx(
          "size-full",

          "flex",
          "flex-col",
        )}
      >
        {children}
      </div>
    </Resizable>
  );
}

export function Body({ isLargeScreen, children }: { isLargeScreen: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex-auto",

        "grid",
        isLargeScreen ? ["p-[20px]", "place-items-center"] : "place-items-stretch",
      )}
    >
      {children}
    </div>
  );
}

export function Card({ isLargeScreen, children }: { isLargeScreen: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "bg-[#101010]",
        isLargeScreen ? "rounded-[10px]" : "",

        "flex",
        "flex-col",

        "overflow-clip",
      )}
    >
      {children}
    </div>
  );
}

export function CardBody({ columns, children }: { columns: number; children: ReactNode }) {
  return (
    <div
      className={cx("p-[50px]", "pt-[0px]")}
      style={{ columnCount: columns, columnWidth: "250px" }}
    >
      {children}
    </div>
  );
}

export function RepoGroupHeader({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "py-[20px]",

        "text-[#606060]",
        "text-[13px]",
        "font-bold",
      )}
    >
      {children}
    </div>
  );
}
