import React from "react";
import classNames from "classnames";

type Props = {
  variant: string;
  isFullWidth: boolean;
  isDisabled?: boolean;
  size: string;
  children: React.ReactNode;
};

const Button = ({
  variant,
  isFullWidth,
  isDisabled,
  size,
  children,
}: Props) => {
  console.log(variant, typeof isFullWidth, isDisabled, size);
  const classes = classNames("button", {
    [`button--fullwidth`]: isFullWidth,
    [`button--disabled`]: isDisabled,
    [`button--${variant}`]: variant.length,
    [`button--${size}`]: size.length,
  });
  return (
    <button type="button" className={classes}>
      {children}
    </button>
  );
};
export default Button;
