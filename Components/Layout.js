import Head from "next/head";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="bg-[#232946] h-screen w-full z-10">{children}</div>
    </>
  );
};

export default Layout;
