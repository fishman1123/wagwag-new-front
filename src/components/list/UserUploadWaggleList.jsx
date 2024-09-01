import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import UserUploadWaggleListItem from "./UserUploadWaggleListItem";

const UserUploadWaggleList = ({ userData }) => {
  const navigate = useNavigate();
  const posts = userData.posts;

  return (
    <Wrapper>
      <HeadWrapper>
        <MainTitle>업로드 한 와글</MainTitle>
        <MoreButton onClick={() => { navigate('/user/uploaded') }}>모두보기</MoreButton>
      </HeadWrapper>
      <UserUploadList>
        {posts.map((post) => (
          <React.Fragment key={post.id}>
            <UserUploadWaggleListItem post={post} /> {/* post 전달 */}
          </React.Fragment>
        ))}
      </UserUploadList>
    </Wrapper>
  );
}

export default UserUploadWaggleList;

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

const UserUploadList = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  width: 100%;
  height: 26.3vw;

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
  margin-right: 2.5vw;
  cursor: pointer;

  &:hover {
    background: #333;
  }
`;
