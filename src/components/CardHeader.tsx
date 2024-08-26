import cx from "classnames";
import { ReactNode, useEffect, useState } from "react";
import { lerp, unlerp } from "src/common-functions";
import { useWindowScroll } from "src/common-hooks";

export function CardHeader({
  title,
  subtitle,
  links,
}: {
  title: ReactNode;
  subtitle: ReactNode;
  links: ReactNode;
}) {
  const [factor, setFactor] = useState(1);

  return (
    <Container onResize={setFactor}>
      <div
        className={cx("flex", "flex-col", "items-center")}
        style={{ gap: `${lerp(0, 10, factor)}px` }}
      >
        <div
          className={cx("text-[#ffffffc0]", "font-bold", "leading-none")}
          style={{ fontSize: `${lerp(20, 50, factor)}px` }}
        >
          {title}
        </div>

        <div
          className={cx("text-[#ffffff80]", "leading-none")}
          style={{ fontSize: `${lerp(0, 20, factor)}px`, opacity: lerp(0, 1, factor) }}
        >
          {subtitle}
        </div>
      </div>

      <Links>{links}</Links>
    </Container>
  );
}

function Container({
  onResize,
  children,
}: {
  onResize: (factor: number) => void;
  children: ReactNode;
}) {
  const maxHeight = 300;
  const minHeight = 80;

  const { scrollY } = useWindowScroll();

  const [height, setHeight] = useState(maxHeight);

  useEffect(() => {
    const height = Math.max(maxHeight - scrollY, minHeight);
    const factor = unlerp(minHeight, maxHeight, height);
    setHeight(height);
    onResize(factor);
  }, [scrollY]);

  return (
    <div
      className={cx("sticky", "top-[0px]", "invisible", "z-[1]")}
      style={{ height: `${maxHeight}px` }}
    >
      <div
        className={cx(
          "visible",

          "bg-[#10101080]",
          "backdrop-blur-[10px]",
          "shadow-[0_10px_20px_0_#101010]",

          "grid",
          "place-content-center",
          "justify-items-center",

          "gap-[10px]",

          "whitespace-pre",
        )}
        style={{ height: `${height}px` }}
      >
        {children}
      </div>
    </div>
  );
}

function Links({ children }: { children: ReactNode }) {
  return (
    <div
      className={cx(
        "flex",
        "flex-row",

        "gap-[20px]",
      )}
    >
      {children}
    </div>
  );
}
