import cx from "classnames";
import { Icon } from "src/common-components";

export function RepoIcon({ icon, color }: { icon: string; color: string }) {
  return (
    <div className={cx("grid", "text-[30px]")} style={{ color }}>
      <Icon icon={icon} />
    </div>
  );
}

export function RepoImageIcon({ src }: { src: string }) {
  return <img className={cx("w-[30px]")} src={src} />;
}
