import cx from "classnames";
import { HTMLAttributes } from "react";

export function FlexRow({ className, ...rest }: HTMLAttributes<HTMLDivElement>) {
  return <div className={cx("flex", "flex-row", className)} {...rest} />;
}
