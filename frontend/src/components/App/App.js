import socketIOClient from "socket.io-client"
import { useState, useEffect, useRef } from 'react';
import { Form } from '../Form/Form'

import { MessageList } from '../MessageList/MessageList';
import s from './App.module.css'

const MESSAGE_EVENT = "chat message";
const SERVER_URL = 'http://localhost:5555'

function App() {
  const [messages, setMessages] = useState([]);
  const socketRef = useRef();
  let styles

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
    console.log(messageBody);
    socketRef.current.emit(MESSAGE_EVENT, {
      ...messageBody,
      senderId: socketRef.current.id,
    });

    // if (senderId === socketRef.current.id) {
    //   styles = 'item-owner'
    // }
    // styles = 'item-another'
  };

  const onSubmit = (userName, userMessage) => {
    const newMessage = {
      userName,
      userMessage,
    }
    sendMessage(newMessage);
  }

  // const styles

    return (
      <div className={s.section}>
        <MessageList data={messages} styles={styles} />
        <Form onSubmit={onSubmit} />
      </div>
    );

  }
  export default App;

