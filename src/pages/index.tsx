import { Container } from "@/common/layout/Container";
import ClientRehydration from "@/common/utils/ClientRehydration";
import { Home } from "@/modules/home";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <title>Soul-Sci</title>
        <link rel="canonical" href="http://soulsci.com/" />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
      </Head>
      <ClientRehydration>
        <Container>
          <Home />
        </Container>
      </ClientRehydration>
    </>

  )
}