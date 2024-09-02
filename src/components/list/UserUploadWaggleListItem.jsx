import React from "react";
import styled from "styled-components";

// view, like 표기 형식 설정
const formatNumber = (num) => {
    const roundNumber = (value) => {
      const rounded = (Math.round(value * 10) / 10).toFixed(1);
      return rounded.endsWith('.0') ? rounded.slice(0, -2) : rounded;
    };

    if (num >= 1000000000) {
      return `${roundNumber(num / 1000000000)}B`;
    } else if (num >= 1000000) {
      return `${roundNumber(num / 1000000)}M`;
    } else if (num >= 1000) {
      return `${roundNumber(num / 1000)}K`;
    }
    return num.toString();
};

const UserUploadWaggleListItem = ({ post }) => {
  return (
    <>
      <Wrapper>
        <ThumbnailImage img={post.img}>
          <View>▷&nbsp;&nbsp;{formatNumber(post.views)}</View>
          <Like>♡&nbsp;&nbsp;{formatNumber(post.likes)}</Like>
        </ThumbnailImage>
        <TitleArea>
          {post.title}
        </TitleArea>
      </Wrapper>
    </>
  );
}

export default UserUploadWaggleListItem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1vw;
`;

const ThumbnailImage = styled.div`
    background-image: url(${(props) => props.img});
    background-size: 100% 101%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: gray;
    width: 16.35vw;
    height: 21.72vw;
    border-radius: 0.3vw;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    margin-top: 1.3vw;
`;

const View = styled.p`
    margin: 1vw 1.5vw 0 0;
    color: white;
    font-size: 0.8vw;
`;

const Like = styled.p`
    margin: 0 1.5vw 1vw;
    color: white;
    font-size: 0.8vw;
`;

const TitleArea = styled.p`
    color: white;
    width: 16vw;
    font-size: 1.1vw;
    margin-top: 0.65vw;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
`;
