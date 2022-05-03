import React from "react";

export const Message = ({ message }) => {
  return (
    <>
      <div className="companion">{message}</div>
      <div className="message">
        {message}
        {message}
      </div>
      <div className="message">
        {message}
        {message}
      </div>
      <div className="message">
        {message}
        {message}
      </div>
      <div className="message">
        {message}
        {message}
      </div>
    </>
  );
};
