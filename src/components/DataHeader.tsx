import cx from "classnames";

export function DataHeader({ title }: { title: string }) {
  return (
    <div
      className={cx(
        "py-[20px]",

        "text-[#606060]",
        "text-[13px]",
        "font-bold",
      )}
    >
      {title}
    </div>
  );
}
