import DefaultLayout from "@/containers/layouts/default";
import Container from "@/components/Container";
import Head from "next/head";

function Custom404() {
  return (
    <>
      <DefaultLayout>
        <Container>
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-3xl mb-10">404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Please check the URL and try again.</p>
            <p>If you believe this is an error, please contact support.</p>
            <p>Thank you for your patience.</p>
          </div>
        </Container>
      </DefaultLayout>
    </>
  );
}

export default Custom404;
