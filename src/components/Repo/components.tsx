import cx from "classnames";
import { ReactNode } from "react";
import { Link } from "src/common-components";

export function RepoDetails({ title, subtitle }: { title: ReactNode; subtitle: ReactNode }) {
  return (
    <div className={cx("flex-grow", "flex", "flex-col")}>
      <div className={cx("text-[#a0a0a0]", "text-[14px]")}>{title}</div>

      <div className={cx("text-[#606060]", "text-[13px]", "italic")}>{subtitle}</div>
    </div>
  );
}

export function RepoLink({ label, href }: { label: string; href: string }) {
  return (
    <div className={cx("text-[#606060]", "text-[13px]")}>
      <Link label={label} href={href} />
    </div>
  );
}
