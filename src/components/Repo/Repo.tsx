import cx from "classnames";
import { ReactNode } from "react";
import { RepoDetails, RepoLink } from "./components";

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
  return (
    <div
      className={cx(
        "grid",
        "grid-cols-[30px_1fr]",

        "gap-x-[10px]",
        "gap-y-[5px]",
      )}
    >
      {icon}

      <RepoDetails title={name} subtitle={`/${repo}`} />

      <div
        className={cx(
          "col-start-2",

          "flex",
          "flex-row",
          "gap-[10px]",
        )}
      >
        <RepoLink label="GitHub" href={`https://github.com/tanachai-b/${repo}`} />

        <RepoLink label="Page" href={page ?? `https://tanachai-b.github.io/${repo}`} />

        <RepoLink label="External" href={external ?? `https://${repo}.tbun.dev`} />
      </div>
    </div>
  );
}
