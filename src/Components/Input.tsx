import React from "react";

type Props = {
  placeholder: string;
  setInput: (value: string) => void;
  refInput: React.RefObject<HTMLInputElement>;
};

const Input = ({ placeholder, setInput, refInput }: Props) => {
  return (
    <input
      ref={refInput}
      type="text"
      placeholder={placeholder}
      onChange={(e) => setInput(e.target.value)}
      className="input input-bordered w-full max-w-xs"
    />
  );
};

export default Input;
