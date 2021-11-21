export const MessageList = ({ data }) => {
  return (
    <ul id={'messages'}>
      {data.map((el , index)=> (
        <li key={index}>
          <span>{el.userName}: </span>
          <span>{el.userMessage}</span>
        </li>
      ))}
    </ul>
  );
};
