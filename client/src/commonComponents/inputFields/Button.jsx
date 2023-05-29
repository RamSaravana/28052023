import { Button } from "semantic-ui-react";

const ButtonComponent = ({ value, handleClick, type }) => {
  return (
    <Button onClick={handleClick} type={type}>
      {value}
    </Button>
  );
};

export default ButtonComponent;
