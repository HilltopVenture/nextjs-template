import React from "react";
import clsx from "@/libs/clsx";
import Spinner from "./module/Spinner";
import Link, { LinkProps } from "next/link";
import { UrlObject } from "url";

function getVariantClasses(variant: string): {
  bgClassName: string;
  spinClass: string;
} {
  let bgClassName = "",
    spinClass = "";

  switch (variant) {
    case "primary":
      bgClassName = "bg-primary hover:opacity-80 text-white";
      spinClass = "ml-3 border-white";
      break;
    case "secondary":
      bgClassName = "bg-secondary hover:opacity-80 text-white";
      spinClass = "ml-3 border-white";
      break;
    case "outline":
      bgClassName =
        "bg-white border-2 border-primary hover:bg-primary text-primary hover:text-white";
      spinClass = "ml-3 border-primary";
      break;
    case "outline-secondary":
      bgClassName =
        "bg-transparent border-2 border-primary hover:bg-primary text-white hover:text-white";
      spinClass = "ml-3 border-primary";
      break;
    case "outline-black":
      bgClassName =
        "bg-transparent border-2 border-black hover:bg-primary text-black hover:text-white hover:border-none";
      spinClass = "ml-3 border-black";
      break;

    default:
      break;
  }

  return {
    bgClassName,
    spinClass,
  };
}

export interface ButtonProps extends Omit<LinkProps, "href"> {
  className?: string;
  containerClassName?: string;
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  useDefaultLoading?: boolean;
  variant?:
    | "primary"
    | "outline-secondary"
    | "outline"
    | "secondary"
    | "outline-black";
  bgClassName?: string;
  spinClass?: string;
  size?: "md" | "sm";
  href?: string | UrlObject;
  target?: React.HTMLAttributeAnchorTarget;
}

function Button({
  className = "",
  containerClassName,
  onClick,
  children,
  loading,
  disabled,
  useDefaultLoading = true,
  variant = "primary",
  bgClassName,
  spinClass,
  href = "",
  size = "md",
  ...linkProps
}: ButtonProps) {
  function handleClick() {
    if (loading || disabled || !!href) return;
    if (typeof onClick === "function") {
      onClick();
    }
  }

  const styles = getVariantClasses(variant);
  bgClassName = bgClassName || styles.bgClassName;
  spinClass = spinClass || styles.spinClass;
  const component = (
    <div
      onClick={handleClick}
      className={clsx(
        {
          "inline-flex justify-center items-center relative overflow-hidden transition duration-300 rounded-5":
            true,
          "h-13 px-7": size === "md",
          "h-11 px-5": size === "sm",
          "cursor-pointer": !loading && !disabled,
          "pointer-events-none": !!disabled || !!loading,
          "rounded-5": !className.match(/\b(rounded-)/),
        },
        [className, bgClassName].join(" ")
      )}
    >
      {children}

      {!!loading && useDefaultLoading && <Spinner className={spinClass} />}

      {(loading || disabled) && (
        <div className="absolute top-0 left-0 w-full h-full bg-white/60 cursor-auto ring-2 ring-white/60"></div>
      )}
    </div>
  );
  return href ? (
    <Link
      href={href}
      {...linkProps}
      className={clsx(
        {
          "hover:no-underline block": true,
        },
        containerClassName
      )}
    >
      {component}
    </Link>
  ) : (
    component
  );
}

export default Button;
