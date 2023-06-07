interface PropsTypes {
  isDimmed?: boolean;
  title: string;
  height: string;
  children: React.ReactNode;
  onHandler: MouseEventHandler;
}

const Modal = ({
  isDimmed = true,
  title = "타이틀",
  height,
  children,
  onHandler,
}: PropsTypes) => {
  return (
    <section className="modal">
      {isDimmed && <div className="modal__dimmed"></div>}
      <div className="modal__inner" style={{ height: `${height}` }}>
        <header className="modal__header">
          <h2>{title}</h2>
        </header>
        <div className="modal__body">{children}</div>
        <button
          type="button"
          className="modal__button--close"
          onClick={onHandler}
        >
          <span className="blind">닫기</span>
        </button>
      </div>
    </section>
  );
};
export default Modal;
