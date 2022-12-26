import { useContext } from "react";
import { Context } from "../context/index";
import { useRouter } from "next/router";
import axios from "axios";
import Cursor from "./Cursor";
import Router from "next/router";

function Main() {
  const { username, secret, setUsername, setSecret } = useContext(Context);
  const onSubmit = (e) => {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios
      .put(
        "https://api.chatengine.io/users/",
        { username, secret },
        { headers: { "Private-key": "6d0587d3-3783-4b6f-a7e8-79c08b45c71d" } }
      )
      .then((r) => Router.push("/chats"));
  };

  return (
    <>
      <div className="container flex items-center justify-center h-full w-full mx-auto">
        <div className="w-[420px] h-[292px] relative bg-[#eebbc3] rounded-3xl shadow-xl shadow-black/50 ">
          <form
            className="pt-[33px] w-3/5 mx-auto font-aeonik"
            onSubmit={(e) => onSubmit(e)}
          >
            <div className="pb-[20px] w-full text-center text-[#232946] text-[26px]">
              Next JS Chat
            </div>
            <div className="input-container">
              <input
                placeholder="Email"
                className="w-full p-[8px] mb-[24px] bg-[#eebbc3] outline-none  border-b-2 border-[#b8c1ec] placeholder:text-[#232946]"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="input-container">
              <input
                type="password"
                placeholder="Password"
                className="w-full p-[8px] mb-[24px] bg-[#eebbc3] outline-none  border-b-2 border-[#b8c1ec] placeholder:text-[#232946]"
                onChange={(e) => setSecret(e.target.value)}
              />
            </div>
            <button
              type="submit"
              className="w-full p-[14px] border-none rounded cursor-pointer bg-[#b8c1ec] text-[#232946] outline-none hover:bg-[#a5add4]"
            >
              Login / Sign Up
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Main;
