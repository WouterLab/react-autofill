import { inputTypes } from "../../constants/inputTypes";
import { ComponentDataType } from "../../types";
import s from "./Input.module.scss";
import { ChangeEvent, useEffect, useState } from "react";

const Input = ({
  type,
  required,
  label,
  id,
  defaultValue,
}: ComponentDataType) => {
  const [inputValue, setInputValue] = useState(defaultValue);

  useEffect(() => {
    setInputValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={s.inputWrapper}>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        required={required}
        placeholder={label}
        value={inputValue}
        type={inputTypes[type]}
        className={s.input}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setInputValue(e.target.value)
        }
      />
    </div>
  );
};

export default Input;
