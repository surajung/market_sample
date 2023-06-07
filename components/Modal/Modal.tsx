interface PropsTypes  {
  isDimmed?: boolean;
  title: string;
  height: string;
  children: React.ReactNode;
}

const Modal = ({isDimmed = true, title="타이틀", height, children}: PropsTypes) => {
  return (
    <section className="modal">
      {isDimmed && <div className="modal__dimmed"></div>}
      <div className="modal__inner" style={{height:`${height}`}}>
        <header className="modal__header">
          <h2>{title}</h2>
        </header>
        <div className="modal__body">
          {children}
        </div>
        <button type="button" className="modal__button--close"><span className="blind">닫기</span></button>
      </div>
    </section>
  )
}
export default Modal;