import React from "react";
import CheckboxContext from "./CheckboxContext";

interface PropsType {
  label: string;
  children: React.ReactNode;
  values: string[];
  onChange: (values: any) => void;
}
interface toggleValueType {
  checked: boolean;
  value: string;
}
const CheckboxGroup = ({ label, children, values, onChange }: PropsType) => {
  const isChecked = (value: string) => values.includes(value);
  const toggleValue = ({ checked, value }: toggleValueType) => {
    if (checked) {
      onChange(values.concat(value));
    } else {
      onChange(values.filter((v) => v !== value));
    }
  };
  return (
    <fieldset>
      <legend className="blind">{label}</legend>
      <CheckboxContext.Provider value={{ isChecked, toggleValue }}>
        {children}
      </CheckboxContext.Provider>
    </fieldset>
  );
};
export default CheckboxGroup;
