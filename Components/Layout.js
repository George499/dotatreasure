import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <>
      <div className="bg-[#FC4445] h-screen w-full z-10">{children}</div>
    </>
  );
};

export default Layout;
