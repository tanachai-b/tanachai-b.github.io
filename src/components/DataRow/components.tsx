import cx from "classnames";
import { Icon, Link } from "src/common-components";

export function RowIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <div
      className={cx(
        "grid",
        "place-content-center",
        "p-[5px]",

        "text-[20px]",
      )}
      style={{ color }}
    >
      <Icon icon={icon} />
    </div>
  );
}

export function RowDetails({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className={cx(
        "flex-grow",

        "flex",
        "flex-col",
        "p-[5px]",
      )}
    >
      <div className={cx("text-[#a0a0a0]", "text-[14px]")}>{title}</div>

      <div className={cx("text-[#606060]", "text-[13px]", "italic")}>{subtitle}</div>
    </div>
  );
}

export function RowLink({ label, href }: { label: string; href: string }) {
  return (
    <div
      className={cx(
        "w-[80px]",

        "grid",
        "place-items-center",

        "text-[#606060]",
        "text-[13px]",
      )}
    >
      <Link label={label} href={href} />
    </div>
  );
}
