import styled from "styled-components";
import { News } from "../api/dto/News";
import { timestampToDate } from "../core/helpers/timestampToDate";
import { ReactComponent as BookmarkIcon } from "../assets/icons/bookmark.svg";
import { ReactComponent as FilledBookmarkIcon } from "../assets/icons/filledBookmark.svg";

interface Props {
  item: News;
  isLatest?: boolean;
}

export const NewsCard = ({
  item: {
    id,
    category,
    image,
    url,
    summary,
    datetime,
    related,
    headline,
    source,
    bookmark,
  },
  isLatest,
}: Props) => {
  return (
    <Card url={image}>
      <Image alt={summary} src={image} />
      <Content>
        <ContentHeader>
          <Related>{related}</Related>
          {isLatest && <LatestMark>{"Latest research"}</LatestMark>}
        </ContentHeader>
        <ContentFooter>
          <Headline>{headline}</Headline>
          <Summary>{summary}</Summary>
          <CardNav>
            <Info>
              <Timestamp>{timestampToDate(datetime)}</Timestamp>
              <Divider>{"|"}</Divider>
              <Source>{source}</Source>
            </Info>
            <Bookmark>
              {bookmark ? <FilledBookmarkIcon /> : <BookmarkIcon />}
            </Bookmark>
          </CardNav>
        </ContentFooter>
      </Content>
    </Card>
  );
};

const Card = styled.div<{ url: string }>`
  position: relative;
  width: 280px;
  height: 425px;
  border-radius: 6px;
`;

const Image = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: var(--white);
  background: linear-gradient(180deg, rgba(28, 58, 82, 0) 0%, #05141b 75.5%);
  padding: 25px;
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Related = styled.span`
  font-size: 10px;
  border: 1px solid var(--white);
  border-radius: 30px;
  padding: 5px 15px;
`;

const LatestMark = styled.span`
  font-weight: bold;
  font-size: 8px;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  padding: 4px 8px;
  background-color: var(--red);
  align-self: center;
`;

const ContentFooter = styled.div``;

const Headline = styled.div`
  font-size: 20px;
  line-height: 28px;
  margin-bottom: 8px;
`;

const Summary = styled.div`
  font-size: 14px;
  line-height: 24px;
  margin-bottom: 18px;
  max-height: 24px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.5;
`;

const CardNav = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div``;

const Timestamp = styled.span`
  font-size: 12px;
  margin-right: 17px;
  opacity: 0.75;
`;

const Divider = styled.span`
  opacity: 0.35;
  margin-right: 17px;
`;

const Source = styled.span`
  font-weight: bold;
  font-size: 12px;
  opacity: 0.35;
`;

const Bookmark = styled.i`
  height: 12px;
  width: 12px;
  align-self: center;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;
