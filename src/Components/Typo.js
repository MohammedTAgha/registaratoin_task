import styled from "styled-components";

// Heading Typography
export const Heading1 = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size: 5rem;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: normal;
  color: ${(props) =>
    props.color === "primary"
      ? "var(--color-primary)"
      : props.color === "secondary"
      ? "var(--color-secondary)"
      : props.color || "inherit"};
`;
export const Heading = styled.h1`
  font-family: 'Inter', sans-serif;
  font-size:1.875rem;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || 700};
  line-height: normal;
  color: ${(props) =>
    props.color === "primary"
      ? "var(--color-primary)"
      : props.color === "secondary"
      ? "var(--color-secondary)"
      : props.color || "inherit"};
`;
// Body Typography
export const Body = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;

  font-weight: ${(props) => props.fontWeight || "400"};
  color: ${(props) =>
    props.color === "primary"
      ? "var(--color-primary)"
      : props.color === "secondary"
      ? "var(--color-secondary)"
      : props.color || "inherit"};
`;
// Label Typography
export const Label = styled.span`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  font-style: normal;
  font-weight: ${(props) => props.fontWeight || "normal"};
  line-height: normal;
  color: ${(props) =>
    props.status === "invalid"
      ? "red"
      : props.color === "primary"
      ? "var(--color-primary)"
      : props.color === "secondary"
      ? "var(--color-secondary)"
      : props.color || "inherit"};
`;
