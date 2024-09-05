import styled from "styled-components";
import data from "../data.json";
import { useEffect, useState } from "react";

const Wrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background: #080808;
`;
const IconContainer = styled.div`
  font-family: "Pretendard";
  position: absolute;
  width: 36.26vw;
  height: 100vh;
  left: 34.2vw;
`;
const WaggleContainer = styled.div`
  position: relative;
  width: 31.55vw;
  height: 100%;
  background: #222222;
`;
const PlayIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: 1.56vw;
  position: absolute;
  right: 6vw;
  top: 1.6vw;
  color: #fff;
  padding-right: 0.2vw;
`;
const ArrowUpButton = styled.div`
  width: 3.64vw;
  height: 3.64vw;
  position: absolute;
  top: 23.6vw;
  right: 0;
  border: 1px solid #5e5e5e;
  border-radius: 0.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ArrowUpIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: 2.23vw;
  color: #525252;
  &:hover {
    color: #fff;
  }
`;
const ArrowDownIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  font-size: 2.23vw;
  color: #525252;
  &:hover {
    color: #fff;
  }
`;
const ArrowDownButton = styled.div`
  width: 3.64vw;
  height: 3.64vw;
  position: absolute;
  top: 29vw;
  right: 0;
  border: 1px solid #5e5e5e;
  border-radius: 0.8vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const LikeIconContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 3.6vw;
  height: 4.1vw;
  top: 40.8vw;
  left: 32.66vw;
  color: #fff;
  gap: 0.45vw;
`;
const LikeIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  display: flex;
  justify-content: center;
  font-size: 2.26vw;
`;
const LikeCount = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.99vw;
`;
const ShareIconContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 3.6vw;
  height: 4.1vw;
  top: 47.5vw;
  left: 32.66vw;
  color: #fff;
  gap: 0.45vw;
`;
const ShareIcon = styled.span.attrs({
  className: "material-symbols-outlined",
})`
  display: flex;
  justify-content: center;
  font-size: 2.26vw;
`;
const ShareCount = styled.div`
  display: flex;
  justify-content: center;
  font-size: 0.99vw;
`;
const View = styled.div`
  position: absolute;
  width: 4.37vw;
  height: 1.56vw;
  top: 1.6vw;
  right: 1.95vw;
  color: #fff;
  font-size: 1.35vw;
`;
const Account = styled.div`
  position: absolute;
  width: 5.1vw;
  height: 1.3vw;
  top: 47.86vw;
  left: 1.4vw;
  color: #fff;
  font-size: 0.93vw;
  font-weight: bold;
`;
const Title = styled.div`
  position: absolute;
  width: 15.74vw;
  height: 1.53vw;
  top: 50.1vw;
  left: 1.4vw;
  color: #fff;
  font-size: 1.14vw;
`;
function Detail() {
  const [like, setLike] = useState(0);
  const [share, setShare] = useState(0);
  const [isShared, setIsShared] = useState(false);
  const dummyData = data[0];
  useEffect(() => {
    setLike(dummyData.liked);
    setShare(dummyData.shared);
  }, []);

  const handleLikeCount = () => {
    setLike(like + 1);
  };
  const handleShareCount = () => {
    if (isShared) {
      // 이미 공유한 경우 return
      return;
    }
    setShare(share + 1);
    setIsShared(true);
  };

  return (
    <Wrapper>
      <IconContainer>
        <WaggleContainer>
          <PlayIcon>play_arrow</PlayIcon>
          <View>23.9K</View>
          <Account>{dummyData.account}</Account>
          <Title>{dummyData.mainTitle}</Title>
        </WaggleContainer>
        <ArrowUpButton>
          <ArrowUpIcon>arrow_upward</ArrowUpIcon>
        </ArrowUpButton>
        <ArrowDownButton>
          <ArrowDownIcon>arrow_downward</ArrowDownIcon>
        </ArrowDownButton>
        <LikeIconContainer onClick={handleLikeCount}>
          <LikeIcon>favorite</LikeIcon>
          <LikeCount>{like}</LikeCount>
        </LikeIconContainer>
        <ShareIconContainer onClick={handleShareCount}>
          <ShareIcon>share</ShareIcon>
          <ShareCount>{share}</ShareCount>
        </ShareIconContainer>
      </IconContainer>
    </Wrapper>
  );
}

export default Detail;
