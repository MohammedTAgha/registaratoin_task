import React, { useState } from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import { Label } from "../Typo";
import { validateInput } from "../../utils/utils";
import colors from "../../styles/color";

const InputField = styled.input`
  font-family: "Inter", sans-serif;
  border-radius: 0.375rem;
  border: 1px solid #8692a6;
  padding: 0.5rem 0.8rem;
  width: 100%;
  height: 4rem;
  flex-shrink: 0;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: #000;
`;

const InputComponent = ({ label, type, isValid, message, ...props }) => {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    setError("");
  };
  const validateInputValue = () => {
    console.log("checking")
    const validation = validateInput(value, type);
    if (!validation.isValid) {
      setError(validation.message);
    } else {
      setError("");
    }
  };
  return (
    <Container alignItems="flex-start" rowGap={"6px"} width="100%">
      <Label color="#696f79">{label}</Label>
      <InputField
        {...props}
        type={type}
        onChange={handleInputChange}
        onBlur={validateInputValue}
      />
      {error && <Label color={colors.warning}>{error}</Label>}
    </Container>
  );
};

export default InputComponent;
