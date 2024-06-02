import cx from "classnames";

import { Icon } from "./commons";

export function DataRow({
  icon,
  color,
  title,
  path,
}: {
  icon: string;
  color: string;
  title: string;
  path: string;
}) {
  return (
    <div className={cx("flex", "flex-row")}>
      <RowIcon icon={icon} color={color} />

      <RowDetails title={title} subtitle={`/${path}`} />

      <RowLink label="GitHub" href={`https://github.com/tanachai-b/${path}`} />

      <RowLink label="Website" href={`https://tanachai-b.github.io/${path}`} />
    </div>
  );
}

function RowIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <>
      <div
        className={cx(
          "flex",
          "flex-row",
          "items-center",
          "justify-center",

          "p-[5px]",

          "text-[20px]",
        )}
        style={{ color }}
      >
        <Icon icon={icon} />
      </div>
    </>
  );
}

function RowDetails({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className={cx("flex-grow", "flex", "flex-col", "p-[5px]")}>
      <div>{title}</div>

      <div className={cx("text-[#606060]", "italic", "text-[13px]")}>
        {subtitle}
      </div>
    </div>
  );
}

function RowLink({ label, href }: { label: string; href: string }) {
  return (
    <div
      className={cx(
        "w-[80px]",

        "flex",
        "items-center",
        "justify-center",

        "text-[13px]",
        "text-[#606060]",
        "hover:font-bold",
      )}
    >
      <a
        href={href}
        target="_blank"
        className={cx("flex", "flex-row", "items-center", "gap-[2px]")}
      >
        {label}
        <Icon icon="open_in_new" />
      </a>
    </div>
  );
}
