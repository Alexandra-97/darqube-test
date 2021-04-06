import styled from "styled-components";
import { FC } from "react";
import { Header } from "../Header";

export const AppLayout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
};

const Container = styled.div`
  min-height: 100vh;
  height: 100%;
  background-color: var(--grey);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 40px 31px;
`;
