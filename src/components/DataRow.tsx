import cx from "classnames";
import { useEffect, useRef, useState } from "react";

import { Icon, Link } from "./commons";

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
  const ref = useRef<HTMLDivElement>(null);

  const [isVertical, setIsVertical] = useState<boolean>(false);

  useEffect(() => {
    if (!ref.current) return;

    const resizeObserver = new ResizeObserver(() => {
      if (!ref.current) return;
      const { width } = ref.current.getBoundingClientRect() ?? {};

      setIsVertical(width < 350);
    });
    resizeObserver.observe(ref.current);

    return () => resizeObserver.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cx(
        "flex",
        "flex-row",

        "mb-[10px]",

        { "flex-col": isVertical },
      )}
    >
      <div
        className={cx(
          "flex-grow",

          "flex",
          "flex-row",
        )}
      >
        <RowIcon icon={icon} color={color} />

        <RowDetails title={title} subtitle={`/${path}`} />
      </div>

      <div
        className={cx(
          "flex",
          "flex-row",

          { "pl-[30px]": isVertical },
        )}
      >
        <RowLink
          label="GitHub"
          href={`https://github.com/tanachai-b/${path}`}
        />

        <RowLink
          label="Website"
          href={`https://tanachai-b.github.io/${path}`}
        />
      </div>
    </div>
  );
}

function RowIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <>
      <div
        className={cx(
          "flex",
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
    <div
      className={cx(
        "flex-grow",

        "flex",
        "flex-col",

        "p-[5px]",
      )}
    >
      <div>{title}</div>

      <div className={cx("text-[#606060]", "text-[13px]", "italic")}>
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

        "text-[#606060]",
        "text-[13px]",
      )}
    >
      <Link label={label} href={href} />
    </div>
  );
}
