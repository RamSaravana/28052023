import { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";

const TextField = ({ label, handleChange, placeholderValue, name }) => {
  const [localValue, setLocalValue] = useState("");
  const onTextFieldChange = (e) => {
    setLocalValue(e.target.value);
  };
  useEffect(() => {
    handleChange({ [name]: localValue });
  }, [localValue]);

  return (
    <>
      <label>{label}</label>
      <Input
        onChange={onTextFieldChange}
        placeholder={placeholderValue}
        type="text"
        name={name}
        value={localValue}
      />
    </>
  );
};

export default TextField;
