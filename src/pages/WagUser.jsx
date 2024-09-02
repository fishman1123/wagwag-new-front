import React from "react";
import styled from "styled-components";
import data from "../data.json";
import UserUploadWaggleList from "../components/list/UserUploadWaggleList";
import UserLikeWaggleList from "../components/list/UserLikeWaggleList";
import UserProfile from "../components/UserProfile";
import UserStats from "../components/UserStats";

const WagUser = () => {
    return (
            <Wrapper>
                <SideBar>사이드바</SideBar>
                <MainArea>
                    <HeadArea>
                        <UserProfile userData={userProfileData}/>
                        <UserStats userData={userProfileData}/>
                    </HeadArea>
                    <UserUploadWaggleList userData={userProfileData}></UserUploadWaggleList>
                    <UserLikeWaggleList posts={data}></UserLikeWaggleList>
                    <Footer>푸터</Footer>
                </MainArea>
            </Wrapper>
    )
}


export default WagUser;


// style components

const Wrapper = styled.div`
    width: calc(100vw - 10px);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
    `;

const SideBar = styled.div`
    width: 10vw;
    height: 62.5vw;
    background-color: gray;
    color: white;
    font-size: 2vw;
    `;

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 84.3vw;
`;

const HeadArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
`;

const Footer = styled.div`
    width: 100%;
    height: 10vw;
    background-color: gray;
    color: white;
    font-size: 2vw;
`;


/////////////////user dummy data///////////////////

const userProfileData = {
    id: 1,
    profileImg: "/profile.jpg", // 프로필 이미지 경로
    nickName: "waggle", // 닉네임
    email: "LGU+frontend@gmail.com", // 이메일
    region: "서대문구 대현동", // 지역 정보
    registerDate: "2024-08-11", // 가입일
    contribution: 50, // 기여도 (0~100%)
    posts: [
      {
        id: 101,
        title: "내 첫 번째 와글", // 게시글 제목
        likes: 1217, // 좋아요 수
        views: 18231, // 조회수
        createdAt: "2024-08-20", // 생성일
      },
      {
        id: 102,
        title: "비 오는 날 감성 브이로그",
        likes: 2114,
        views: 34121,
        createdAt: "2024-08-22",
      },
      {
        id: 103,
        title: "서울 구경기!",
        likes: 891,
        views: 9652,
        createdAt: "2024-08-25",
      },
      {
        id: 104,
        title: "아침 산책 브이로그",
        likes: 5232,
        views: 65442,
        createdAt: "2024-08-27",
      },
      {
        id: 105,
        title: "집에서 만드는 초간단 요리",
        likes: 34110,
        views: 521334,
        createdAt: "2024-08-30",
      },
      {
        id: 106,
        title: "도시 야경 촬영기",
        likes: 7128,
        views: 101212,
        createdAt: "2024-09-01",
      },
      {
        id: 107,
        title: "서울의 가을 풍경",
        likes: 1189,
        views: 20898,
        createdAt: "2024-09-05",
      },
      {
        id: 108,
        title: "주말 힐링 브이로그",
        likes: 2154,
        views: 349012,
        createdAt: "2024-09-10",
      },
      {
        id: 109,
        title: "독서하는 하루",
        likes: 6712,
        views: 78339,
        createdAt: "2024-09-15",
      },
      {
        id: 110,
        title: "나만의 커피 만들기",
        likes: 1134,
        views: 25672,
        createdAt: "2024-09-20",
      },
      {
        id: 111,
        title: "캠핑장에서의 하루",
        likes: 2011,
        views: 41280,
        createdAt: "2024-09-25",
      },
    ],
  };
  