export const MessageList = ({ data }) => {
  return (
    <ul id={'messages'}>
      {data.map((el , index)=> (
        <li key={index}>
          <span>{el.userName}: </span>
          <span>{el.userMessage}</span>
          {/* <span>{el.body.userName}: </span>
          <span>{el.body.userMessage}</span> */}
        </li>
      ))}
    </ul>
  );
};
