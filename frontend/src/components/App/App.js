import socketIOClient from "socket.io-client"
import { useState, useEffect, useRef } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { Form } from '../Form/Form'

import { MessageList } from '../MessageList/MessageList';

const MESSAGE_EVENT = "chat message";
const SERVER_URL = 'http://localhost:5555'

function App() {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();

  useEffect(() => {

    // Creates a WebSocket connection
    socketRef.current = socketIOClient(SERVER_URL);

    // Listens for incoming messages
    socketRef.current.on(MESSAGE_EVENT, (message) => {
      const incomingMessage = {
        ...message,
        ownedByCurrentUser: message.senderId === socketRef.current.id,
      };
      setMessages((messages) => [...messages, incomingMessage]);
    });

    // Destroys the socket reference
    // when the connection is closed
    return () => {
      socketRef.current.disconnect();
    };
  }, []);


  const sendMessage = (messageBody) => {
    socketRef.current.emit(MESSAGE_EVENT, {
      ...messageBody,
      senderId: socketRef.current.id,
    });
  };

  const onSubmit = (userName, userMessage) => {
    const newMessage = {
      userName,
      userMessage,
    }
    sendMessage(newMessage);
  }

    return (
      <>
        <MessageList data={messages} />
        <Form onSubmit={onSubmit} />
      </>
    );

  }
  export default App;

