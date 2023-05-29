import { useEffect, useState } from "react";
import { Input } from "semantic-ui-react";

const PasswordField = ({ label, handleChange, placeholderValue, name }) => {
  const [passwordValue, setPasswordValue] = useState("");
  const onPasswordChange = (e) => {
    setPasswordValue(e.target.value);
  };
  useEffect(() => {
    handleChange({ [name]: passwordValue });
  }, [passwordValue]);

  return (
    <>
      <label>{label}</label>
      <Input
        onChange={onPasswordChange}
        placeholder={placeholderValue}
        type="password"
        name={name}
        value={passwordValue}
      />
    </>
  );
};

export default PasswordField;
