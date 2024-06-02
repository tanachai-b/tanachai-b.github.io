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
        "p-[30px]",

        "bg-[#181818]",
        "border-[#303030]",
        "border-[1px]",
        "rounded-[10px]",

        "flex",
        "flex-col",
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

        "text-center",
        "text-[30px]",
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

function Icon({ icon }: { icon: string }) {
  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
      />

      <span
        className={cx("material-symbols-rounded")}
        style={{
          fontSize: "inherit",
          fontWeight: "inherit",
          fontVariationSettings: "'FILL' 1, 'GRAD' 0, 'opsz' 24",
        }}
      >
        {icon}
      </span>
    </>
  );
}
