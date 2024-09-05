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

const UserLikeWaggleListItem = (props) => {
    const {post} = props;

    return (
        <>
            <Wrapper>
                <ThumbnailImage thumbnail={post.thumbnail}>
                    <View>▷&nbsp;&nbsp;{formatNumber(post.view)}</View>
                    <Account>{post.account}</Account>
                    <Like>♡&nbsp;&nbsp;{formatNumber(post.liked)}</Like>
                </ThumbnailImage>
                <TitleArea>
                    {post.mainTitle}
                </TitleArea>
            </Wrapper>
        </>
    );
}

export default UserLikeWaggleListItem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 1vw;
`;

const ThumbnailImage = styled.div`
    background-image: url(${(props) => props.thumbnail});
    background-size: 100% 101%;
    background-position: center;
    background-repeat: no-repeat;
    background-color: gray;
    width: 16.35vw;
    height: 21.72vw;
    display: grid;
    grid-template-rows: auto 1fr auto;
    grid-template-columns: 1fr 1fr;
    margin-top: 1.3vw;
`;

const View = styled.p`
    grid-row: 1 / 2;
    grid-column: 2 / 3;
    color: white;
    font-size: 0.8vw;
    justify-self: end;
    margin: 1vw 1.5vw 0 0;
`;

const Account = styled.p`
    grid-row: 3 / 4;
    grid-column: 1 / 2;
    color: white;
    font-size: 0.8vw;
    align-self: end;
    margin: 0 0 1vw 1.5vw;
`;

const Like = styled.p`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    color: white;
    font-size: 0.8vw;
    justify-self: end;
    align-self: end;
    margin: 0 1.5vw 1vw 0;
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
