import React from "react";

interface PropsType {
  children: React.ReactNode;
}
const DefaultLayout = ({ children }: PropsType) => {
  return (
    <div id="wrapper">
      <header>header</header>
      {children}
    </div>
  );
};

export default DefaultLayout;
