import "./AddWithText.scss";
import React, { useCallback, useState, type FC } from "react";
import type { IProps } from "./types";

const AddWithText: FC<IProps> = ({
  handleClick,
  className,
  placeholder = "Type some text",
}) => {
  const [value, setValue] = useState("");

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = useCallback(
    (e) => {
      e.preventDefault();

      handleClick(value);

      setValue("");
    },
    [handleClick, value],
  );

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement,
    HTMLInputElement
  > = useCallback((e) => {
    const input = e.target.value;
    setValue(input);
  }, []);

  return (
    <div className={"add-with-text" + (className ? " " + className : "")}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
        />
        <div className={"add-button"}>
          <button disabled={value.length === 0}>+</button>
        </div>
      </form>
    </div>
  );
};

export default AddWithText;
