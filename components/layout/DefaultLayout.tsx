import React from "react";

type Props = {
  children: React.ReactNode;
};
const DefaultLayout = ({ children }: Props) => {
  return (
    <div id="wrapper">
      <header>header</header>
      <div className="inner">{children}</div>
    </div>
  );
};

export default DefaultLayout;
