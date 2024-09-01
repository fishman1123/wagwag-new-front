import React from "react";
import styled from "styled-components";
import ContributeBar from "./ContributeBar";
import infoIcon from "../assets/Icon/InfoIcon.png";
import cameraIcon from "../assets/Icon/CameraIcon.png";
import heartIcon from "../assets/Icon/HeartIcon.png";
import eyeIcon from "../assets/Icon/EyeIcon.png";

const UserStats = () => {
    return (
        <>
            <Wrapper>
                <Title>▶&nbsp;&nbsp;나의 지역 순위 기여도&nbsp;&nbsp;&nbsp;
                    <InfoIcon>
                        <img src={infoIcon}/>
                        <Tooltip>
                                <p>지역 순위 기여도란?</p><br />
                                <p>내 지역의 순위에 내가 다른 사람들에 비해 얼마나 많은 영향력을 끼쳤는지 보여줍니다.</p>
                                <p>기여도는 내가 업로드한 와글에 대한 좋아요 수와 조회수에 의해 계산됩니다.</p>
                        </Tooltip>
                    </InfoIcon>
                </Title>
                <ContributeBar></ContributeBar>
                <UserActivitySummaryContainer>
                    <UserUpload>
                        <SubTitle>내 와글</SubTitle>
                        <UploadCount>
                            <img src={cameraIcon}/>
                        </UploadCount>
                    </UserUpload>
                    <UserLike>
                        <SubTitle>내가 받은 좋아요</SubTitle>
                        <LikeCount>
                            <img src={heartIcon}/>
                        </LikeCount>
                    </UserLike>
                    <UserView>
                        <SubTitle>조회수</SubTitle>
                        <ViewCount>
                            <img src={eyeIcon}/>
                            17
                        </ViewCount>
                    </UserView>
                </UserActivitySummaryContainer>
            </Wrapper>
        </>
    );
}

export default UserStats;


// style component

const Wrapper = styled.div`
    margin: 11.3vw 9vw 8.2vw 10vw;
    width: 38.3vw;
    height: 31.4vw;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;

const Title = styled.div`
    color: white;
    font-size: 1.3vw;
    margin-bottom: 3.7vw;
`;

const InfoIcon = styled.div`
  position: relative;
  display: inline-block;
  width: 1.1vw;
  height: 1.1vw;
  margin-left: 0.5vw;

  img {
    width: 100%;
    height: 100%;
  }

  &:hover > div {
    visibility: visible;
    opacity: 1;
  }
`;

const Tooltip = styled.div`
  visibility: hidden;
  font-size: 0.8vw;
  width: 20vw;
  background-color: white;
  color: black;
  border-radius: 0.5vw;
  padding: 0.5vw;
  position: absolute;
  bottom: 120%;
  left: 50%;
  transform: translateX(-50%);
  opacity: 0;
  transition: opacity 0.3s;

  &::after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border-width: 0.5vw;
    border-style: solid;
    border-color: #333 transparent transparent transparent;
  }
`;

const UserActivitySummaryContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const SubTitle = styled.div`
    color: white;
    font-size: 1vw;
    margin-bottom: 1vw;
`;

const UserUpload = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const UploadCount = styled.div`
    width: 9.3vw;
    height: 8.2vw;
    background-color: #222222;
    border-radius: 1vw;
`;

const UserLike = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const LikeCount = styled.div`
    width: 9.3vw;
    height: 8.2vw;
    background-color: #222222;
    border-radius: 1vw;
`;

const UserView = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const ViewCount = styled.div`
    width: 9.3vw;
    height: 8.2vw;
    background-color: #222222;
    border-radius: 1vw;
    color: white;
`;

