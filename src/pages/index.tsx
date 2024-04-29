import type { NextPage } from "next";
import DefaultLayout from "@/containers/layouts/default";
import HomePage from "@/containers/HomeTemplate";

const Home: NextPage = () => {
  return (
    <DefaultLayout>
      <HomePage />
    </DefaultLayout>
  );
};

export default Home;
