interface PropsTypes {
  title?: string
  children: React.ReactNode;
};
const DefaultLayout = ({ title="타이틀", children }: PropsTypes) => {
  return (
    <div id="wrapper">
      {children}
    </div>
  );
};

export default DefaultLayout;
