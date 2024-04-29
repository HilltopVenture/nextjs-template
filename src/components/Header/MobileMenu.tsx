import { useEffect, useState } from "react";

import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import clsx from "@/libs/clsx";
import MenuIcon from "@/svgIcons/MenuIcon";
import MenuLink from "@/components/MenuLink";
import Button from "../Button";

export default function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {
  const routes = [
    {
      path: "/about-us",
      label: `Company`,
    },
    {
      path: "/our-services",
      label: `Services`,
    },
    {
      path: "/our-products",
      label: `Products`,
    },
    {
      path: "/our-projects",
      label: `Projects`,
    },
    {
      path: "/our-career",
      label: `Career`,
    },
  ];

  const router = useRouter();
  const pathname = router.asPath;

  const [hide, setHide] = useState(true);
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && hide) {
      setHide(false);
    }
  }, [isOpen]);

  return (
    <div
      className={clsx({
        "flex-col bg-primary fixed top-0 left-0 w-screen h-screen flex z-[100] animate-duration-[0.4s]":
          true,
        "animate-slideInDown": isOpen,
        "animate-slideOutUp": !isOpen,
        hidden: hide,
      })}
    >
      <div className="flex flex-col  w-full h-full px-5 sm:px-11 pb-30">
        <div className="w-full h-25 flex items-center justify-between">
          <Link href="/" className="mr-5">
            <div className="relative w-41 h-8.75">
              <Image
                src="/img/logo.svg"
                alt=""
                sizes="(max-width: 600px) 100vw, 600px"
                quality={100}
                fill
                priority
              />
            </div>
          </Link>
          <div
            className={clsx({
              "h-11 w-11 bg-white flex justify-center items-center xl:hidden":
                true,
            })}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon />
          </div>
        </div>
        <div className="flex flex-col flex-1 justify-start items-center pb-10">
          {routes.map((route) => {
            return (
              <MenuLink
                key={route.label}
                href={route.path}
                active={pathname.includes(route.path)}
                className="text-white mt-6"
              >
                {route.label}
              </MenuLink>
            );
          })}
          <div className="mt-10">
            <Button className="mx-10" variant="outline" href={"/contact-us"}>
              {"Let's Talk"}
            </Button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
