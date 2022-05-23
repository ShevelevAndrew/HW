export const Layout = ({ cahat, messages }) => {
  return (
    <div className="wrapper">
      <div className="chatlist">
        {/* <div className="header"></div> */}
        {cahat}
      </div>
      <div className="wrapper-chat">
        {/* <div className="header"></div> */}
        {messages}
      </div>
    </div>
  );
};
