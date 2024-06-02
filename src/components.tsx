import classnames from "classnames";
import { ReactNode } from "react";

export function Container({ children }: { children: ReactNode }) {
  return (
    <div
      className={classnames(
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
      className={classnames(
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

export function CardHeader({ label }: { label: string }) {
  return (
    <div
      className={classnames(
        "pb-[20px]",

        "text-[30px]",
        "text-center",

        "text-[#808080]",
      )}
    >
      {label}
    </div>
  );
}

export function DataHeader({ label }: { label: string }) {
  return (
    <div
      className={classnames(
        "pt-[30px]",
        "pb-[20px]",

        "font-bold",
      )}
    >
      {label}
    </div>
  );
}

export function DataRow({
  label,
  subtitle,
  website,
  gitHub,
}: {
  label: string;
  subtitle: string;
  website: string;
  gitHub: string;
}) {
  return (
    <div className={classnames("flex", "flex-row")}>
      <div className={classnames("flex-grow", "flex", "flex-col", "p-[5px]")}>
        <div>{label}</div>
        <div className={classnames("text-[#606060]", "italic", "text-[13px]")}>
          {subtitle}
        </div>
      </div>

      <Link label="Website" href={website} />

      <Link label="GitHub" href={gitHub} />
    </div>
  );
}

function Link({ label, href }: { label: string; href: string }) {
  return (
    <div
      className={classnames(
        "w-[70px]",

        "flex",
        "items-center",
        "justify-center",

        "text-[13px]",
        "text-[#808080]",
      )}
    >
      <a className={classnames("hover:font-bold")} href={href} target="_blank">
        {label}
      </a>
    </div>
  );
}
