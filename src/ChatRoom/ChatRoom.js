import React, {useRef} from "react";

import './ChatRoom.css';
import useChat from "../useChat";

const ChatRoom = (props) => {

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
    <div className="chat-room-container">
      <h1 className="room-name">Room: {roomId}</h1>
      <div className="messages-container">
        <div className="messages-list">
          {messages.map((message, i) => (
            <span className={`message-item-${
              message.ownedByCurrentUser ? "my-message" : "received-message"
            }`}>
              <span
                key={i}
                className={`item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message.body}
              </span>
            </span>
          ))}
        </div>
      </div>
      <div className="new-message">
        <textarea
          // value={newMessage}
          // onChange={handleNewMessageChange}
          onKeyDown={onEnter}
          ref={messageRef}
          placeholder="Write message..."
          className="new-message-input-field"
        />
        <button onClick={handleSendMessage} className="send-message-button">
          Send
        </button>
      </div>
    </div>
  );
};

export default ChatRoom;