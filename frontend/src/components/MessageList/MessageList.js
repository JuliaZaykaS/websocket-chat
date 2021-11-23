import s from './MessageList.module.css'

export const MessageList = ({ data, styles }) => {
  console.log(styles);
  const classes = `${styles} + ${s.item}`
  return (
    <ul id={'messages'} className={s.list}>
      {data.map((el, index) => (
        // <li key={index} className={s.item}>
        <li key={index} className={classes}>
          <span>{el.userName}: </span>
          <span>{el.userMessage}</span>
        </li>
      ))}
    </ul>
  );
};
