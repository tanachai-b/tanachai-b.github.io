import cx from "classnames";
import { useMemo } from "react";
import { FlexCen, FlexCol, FlexRow, Icon, Link } from "src/common-components";
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
      <FlexRow className={cx("flex-grow")}>
        <RowIcon icon={icon} color={color} />

        <RowDetails title={title} subtitle={`/${path}`} />
      </FlexRow>

      <FlexRow className={cx({ "pl-[30px]": isVertical })}>
        <RowLink label="GitHub" href={`https://github.com/tanachai-b/${path}`} />

        <RowLink label="Website" href={`https://tanachai-b.github.io/${path}`} />
      </FlexRow>
    </div>
  );
}

function RowIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <FlexCen className={cx("p-[5px]", "text-[20px]")} style={{ color }}>
      <Icon icon={icon} />
    </FlexCen>
  );
}

function RowDetails({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <FlexCol className={cx("flex-grow", "p-[5px]")}>
      <div>{title}</div>

      <div className={cx("text-[#606060]", "text-[13px]", "italic")}>{subtitle}</div>
    </FlexCol>
  );
}

function RowLink({ label, href }: { label: string; href: string }) {
  return (
    <FlexCen
      className={cx(
        "w-[80px]",

        "text-[#606060]",
        "text-[13px]",
      )}
    >
      <Link label={label} href={href} />
    </FlexCen>
  );
}
