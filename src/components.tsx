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
  icon,
  color,
  title,
  subtitle,
  gitHub,
  website,
}: {
  icon: string;
  color: string;
  title: string;
  subtitle: string;
  gitHub: string;
  website: string;
}) {
  return (
    <div className={cx("flex", "flex-row")}>
      <Icon icon={icon} color={color} />

      <TitleSubtitle title={title} subtitle={subtitle} />

      <Link label="GitHub" href={gitHub} />

      <Link label="Website" href={website} />
    </div>
  );
}

function Icon({ icon, color }: { icon: string; color: string }) {
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
        <IconSpan icon={icon} />
      </div>
    </>
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
        /{subtitle}
      </div>
    </div>
  );
}

function Link({ label, href }: { label: string; href: string }) {
  return (
    <div
      className={cx(
        "w-[80px]",

        "flex",
        "flex-row",
        "items-center",
        "justify-center",

        "gap-[2px]",

        "text-[13px]",
        "text-[#606060]",
        "hover:font-bold",
      )}
    >
      <a href={href} target="_blank">
        {label}
      </a>

      <IconSpan icon="open_in_new" />
    </div>
  );
}

function IconSpan({ icon }: { icon: string }) {
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
