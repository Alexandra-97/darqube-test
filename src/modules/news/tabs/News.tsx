import { useSelector } from "react-redux";
import { NewsCard } from "../../../components/NewsCard";
import { newsSelector } from "../newsSelectors";
import styled from "styled-components";
import { deviceSize } from "../../../assets/theme/device";

export const News = () => {
  const { news, latestNews } = useSelector(newsSelector);

  return (
    <Wrapper>
      {latestNews && <NewsCard item={latestNews} isLatest={true} />}
      <NewsList>
        {news &&
          news.length > 0 &&
          news
            .slice(0, 1)
            .map((item) => <NewsCard key={item.id} item={item} />)}
      </NewsList>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  & > a:first-child {
    margin: 0 0 10px;
  }
  @media screen and ${deviceSize.tablet} {
    flex-direction: row;
    & > a:first-child {
      margin: 0 24px 0 0;
    }
  }
`;

const NewsList = styled.div`
  display: grid;
  gap: 10px;
  flex: 1;
  @media screen and ${deviceSize.mobileM} {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
  @media screen and ${deviceSize.tablet} {
    gap: 18px;
  }
`;
