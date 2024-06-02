import cx from "classnames";
import { HTMLAttributes } from "react";

export function FlexCen({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cx("flex", "items-center", "justify-center", className)}
      {...rest}
    />
  );
}
