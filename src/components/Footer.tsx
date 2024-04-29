import React from "react";
import NextLink, { LinkProps } from "next/link";
import Container from "./Container";

import clsx from "@/libs/clsx";
import Image from "next/image";
interface MenuLinkProps extends LinkProps {
  target?: React.HTMLAttributeAnchorTarget;
  children: React.ReactNode;
}

function Link({ children, ...props }: MenuLinkProps) {
  return (
    <NextLink
      className="text-sm hover:underline text-gray-A5 mt-3.75"
      {...props}
    >
      {children}
    </NextLink>
  );
}

function Footer() {
  const getYear = new Date().getFullYear();
  const footerGroups = [
    {
      pages: [
        {
          name: `Company`,
          url: "/about-us",
        },
        {
          name: `Services`,
          url: "/our-services",
        },
        {
          name: `Projects`,
          url: "/our-projects",
        },
        {
          name: `Products`,
          url: "/our-products",
        },
        {
          name: `Career`,
          url: "/our-career",
        },
        {
          name: `Contact`,
          url: "/contact-us",
        },
        // {
        //   name: `Terms Of Service`,
        //   url: "/terms-of-service",
        // },
        // {
        //   name: `Privacy Policy`,
        //   url: "/privacy-policy",
        // },
      ],
    },
  ];
  return (
    <footer>
      <Container
        contentClassName={clsx({
          "py-15": true,
        })}
      >
        <div className="lg:flex">
          <div className="relative lg:w-70 lg:mt-8">
            <Image
              src="/img/logo.svg"
              alt=""
              className="lg:w-full"
              sizes="(max-width: 600px) 100vw, 600px"
              width={200}
              height={800}
            />
          </div>

          <div className="w-full flex flex-col justify-between ">
            <div className="grid grid-cols-2 gap-1 sm:flex justify-between">
              {footerGroups.map((footerGroup, index) => (
                <div
                  key={index}
                  className={clsx({
                    "flex flex-col sm:mt-0 lg:flex-row lg:gap-10.75 lg:ml-auto":
                      true,
                  })}
                >
                  <>
                    {footerGroup.pages.map((footerPage: any, footerIndex) => (
                      <Link
                        key={footerIndex}
                        href={footerPage.url}
                        target={footerPage.target}
                      >
                        {footerPage.name}
                      </Link>
                    ))}
                  </>
                </div>
              ))}
            </div>
            <div className="sm:mt-0 mt-10 lg:pl-48">
              <hr className="my-4 border-gray-800 hidden lg:block " />
              <div className=" mt-3 justify-between">
                {/* <div className="flex">
                  <NextLink href="/">
                    <FacebookIcon />
                  </NextLink>
                  <NextLink className="ml-7.5" href="/">
                    <TwitterIcon />
                  </NextLink>
                  <NextLink className="ml-7.5" href="/">
                    <InstagramIcon />
                  </NextLink>
                </div> */}
                <p className="text-xs flex hidden lg:block text-end">
                  © {getYear} Hilltop Venture. All rights reserved.
                </p>
              </div>
              <hr className="my-4 border-gray-800 lg:hidden" />
              <p className="text-xs flex lg:hidden">
                © {getYear} Hilltop Venture. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
