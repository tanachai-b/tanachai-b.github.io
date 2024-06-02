import cx from "classnames";
import { HTMLAttributes } from "react";

export function FlexCol({
  className,
  ...rest
}: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("flex", "flex-col", className)} {...rest} />;
}
