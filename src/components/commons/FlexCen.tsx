import cx from "classnames";
import { HTMLAttributes, Ref } from "react";

export function FlexCen({
  ref,
  className,
  ...rest
}: { ref?: Ref<HTMLDivElement> } & HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      ref={ref}
      className={cx("flex", "items-center", "justify-center", className)}
      {...rest}
    />
  );
}
