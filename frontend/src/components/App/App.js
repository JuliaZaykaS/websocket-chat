import { useState } from 'react';
import { Form } from '../Form/Form'

import { MessageList } from '../MessageList/MessageList';

function App() {
  const [data, setData] = useState([])
  const onSubmit = (userName, userMessage) => {
    const newMessage = {
      userName,
      userMessage,
    }
  setData([...data, newMessage])
}

  return (
    <>
      <MessageList data={ data}/>
      <Form onSubmit={ onSubmit}/>
    </>
  );
}

export default App;
