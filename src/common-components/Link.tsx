import cx from "classnames";
import { ReactNode } from "react";
import { Icon } from "./Icon";

export function Link({
  className,
  href,
  children,
}: {
  className?: string;
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      className={cx(
        "flex",
        "flex-row",
        "items-center",

        "gap-[2px]",

        "text-[#ffffff40]",
        "text-[13px]",

        "hover:text-[#ffffff80]",
        "transition-all",

        className,
      )}
      href={href}
      target="_blank"
      onClick={(e) => e.stopPropagation()}
    >
      {children}
      <Icon icon="open_in_new" />
    </a>
  );
}
