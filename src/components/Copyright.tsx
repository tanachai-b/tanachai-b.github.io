import cx from "classnames";

export function Copyright() {
  return (
    <div
      className={cx(
        "shrink-0",

        "w-full",
        "h-[100px]",
        "bg-[#080808]",

        "p-[5px]",

        "flex",
        "flex-col",
        "justify-center",
        "items-center",

        "text-[#606060]",
        "text-[12px]",
      )}
    >
      Copyright © 2024 Tanachai Bunlutangtum. All rights reserved.
    </div>
  );
}
