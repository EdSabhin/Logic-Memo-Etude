import React from "react";

type Props = {
  text: string;
  handleClick?: () => void;
};

const Button = ({ text, handleClick }: Props) => {
  return (
    <button className="btn btn-outline btn-wide" onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;
