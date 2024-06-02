import cx from "classnames";
import { HTMLAttributes, Ref } from "react";

export function FlexRow({
  ref,
  className,
  ...rest
}: { ref?: Ref<HTMLDivElement> } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div ref={ref} className={cx("flex", "flex-row", className)} {...rest} />
  );
}
