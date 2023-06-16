import { createContext } from "react";

type Prop = {
  checked: boolean;
  value: string;
};

interface PropsType {
  isChecked: (value: string) => boolean;
  toggleValue: ({ checked, value }: Prop) => void;
}
const CheckboxContext = createContext<PropsType>({
  isChecked: () => false,
  toggleValue: () => {},
});
export default CheckboxContext;
