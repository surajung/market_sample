import { createContext } from "react";

// type Props {
//   isChecked: boolean;
//   toggleValue: boolean;
// }
// type PropsType = Props
const CheckboxContext = createContext<any | undefined>(undefined);
export default CheckboxContext;
