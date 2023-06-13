import { useContext } from "react";
import CheckboxContext from "./CheckboxContext";
import classNames from "classnames";

type Props = {
  size: string;
  checked?: boolean;
  isDisabled?: boolean;
  onChange?: any;
  children: React.ReactNode;
  value: string;
};

const Checkbox = ({
  size,
  checked,
  isDisabled,
  onChange,
  children,
  value,
}: Props) => {
  const context = useContext(CheckboxContext);
  /**
   * 체크 값 변경 시 함수 호출
   */
  const onChangeCheckbox = (bl: boolean) => {
    onChange(bl);
  };
  if (!context) {
    const wrapClasses = classNames("checkbox-wrap", {
      "checkbox-wrap--checked": checked,
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
              checked={checked}
              onChange={({ target: { checked } }) => onChangeCheckbox(checked)}
            />
          </div>
          {children}
        </label>
      </div>
    );
  } else {
    const { isChecked, toggleValue } = context;

    const wrapClasses = classNames("checkbox-wrap", {
      "checkbox-wrap--checked": isChecked(value),
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
              checked={isChecked(value)}
              onChange={({ target: { checked } }) =>
                toggleValue({ checked, value })
              }
            />
          </div>
          {children}
        </label>
      </div>
    );
  }
};
export default Checkbox;
