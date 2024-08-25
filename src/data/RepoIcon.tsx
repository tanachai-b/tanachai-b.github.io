import cx from "classnames";
import { Icon } from "src/common-components";

export function RepoIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <div
      className={cx(
        "place-self-center",

        "grid",
        "text-[30px]",
      )}
      style={{ color }}
    >
      <Icon icon={icon} />
    </div>
  );
}

export function RepoImageIcon({ src }: { src: string }) {
  return <img src={src} width={30} />;
}
