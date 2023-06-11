interface PropsTypes {
  title?: string
  children: React.ReactNode;
};
const DefaultLayout = ({ title, children }: PropsTypes) => {
  return (
    <div id="wrapper">
      {title && <header>{title}</header>} 
      <div className="inner">{children}</div>
    </div>
  );
};

export default DefaultLayout;
