import {
  ChangeEventHandler,
  FocusEventHandler,
  useState,
  useEffect,
} from "react";
import classNames from "classnames";

type Props = {
  id: string;
  size: string;
  isChecked?: boolean;
  isDisabled?: boolean;
  onChange: any;
  children: React.ReactNode;
};

const Checkbox = ({
  id,
  size,
  isChecked,
  isDisabled,
  onChange,
  children,
}: Props) => {
  /**
   * 체크 값 변경 시 함수 호출
   * @param {object} event onChange시 이벤트 객체
   */
  const onChangeCheckbox = (bl: boolean) => {
    onChange(bl);
  };
  const wrapClasses = classNames("checkbox-wrap", {
    "checkbox-wrap--checked": isChecked,
    "checkbox-wrap--disabled": isDisabled,
    [`checkbox-wrap--${size}`]: size && size.length,
  });

  return (
    <div className={wrapClasses}>
      <label className="checkbox-wrap__label">
        <div className="checkbox">
          <input
            type="checkbox"
            className="checkbox__input"
            disabled={isDisabled}
            checked={isChecked}
            onChange={({ target: { checked } }) => onChangeCheckbox(checked)}
          />
        </div>
        {children}
      </label>
    </div>
  );
};
export default Checkbox;
