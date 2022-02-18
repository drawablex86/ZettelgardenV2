import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Container from "@/components/Container";
import Footer from "@/components/Footer";
import {
  LOCALE,
  COPYRIGHT,
  AUTHOR,
  KEYWORDS,
  DESCRIPTION,
  TITLE,
} from "../../config";
import { Helmet } from "react-helmet";

const Layout: React.FC = ({
  children,
  title,
  description,
  keywords,
  url,
  full,
  ...props
}: Props) => {
  return (
    <div>
      {full ? (
        <>
          <Helmet htmlAttributes={{ lang: LOCALE }} title={TITLE}>
            <meta name="title" content={TITLE} />
            <meta name="description" content={DESCRIPTION} />
            <meta name="keywords" content={KEYWORDS} />
            <meta name="publisher" content={AUTHOR.NAME} />
            <meta name="author" content={AUTHOR.NAME} />
            <meta name="copyright" content={COPYRIGHT} />
          </Helmet>
          <Header />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <Helmet htmlAttributes={{ lang: LOCALE }} title={TITLE}>
            <meta name="title" content={TITLE} />
            <meta name="description" content={DESCRIPTION} />
            <meta name="keywords" content={KEYWORDS} />
            <meta name="publisher" content={AUTHOR.NAME} />
            <meta name="author" content={AUTHOR.NAME} />
            <meta name="copyright" content={COPYRIGHT} />
          </Helmet>
          <Header />
          <Container>{children}</Container>
          <Footer />
        </>
      )}
    </div>
  );
};

export default Layout;

type Props = {
  children: ReactNode;
  title: string;
  description?: string;
  socialImage?: string;
  url?: string;
  keywords: Array<string>;
  full: boolean;
};
