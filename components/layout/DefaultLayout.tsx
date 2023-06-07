interface PropsTypes {
  title: string
  children: React.ReactNode;
};
const DefaultLayout = ({ title="타이틀", children }: PropsTypes) => {
  return (
    <div id="wrapper">
      <header>{title}</header>
      <div className="inner">{children}</div>
    </div>
  );
};

export default DefaultLayout;
