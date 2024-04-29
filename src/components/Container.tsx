import React from "react";
import clsx from "@/libs/clsx";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  size?: "lg" | "xl";
}

function Container({
  children,
  className = "",
  contentClassName = "",
  size = "lg",
}: ContainerProps) {
  return (
    <div
      className={clsx(
        {
          "w-full flex-1": true,
        },
        className
      )}
    >
      <div
        className={clsx(
          {
            "mx-auto w-full h-full ": true,
            "max-w-[1140px] px-5 xs:px-10 xl:px-0 md:py-20 py-15":
              size === "lg",
            "max-w-[1320px] px-5 xs:px-10 lg:px-15 1440:px-0 md:py-30 py-15":
              size === "xl",
            "flex flex-col": !contentClassName.includes("flex"),
          },
          contentClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}

export default Container;
