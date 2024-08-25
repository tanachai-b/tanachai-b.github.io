import cx from "classnames";
import { ReactNode } from "react";
import { Icon } from "./Icon";

export function Link({ label, href }: { label: ReactNode; href: string }) {
  return (
    <a
      className={cx(
        "flex",
        "flex-row",

        "items-center",
        "gap-[2px]",

        "hover:text-[#ffffff80]",
        "transition-all",
      )}
      href={href}
      target="_blank"
    >
      {label}

      <Icon icon="open_in_new" />
    </a>
  );
}
