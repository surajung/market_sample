import { MouseEventHandler } from "react";

interface PropsTypes {
  id: number | string;
  name: string;
  onHandler: MouseEventHandler;
}
const Chips = ({ id, name, onHandler }: PropsTypes) => {
  return (
    <div className="chips" id={String(id)}>
      {name}
      <button
        type="button"
        className="chips__button--delete"
        onClick={onHandler}
      >
        <span className="blind">삭제</span>
      </button>
    </div>
  );
};
export default Chips;
