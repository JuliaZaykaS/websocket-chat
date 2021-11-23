import { useState } from 'react';

export const Form = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');

  const onInputChange = e => {
    const { name, value } = e.currentTarget;
    switch (name) {
      case 'userName':
        setUserName(value);
        break;
      case 'userMessage':
        setUserMessage(value);
        break;

      default:
        break;
    }
  };

  const onSubmitForm = e => {
    e.preventDefault();
    onSubmit(userName, userMessage);
    setUserMessage('');
  };

  return (
    <form onSubmit={onSubmitForm} id={'form'}>
      <label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={onInputChange}
          required={true}
          placeholder={'Имя'}
        ></input>
      </label>
      {userName && (
        <>
          <label>
            <input
              type="text"
              name="userMessage"
              value={userMessage}
              onChange={onInputChange}
              required={true}
              placeholder={'Сообщение'}
            ></input>
          </label>
          <button type="submit">Отправить</button>
        </>
      )}

      {/* {
                userName
                ? (< label >
                Введите имя
                <input
                type='text'
                    name='userName'
                    value={userName}
                    onChange={onInputChange}
                ></input>
                    </label>)
                    :
                    (

            <label>
                Текст сообщения
                <input
                    type='text'
                    name='userMessage'
                    value={userMessage}
                    onChange={onInputChange}

                ></input>
            </label>
                    )
            } */}
      {/* <button type="submit">Отправить</button> */}
    </form>
  );
};
