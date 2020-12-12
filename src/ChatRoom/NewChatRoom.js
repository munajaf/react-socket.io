import React, {useRef} from "react";

import './NewChatRoom.scss';
import useChat from "../useChat";

const NewChatRoom = (props) => {

  const { roomId, userId } = props.match.params; // Gets roomId from URL
  const { messages, sendMessage } = useChat(roomId, userId); // Creates a websocket and manages messaging
  const messageRef = useRef(null)


  const handleSendMessage = () => {
    sendMessage(messageRef.current.value);
    messageRef.current.value = "";
  };

  const onEnter = (e) => {
    if(e.keyCode === 13 && e.shiftKey === false) {
      e.preventDefault();
      handleSendMessage();
    }
  }

  return (
    <React.Fragment>
      <h1>Chat Bubbles - iOS style</h1>
      <div className="chat">
        <div className="mine messages">
          <div className="message last">
            Dude asdasdkas;daskld
          </div>
        </div>
        <div className="yours messages">
          <div className="message">
            Hey!
          </div>
          <div className="message">
            You there?
          </div>
          <div className="message last">
            Hello, how's it going?
          </div>
        </div>
        <div className="mine messages">
          <div className="message">
            Great thanks!
          </div>
          <div className="message last">
            How about you?
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NewChatRoom;