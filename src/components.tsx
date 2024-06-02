import cx from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",

        "bg-[#101010]",
        "text-[#c0c0c0]",

        "flex",
        "flex-col",

        "items-center",
        "justify-center",

        "text-[15px]",
      )}
    >
      {children}
    </div>
  );
}

export function Card({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "w-[500px]",

        "bg-[#181818]",

        "border-[1px]",
        "border-[#303030]",

        "rounded-[10px]",

        "p-[30px]",
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ title }: { title: string }) {
  return (
    <div
      className={cx(
        "pb-[20px]",

        "text-[30px]",
        "text-center",

        "text-[#606060]",
      )}
    >
      {title}
    </div>
  );
}

export function DataHeader({ title }: { title: string }) {
  return (
    <div
      className={cx(
        "pt-[30px]",
        "pb-[20px]",

        "font-bold",
      )}
    >
      {title}
    </div>
  );
}

export function DataRow({
  title,
  subtitle,
  website,
  gitHub,
}: {
  title: string;
  subtitle: string;
  website: string;
  gitHub: string;
}) {
  return (
    <div className={cx("flex", "flex-row")}>
      <TitleSubtitle title={title} subtitle={subtitle} />

      <Link label="Website" href={website} />

      <Link label="GitHub" href={gitHub} />
    </div>
  );
}

function TitleSubtitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div className={cx("flex-grow", "flex", "flex-col", "p-[5px]")}>
      <div>{title}</div>

      <div className={cx("text-[#606060]", "italic", "text-[13px]")}>
        {subtitle}
      </div>
    </div>
  );
}

function Link({ label, href }: { label: string; href: string }) {
  return (
    <div
      className={cx(
        "w-[70px]",

        "flex",
        "items-center",
        "justify-center",

        "text-[13px]",
        "text-[#606060]",
      )}
    >
      <a className={cx("hover:font-bold")} href={href} target="_blank">
        {label}
      </a>
    </div>
  );
}