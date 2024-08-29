import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 55.67vw;
  display: flex;
  flex-direction: column;
  padding-left: 1.3vw;
`;
const Container = styled.div`
  display: flex;
  gap: 1.04vw;
  :hover {
    cursor: pointer;
  }
`;
const ThumbnailImage = styled.img`
  width: 7.81vw;
  height: 10.93vw;
  border-radius: 14px;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: 46.87vw;
`;
const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  width: 46.87vw;
  margin-top: 0.52vw;
`;
const MainTitle = styled.div`
  color: #fff;
  line-height: 1.2;
  font-size: 1.66vw;
  width: 31.25vw;
`;
const IconArea = styled.div`
  display: flex;
  gap: 2.1vw;
`;
const LockIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  &:hover {
    cursor: pointer;
    color: #57f98e;
  }
  font-size: 1.66vw;
  color: #fff;
`;
const MoreIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  &:hover {
    cursor: pointer;
    color: #57f98e;
  }
  font-size: 1.66vw;
  color: #fff;
`;
const Figure = styled.div`
  color: #c5c5c5;
  font-size: 0.83vw;
  margin-top: 0.2vw;
`;
const Description = styled.div`
  color: #c5c5c5;
  line-height: 1.2;
  font-size: 0.83vw;
  margin-top: 0.9vw;
`;
function WaggleListItem(props) {
  const { post } = props;

  return (
    <Wrapper>
      <Container>
        <ThumbnailImage src={post.thumbnail} />
        <Info>
          <TitleArea>
            <MainTitle>{post.mainTitle}</MainTitle>
            <IconArea>
              <LockIcon>lock</LockIcon>
              <MoreIcon>more_vert</MoreIcon>
            </IconArea>
          </TitleArea>
          <Figure>
            조회수 {post.view}회 · 좋아요 {post.liked}개
          </Figure>
          <Description>{post.description}</Description>
        </Info>
      </Container>
    </Wrapper>
  );
}

export default WaggleListItem;
