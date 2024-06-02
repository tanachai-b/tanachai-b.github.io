import cx from "classnames";
import { HTMLAttributes, Ref } from "react";

export function FlexCol({
  ref,
  className,
  ...rest
}: { ref?: Ref<HTMLDivElement> } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div ref={ref} className={cx("flex", "flex-col", className)} {...rest} />
  );
}
