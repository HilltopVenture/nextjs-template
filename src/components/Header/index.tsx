import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";
import clsx from "@/libs/clsx";
import MenuIcon from "@/svgIcons/MenuIcon";
import MenuLink from "@/components/MenuLink";
import Button from "../Button";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

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

  return (
    <>
      <header
        className={clsx({
          "w-full relative top-0 flex z-10 bg-white": true,
        })}
      >
        <div
          className={clsx({
            "mx-auto w-full h-20 md:h-25 flex items-center md:px-15 px-5 justify-between":
              true,
          })}
        >
          <div className="flex items-center justify-between w-full">
            <div className="mr-5">
              <Link href="/">
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
            </div>
            <div className="flex justify-center hidden 950:flex">
              {routes.map((route, index) => (
                <MenuLink key={index} href={route.path}>
                  {route.label}
                </MenuLink>
              ))}
            </div>
            <div className="hidden 950:flex ">
              <Button
                className="mx-10 min-w-32 ml-6 h-11 px-4"
                href="/contact-us"
                variant="outline-black"
              >
                {"Let's Talk"}
              </Button>
            </div>
          </div>

          <div
            className={clsx({
              "h-11 w-11  flex justify-center items-center 950:hidden": true,
            })}
            onClick={() => setIsOpen(!isOpen)}
          >
            <MenuIcon
              className={clsx({
                "text-secondary": true,
              })}
            />
          </div>
        </div>
      </header>
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
}

export default Header;
