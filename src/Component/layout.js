import Footer from "./Footer/Footer";
import Header from "./Header/Header";

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
