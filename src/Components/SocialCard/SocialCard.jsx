import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  width: 4.0625rem;
  height: 4.0625rem;
  padding :8px;
  border-radius: 0.375rem;
  background: #fff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.08);
`;

const SocialIcon = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const SocialCard = ({ iconSrc }) => {
  return (
    <CardContainer>
      <SocialIcon src={iconSrc} alt="Social Media Icon" />
    </CardContainer>
  );
};

export default SocialCard;
