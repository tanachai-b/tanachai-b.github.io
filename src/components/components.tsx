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

        "overflow-clip",
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
        "w-full",
        "max-w-[1000px]",

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

export function CardBody({
  isLargeScreen,
  children,
}: {
  isLargeScreen: boolean;
  children: ReactNode;
}) {
  return (
    <div
      className={cx(
        isLargeScreen ? "p-[50px]" : "p-[30px]",
        "pt-[0px]",

        "flex",
        "flex-col",

        "gap-[10px]",
      )}
    >
      {children}
    </div>
  );
}

export function RepoGroupHeader({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "col-span-full",

        "pt-[30px]",
        "pb-[10px]",

        "text-[#ffffffc0]",
        "text-[13px]",
        "font-bold",
      )}
    >
      {children}
    </div>
  );
}
