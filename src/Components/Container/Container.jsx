import React, { Component } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
 position: relative;
  width: ${(props) => props.width || "fit-content"};
  height: ${(props) => props.height || "fit-content"};
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "center"};
  gap: ${(props) =>
    props.row ? `0 ${props.columnGap || "0"}` : `${props.rowGap || "0"} 0`};

  align-items: ${(props) =>props.alignItems ? props.alignItems : "center"};
  padding-top: ${(props) => props.paddingTop || "0"};
  padding-right: ${(props) => props.paddingRight || "0"};
  padding-bottom: ${(props) => props.paddingBottom || "0"};
  padding-left: ${(props) => props.paddingLeft || "0"};
  background-color: ${(props) =>
    !props.overlay ? "transparent" : "var(--color-backgrounddark)"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "0"};
  box-shadow: ${(props) => props.boxShadow || "none"};
  background-image: ${(props) => (props.backgroundImage ? `url(${props.backgroundImage})` : "none")};
  background-size: cover;
  background-position: center;
  z-index: 0;
  &::before {
    content: "";
    position: absolute;
    
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: ${(props) =>
      props.overlayColor ? props.overlayColor : "rgba(0, 0, 0, 0)"};
    z-index: -1;
  }
`;

export default class Container extends Component {
  render() {
    return <StyledContainer {...this.props} />;
  }
}
