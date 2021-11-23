import { useState } from 'react';
import s from './Form.module.css'

export const Form = ({ onSubmit }) => {
  const [userName, setUserName] = useState('');
  const [userMessage, setUserMessage] = useState('');
  const [isInputShown, setIsInputShown] = useState(true)

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
    setIsInputShown(false)
  };

  return (
    <form onSubmit={onSubmitForm} id={'form'} className={s.form}>
      {
        isInputShown &&


      <label>
        <input
          type="text"
          name="userName"
          value={userName}
          onChange={onInputChange}
          required={true}
            placeholder={'Имя'}
            className={s.input}
        ></input>
      </label>
      }
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
              className={s.input}
            ></input>
          </label>
          <button type="submit" className={s.button}>Отправить</button>
        </>
      )}
    </form>
  );
};
