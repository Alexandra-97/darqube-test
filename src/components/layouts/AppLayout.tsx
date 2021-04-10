import styled from "styled-components";
import { FC } from "react";
import { Header } from "../Header";
import { deviceSize } from "../../assets/theme/device";
import { Footer } from "../Footer";

export const AppLayout: FC = ({ children }) => {
  return (
    <Container>
      <Header />
      <ContentWrapper>{children}</ContentWrapper>
      <Footer />
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
  padding: 20px;
  @media screen and ${deviceSize.tablet} {
    padding: 40px 31px;
  }
`;

const ContentWrapper = styled.main`
  flex: 1;
`;
