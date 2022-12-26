import { useContext } from "react";
import { Context } from "../context";
import { useRouter } from "next/router";
import axios from "axios";
import Cursor from "./Cursor";

function Main() {
  return (
    <>
      <Cursor />
      <div className="container flex items-center justify-center h-full"></div>
    </>
  );
}

export default Main;
