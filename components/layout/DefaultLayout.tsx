import { useRouter } from "next/router";
interface PropsTypes {
  title?: string;
  children: React.ReactNode;
}
const DefaultLayout = ({ title, children }: PropsTypes) => {
  const router = useRouter();
  return (
    <div id="wrapper">
      {title && (
        <header>
          <button
            className="button__back"
            type="button"
            onClick={router.back}
          ></button>
          {title}
        </header>
      )}
      <div className="inner">{children}</div>
    </div>
  );
};

export default DefaultLayout;
