import React from "react";
import styled from "styled-components";
import Container from "../Container/Container";
import { Label } from "../Typo";


const InputField = styled.input`
font-family: 'Inter', sans-serif;
  border-radius: 0.375rem;
  border: 1px solid #8692a6;
  padding: 0.5rem 0.8rem;
  width: 100%;
height: 4rem;
flex-shrink: 0; 
font-size: 1.25rem;
font-style: normal;
font-weight: 500;
color:#000;
`;

const InputComponent = ({ label, ...props }) => {
  return (
    <Container alignItems="flex-start" rowGap={"6px"} width="100%">
      <Label color="#696f79">{label}</Label>
      <InputField {...props} />
    </Container>
  );
};

export default InputComponent;
