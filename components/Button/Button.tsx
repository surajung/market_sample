import classNames from "classnames";
import { MouseEventHandler } from "react";

type Props = {
  variant: string;
  isFullWidth: boolean;
  isDisabled: boolean;
  size: string;
  children: React.ReactNode;
  onHandler?: MouseEventHandler;
};

const Button = ({
  variant,
  isFullWidth,
  isDisabled,
  size,
  children,
  onHandler,
}: Props) => {
  const classes = classNames("button", {
    [`button--fullwidth`]: isFullWidth,
    [`button--disabled`]: isDisabled,
    [`button--${variant}`]: variant.length,
    [`button--${size}`]: size.length,
  });
  return (
    <button
      type="button"
      className={classes}
      disabled={isDisabled}
      onClick={onHandler}
    >
      {children}
    </button>
  );
};
export default Button;
