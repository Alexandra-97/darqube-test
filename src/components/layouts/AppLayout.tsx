import { FC } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import { Header } from "../Header";
import { deviceSize } from "../../assets/theme/device";
import { Footer } from "../Footer";
import { newsSelector } from "../../modules/news/newsSelectors";
import { Spinner } from "../Spinner";

export const AppLayout: FC = ({ children }) => {
  const { loading } = useSelector(newsSelector);

  return (
    <Container>
      <Header />
      <ContentWrapper>{loading ? <Spinner /> : children}</ContentWrapper>
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
  display: flex;
  flex: 1;
`;
