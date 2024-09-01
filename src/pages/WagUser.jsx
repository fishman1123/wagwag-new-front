import React from "react";
import styled from "styled-components";
import data from "../data.json";
import UserUploadWaggleList from "../components/list/UserUploadWaggleList";
import UserLikeWaggleList from "../components/list/UserLikeWaggleList";
import UserProfile from "../components/UserProfile";
import UserStats from "../components/UserStats";

const WagUser = () => {
    return (
        <>
            <Wrapper>
                <SideBar></SideBar>
                <MainArea>
                    <HeadArea>
                        <UserProfile />
                        <UserStats />
                    </HeadArea>
                    <UserUploadWaggleList posts={data}></UserUploadWaggleList>
                    <UserLikeWaggleList posts={data}></UserLikeWaggleList>
                </MainArea>
                <Footer></Footer>
            </Wrapper>
        </>
    )
}

export default WagUser;


// style components

const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: black;
`;

const SideBar = styled.div`
    width: 10.4vw;
    height: 62.5vw;
    background-color: gray;
`;

const MainArea = styled.div`
    display: flex;
    flex-direction: column;
    width: 80vw;
`;

const HeadArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Footer = styled.div`
  
`;

