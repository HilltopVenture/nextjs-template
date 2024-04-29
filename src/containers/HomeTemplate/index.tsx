import Image from "next/image";
import React from "react";
import Container from "@/components/Container";
import Button from "@/components/Button";

function HilltopInfo() {
  return (
    <>
      <Container className="items-center justify-center ">
        <div className="w-full justify-center flex flex-col sm:px-0 px-4">
          <p className="text-dark leading-tight text-35 xs:text-40 sm:text-50 font-semibold text-center">
            <span>
              <span className="text-primary">Hello World! </span> We are
              Hilltop, a modern day tech company focused on blockchain and web3
            </span>
          </p>
          <div className="w-fit mx-auto">
            <Button containerClassName="mt-10" href={"/about-us"}>
              {"Learn More"}
            </Button>
          </div>
          <div className="h-80 lg:mt-10 mt-8 flex items-center justify-center lg:mx-auto lg:hidden">
            <Image
              src={"/img/home/HomeMobile.png"}
              sizes="w-full"
              alt=""
              width={450}
              height={279}
            />
          </div>
          <div className="h-100 mt-8 flex items-center justify-center hidden lg:mt-30 lg:my-40 lg:block">
            <Image
              src={"/img/home/HomeWeb.png"}
              sizes="w-full"
              alt=""
              width={1520}
              height={514}
            />
          </div>
        </div>

        {/* <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-center">
          <div className="w-full text-center lg:w-[44%] lg:text-left lg:ml-10">
            <p className="text-title sm:px-0 px-16">
              Blockchain: The Way Forward
            </p>
            <p className="mt-5 sm:px-0 px-8">
              Blockchain, cryptocurrency, and decentralization are game-changing
              technologies that can help businesses gain a competitive edge,
              increase security, transparency, efficiency, and trust.
            </p>
            <p className="mt-5 sm:px-0 px-4">
              These technologies provide a secure and tamper-proof ledger of
              transactions, making it virtually impossible to hack or alter
              records.
            </p>
            <p className="mt-5 sm:px-0 px-8">
              Moreover, decentralization also helps remove the need for
              intermediaries to process and verify transactions.
            </p>
            <div className="w-fit mx-auto">
              <Button containerClassName="mt-10" size="md" href={"/about-us"}>
                {"Discover Company"}
              </Button>
            </div>
          </div>
          <div className="mt-3 lg:w-[40%] justify-center lg:ml-40">
            <div className="lg:mt-2 mt-6">
              <Image
                src={"/img/home/Banner1.png"}
                sizes="w-full"
                alt=""
                width={390}
                height={125}
              />
            </div>
            <div className="lg:mt-2 mt-2">
              <Image
                src={"/img/home/Banner2.png"}
                sizes="w-full"
                alt=""
                width={390}
                height={125}
              />
            </div>
            <div className="lg:mt-2 mt-2">
              <Image
                src={"/img/home/Banner3.png"}
                sizes="w-full"
                alt=""
                width={390}
                height={125}
              />
            </div>
          </div>
        </div> */}
      </Container>
    </>
  );
}

function Services() {
  return (
    <div className="bg-black pb-6 ">
      <div className="flex flex-col items-center justify-center py-0">
        <div className="pt-6 flex items-center justify-center lg:hidden">
          <Image
            src={"/img/home/coinsMobile.png"}
            className="lg:h-40"
            sizes="w-full"
            alt=""
            width={625}
            height={123}
          />
        </div>
        <div className="pt-6 flex items-center justify-center hidden lg:block ">
          <Image
            src={"/img/home/coinsWeb.png"}
            className="lg:h-40"
            sizes="w-full"
            alt=""
            width={1800}
            height={160}
          />
        </div>
      </div>
      <div className="w-full text-center text-white mt-16 lg:mt-20">
        <div className="lg:flex lg:justify-between lg:px-46">
          <p className="text-title px-6 lg:text-left">
            Services: Let’s Start Building The Future
          </p>
          <p className="mt-5 px-4 lg:text-left lg:mt-2">
            As the world of finance, businesses and entertainment are evolving,
            you can grow your business in the smart way by teaming up with
            Hilltop.
          </p>
        </div>
        <div className="w-fit mx-auto">
          <Button containerClassName="mt-10 lg:mt-0" href={"/our-services"}>
            {"Discover Services"}
          </Button>
        </div>
      </div>
      <div className="p-4 lg:flex lg:flex-row lg:justify-center lg:mt-18 lg:gap-4">
        <div className="bg-[#DFE7FB] mt-20 h-90 rounded-lg pt-2 lg:w-90 lg:mt-4">
          <div className="flex flex-row mt-6 ml-8 ">
            <Image
              src={"/img/home/Blockchain.png"}
              sizes="w-full"
              alt=""
              width={70}
              height={70}
            />
            <p className="text-2xl px-4">Blockchain Development</p>
          </div>
          <div>
            <p className="px-7 py-6">
              At Hilltop, we offer a range of blockchain services to help unlock
              clients’ businesses full potential.
            </p>
          </div>
          <div className="list-disc ml-8 ">
            <li>Asset tokenization</li>
            <li>Initial Coin Offering (ICO)</li>
            <li>NFT marketplace</li>
            <li>Smart contract</li>
            <li>Digital asset exchange platform</li>
          </div>
        </div>
        <div className="bg-primary mt-4 h-90 rounded-lg text-white pt-2 lg:w-90">
          <div className="flex flex-row mt-6 ml-8 ">
            <Image
              src={"/img/home/Artificial.png"}
              sizes="w-full"
              alt=""
              width={70}
              height={70}
            />
            <p className="text-2xl px-4">Artificial Intelligence (A.i.)</p>
          </div>
          <div>
            <p className="px-7 py-6">
              Harness the power of artificial intelligence - from data analysis
              and predictive modelling to natural language processing and
              computer vision.
            </p>
          </div>
          <div className="list-disc ml-8 ">
            <li>AI trading bot</li>
            <li>Fraud detection</li>
            <li>Chatbot</li>
            <li>Predictive maintenance system</li>
          </div>
        </div>
        <div className="bg-gray mt-4 h-90 rounded-lg text-white pt-2 lg:w-90">
          <div className="flex flex-row mt-6 ml-8 ">
            <Image
              src={"/img/home/Apps.png"}
              sizes="w-full"
              alt=""
              width={70}
              height={70}
            />
            <p className="text-2xl pl-4">Web and Apps Implementation </p>
          </div>
          <div>
            <p className="px-7 py-6">
              We offer tech services which cover a broad range of areas,
              including cloud computing, mobile app and web development and
              more.
            </p>
          </div>
          <div className="list-disc ml-8 ">
            <li>Web development services</li>
            <li>Cloud migration services</li>
            <li>Mobile application development</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <HilltopInfo />
      <Services />
    </>
  );
}
