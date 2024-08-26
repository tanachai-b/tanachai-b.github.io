import cx from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { Link } from "src/common-components";

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
    <Container href={`https://github.com/tanachai-b?tab=repositories#:~:text=${textFragment}`}>
      {icon}

      <Details isHorizontal={width > 650}>
        <LeftSide isHorizontal={width > 750}>
          <div className={cx("text-[#ffffff80]", "text-[14px]")}>{name}</div>

          <Link className={cx("w-fit", "italic")} href={`https://github.com/tanachai-b/${repo}`}>
            /{repo}
          </Link>
        </LeftSide>

        <RightSide>
          <Link href={page ?? `https://tanachai-b.github.io/${repo}`}>GitHub Page</Link>

          <Link href={external ?? `https://${repo}.tbun.dev`}>External Page</Link>
        </RightSide>
      </Details>
    </Container>
  );
}

function Container({ href, children }: { href: string; children: ReactNode }) {
  return (
    <div
      className={cx(
        "rounded-[10px]",
        "hover:bg-[#ffffff10]",
        "transition-all",

        "grid",
        "grid-cols-[30px_auto]",
        "items-center",

        "p-[10px]",
        "gap-[15px]",

        "cursor-pointer",
      )}
      onClick={() => window.open(href, "_blank")}
    >
      {children}
    </div>
  );
}

function Details({ isHorizontal, children }: { isHorizontal: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",

        "grid",
        isHorizontal ? "grid-cols-[1fr_auto]" : "grid-flow-row",
        "items-center",

        "gap-x-[20px]",
        "gap-y-[5px]",
      )}
    >
      {children}
    </div>
  );
}

function LeftSide({ isHorizontal, children }: { isHorizontal: boolean; children: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",

        "grid",
        isHorizontal ? "grid-cols-[auto_1fr]" : "grid-flow-row",
        "items-center",

        "gap-x-[10px]",
      )}
    >
      {children}
    </div>
  );
}

function RightSide({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "h-full",

        "flex",
        "flex-row",
        "flex-wrap",

        "gap-x-[20px]",
      )}
    >
      {children}
    </div>
  );
}
