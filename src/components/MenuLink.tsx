import Link, { LinkProps } from "next/link";
import React from "react";
import clsx from "@/libs/clsx";
interface MenuLinkProps extends LinkProps {
  active?: boolean;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
}

function MenuLink({
  href,
  active = false,
  children,
  className,
  disabled,
  ...rest
}: MenuLinkProps) {
  return (
    <Link
      className={clsx(
        {
          "mx-2.5 transition-all py-2 flex items-center justify-center px-2 border-t-2 border-b-2 border-transparent text-dark hover:underline":
            true,
          "border-b-dark": active,
        },
        className
      )}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
}

export default MenuLink;
