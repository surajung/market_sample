import { ChangeEventHandler, FocusEventHandler, useState } from "react";
import classNames from "classnames";

type Props = {
  id: string;
  name?: string;
  value?: string;
  placeholder?: string;
  maxLength?: number | undefined;
  onChange?: ChangeEventHandler<HTMLInputElement> | undefined;
  onFocus?: FocusEventHandler<HTMLInputElement> | undefined;
  size: string;
};

const TextInput = ({
  id,
  name,
  value,
  placeholder,
  maxLength,
  onChange,
  onFocus,
  size,
}: Props) => {
  const classes = classNames("text-input", {
    [`text-input--${size}`]: size.length,
  });
  return (
    <div className="text-input-wrap">
      <input
        id={id}
        name={name}
        type="text"
        value={value}
        placeholder={placeholder}
        maxLength={maxLength}
        onChange={onChange}
        onFocus={onFocus}
        className={classes}
      />
    </div>
  );
};
export default TextInput;
