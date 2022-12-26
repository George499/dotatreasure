import { useState, useEffect, useContext } from "react";
import { Context } from "../context/index";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const ChatEngine = dynamic(() =>
  import("react-chat-engine").then((module) => module.ChatEngine)
);
const MessageFormSocial = dynamic(() =>
  import("react-chat-engine").then((module) => module.MessageFormSocial)
);

function Chats() {
  const { username, secret } = useContext(Context);
  const [showChat, setShowChat] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (typeof document !== null) {
      setShowChat(true);
    }
  });

  if (!showChat) return <div />;
  return (
    <div className="container flex items-center justify-center h-full w-full mx-auto">
      <div className="p-[100px] absolute top-0 w-full ">
        <div className="shadow">
          <ChatEngine
            height="calc(100vh - 200px)"
            projectID="4c1e94d7-fee5-47a2-98f4-11dce3baedcc"
            userName={username}
            userSecret={secret}
            renderNewMessageForm={() => <MessageFormSocial />}
          />
        </div>
      </div>
    </div>
  );
}

export default Chats;
