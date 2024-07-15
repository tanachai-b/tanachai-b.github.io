import cx from "classnames";
import { FlexRow } from "./FlexRow";
import { Icon } from "./Icon";

export function Link({ label, href }: { label: string; href: string }) {
  return (
    <a href={href} target="_blank">
      <FlexRow className={cx("items-center", "gap-[2px]", "hover:font-bold")}>
        {label}
        <Icon icon="open_in_new" />
      </FlexRow>
    </a>
  );
}
