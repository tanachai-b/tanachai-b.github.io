import cx from "classnames";
import { useMemo } from "react";
import { Icon, Link } from "src/common-components";
import { useDivRect } from "./useDivRect";

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
  const { ref, width } = useDivRect();
  const isVertical = useMemo<boolean>(() => width < 350, [width]);

  return (
    <div
      ref={ref}
      className={cx(
        "flex",
        "flex-row",
        { "flex-col": isVertical },

        "mb-[10px]",
      )}
    >
      <div className={cx("flex-grow", "flex", "flex-row")}>
        <RowIcon icon={icon} color={color} />

        <RowDetails title={title} subtitle={`/${path}`} />
      </div>

      <div className={cx("flex", "flex-row", { "pl-[30px]": isVertical })}>
        <RowLink label="GitHub" href={`https://github.com/tanachai-b/${path}`} />

        <RowLink label="Website" href={`https://tanachai-b.github.io/${path}`} />
      </div>
    </div>
  );
}

function RowIcon({ icon, color }: { icon: string; color: string }) {
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

function RowDetails({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div
      className={cx(
        "flex-grow",

        "flex",
        "flex-col",
        "p-[5px]",
      )}
    >
      <div>{title}</div>

      <div className={cx("text-[#606060]", "text-[13px]", "italic")}>{subtitle}</div>
    </div>
  );
}

function RowLink({ label, href }: { label: string; href: string }) {
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
