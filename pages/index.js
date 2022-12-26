import Main from "../Components/Main";
import Header from "../Components/Header";
import Layout from "../Components/Layout";
import { useEffect } from "react";
export default function Home() {
  return (
    <Layout>
      <Header />
      <Main />
    </Layout>
  );
}
