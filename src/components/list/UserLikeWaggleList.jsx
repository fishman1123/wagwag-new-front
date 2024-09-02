import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import UserLikeWaggleListItem from "./UserLikeWaggleListItem";

const UserLikeWaggleList = (props) => {
    const { posts } = props;
    const navigate = useNavigate();
  
    return (
      <Wrapper>
        <HeadWrapper>
          <MainTitle>좋아요 한 와글</MainTitle>
          <MoreButton onClick={() => {navigate('/user/Liked')}}>모두보기</MoreButton>
        </HeadWrapper>
        <UserLikeList>
          {posts.map((post) => (
            <React.Fragment key={post.id}>
              <UserLikeWaggleListItem post={post} />
            </React.Fragment>
          ))}
        </UserLikeList>
      </Wrapper>
    );
}


export default UserLikeWaggleList;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const HeadWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const MainTitle = styled.h2`
  color: white;
  font-size: 1.56vw;
`;

const UserLikeList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  height: 26.3vw;
  padding: 0;
  margin: 0;

  &::-webkit-scrollbar{
    display: none;
  }
`;

const MoreButton = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1vw;
  width: 6.5vw;
  height: 2.8vw;
  background: transparent;
  border: 1px solid white;
  color: #fff;
  border-radius: 2.6vw;
  margin-right: 5.62vw;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;
