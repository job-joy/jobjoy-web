import Layout from "../Component/layout";
import React from "react";
import "./styles.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ Component, pageProps, ...appProps }) => {
  const getContent = () => {
    if ([`/login`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/sign`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/verify`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/forgetPassword`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;
    if ([`/profile`].includes(appProps.router.pathname))
      return <Component {...pageProps} />;

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  };
  return <div>{getContent()}</div>;
};
