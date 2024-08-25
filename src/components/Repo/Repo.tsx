import cx from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { Icon } from "src/common-components";

export function Repo({
  icon,
  name,
  repo,
  page,
  external,
}: {
  icon: ReactNode;
  name: ReactNode;
  repo: string;
  page?: string;
  external?: string;
}) {
  const textFragment = encodeURIComponent(repo).replace(/-/g, "%2D");

  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  function onResize() {
    setWidth(window.innerWidth);
  }

  return (
    <a
      className={cx(
        "rounded-[10px]",
        "hover:bg-[#ffffff10]",
        "transition-all",

        "grid",
        "grid-cols-[30px_auto]",
        "items-center",

        "p-[10px]",
        "gap-[15px]",
      )}
      href={`https://github.com/tanachai-b?tab=repositories#:~:text=${textFragment}`}
      target="_blank"
    >
      {icon}

      <div
        className={cx(
          "h-full",

          "grid",
          width > 650 ? "grid-cols-[1fr_auto]" : "grid-flow-row",
          "items-center",

          "gap-x-[20px]",
          "gap-y-[5px]",
        )}
      >
        <div
          className={cx(
            "h-full",

            "grid",
            width > 750 ? "grid-cols-[auto_1fr]" : "grid-flow-row",
            "gap-x-[10px]",
            "items-center",
          )}
        >
          <div className={cx("text-[#a0a0a0]", "text-[14px]")}>{name}</div>

          <a
            className={cx(
              "w-fit",

              "flex",
              "flex-row",
              "items-center",

              "gap-[2px]",

              "text-[#606060]",
              "text-[13px]",
              "italic",

              "hover:text-[#a0a0a0]",
              "transition-all",
            )}
            href={`https://github.com/tanachai-b/${repo}`}
            target="_blank"
          >
            {`/${repo}`}

            <Icon icon="open_in_new" />
          </a>
        </div>

        <div
          className={cx(
            "h-full",

            "flex",
            "flex-row",
            "flex-wrap",

            "gap-x-[20px]",
          )}
        >
          <RepoLink label="GitHub Page" href={page ?? `https://tanachai-b.github.io/${repo}`} />

          <RepoLink label="External Page" href={external ?? `https://${repo}.tbun.dev`} />
        </div>
      </div>
    </a>
  );
}

function RepoLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      className={cx(
        "flex",
        "flex-row",
        "items-center",

        "gap-[2px]",

        "text-[#606060]",
        "text-[13px]",

        "hover:text-[#a0a0a0]",
        "transition-all",
      )}
      href={href}
      target="_blank"
    >
      {label}

      <Icon icon="open_in_new" />
    </a>
  );
}
