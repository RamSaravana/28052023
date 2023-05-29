import React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "../../commonComponents/inputFields/TextField";
import { store } from "../../reduxToolkit/store/store";
import { useSelector } from "react-redux";
// import { generateDetail } from "../../utils/auth/utils";
import { saveCredentials } from "../../reduxToolkit/slices/authSlice";
import PasswordField from "../../commonComponents/inputFields/PasswordField";
import ButtonComponent from "../../commonComponents/inputFields/Button";

const Login = () => {
  const authState = useSelector((store) => store.auth);
  const onChange = (fieldData) => {
    // console.log(e.target.value);
    // const details = generateDetail(authState, {
    //   [e.target.name]: e.target.value,
    // });
    store.dispatch(saveCredentials(fieldData));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(authState);
  };
  const navigate = useNavigate();

  return (
    <>
      <TextField
        label={`Username`}
        handleChange={onChange}
        placeholderValue={`Enter username`}
        name={`username`}
      />
      <PasswordField
        label={`Password`}
        handleChange={onChange}
        placeholderValue={`Enter password`}
        name={`password`}
      />
      <ButtonComponent value={`Login`} type={`submit`} handleClick={onSubmit} />
    </>
  );
};

export default Login;
