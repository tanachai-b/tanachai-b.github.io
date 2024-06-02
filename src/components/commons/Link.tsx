import cx from "classnames";

import { Icon } from "./Icon";

export function Link({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      className={cx(
        "flex",
        "flex-row",
        "items-center",

        "gap-[2px]",

        "hover:font-bold",
      )}
    >
      {label}
      <Icon icon="open_in_new" />
    </a>
  );
}
