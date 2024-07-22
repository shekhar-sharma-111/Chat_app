

import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessage } from 'react-icons/ti';

function MessageContainer() {
  const noChatOpen = false;
  return (
    <div className="md:min-w-[450px] flex flex-col h-full">
      {noChatOpen ? (
        <NoChatSelected />
      ) : (
        <>
          <div className="bg-amber-400 px-4 py-2 mb-2">
            <span className="label-text">to:</span>
            <span className="text-white font-bold">user name</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
}

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>welcome Shekhar😍 </p>
        <p> select user to chat </p>
        <TiMessage className="text-3xl md:text-5xl text-center" />
      </div>
    </div>
  );
};
