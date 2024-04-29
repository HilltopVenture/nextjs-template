import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

function DefaultLayout({
  children,
  showFooter = true,
}: {
  children: React.ReactNode;
  showFooter?: boolean;
}) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="title"
          content="Hilltop Venture | Tech company for every business needs"
        />
        <meta
          name="description"
          content="Hilltop Venture is a modern day tech company focused on blockchain and web3 technologies. We provide services for every business needs."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hilltoptech.io" />
        <meta
          property="og:title"
          content="Hilltop Venture | Tech company for every business needs"
        />
        <meta
          property="og:description"
          content="Hilltop Venture is a modern day tech company focused on blockchain and web3 technologies. We provide services for every business needs."
        />
        <meta
          property="og:image"
          content="https://hilltoptech.io/img/home/HomeWeb.png"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hilltoptech.io" />
        <meta
          property="twitter:title"
          content="Hilltop Venture | Tech company for every business needs"
        />
        <meta
          property="twitter:description"
          content="Hilltop Venture is a modern day tech company focused on blockchain and web3 technologies. We provide services for every business needs."
        />
        <meta
          property="twitter:image"
          content="https://hilltoptech.io/img/home/HomeWeb.png"
        ></meta>
      </Head>
      <main className="tw-base">
        <Header />
        {children}
        {/* {showFooter && <Footer />} */}
      </main>
    </>
  );
}

export default DefaultLayout;
