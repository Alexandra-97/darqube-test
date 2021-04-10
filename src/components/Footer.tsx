import styled from "styled-components";
import { StyledSelect } from "./ui/Select";

export const Footer = () => {
  return (
    <Wrapper>
      <Text>Show</Text>
      <StyledSelect />
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 25px;
`;

const Text = styled.span`
  font-size: 12px;
  color: var(--lightGrey);
  margin-right: 10px;
`;
