import styled from "styled-components";
import WaggleList from "../components/list/WaggleList";
import data from "../data.json";

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;
// 사이드바 영역
const SideBar = styled.div`
  width: 12.65vw;
  height: 100vh;
`;
// 영상 리스트 영역
const Contents = styled.div`
  width: calc(100vw - 12.65vw);
  height: 100vh;
  overflow-y: auto;

  &::-webkit-scrollbar {
    display: none;
  }
`;
const MainTitle = styled.div`
  font-family: "Pretendard";
  width: calc(100vw - 12.65vw);
  color: #fff;
  font-size: 2.1vw;
  font-width: bold;
  margin: 2.65vw 3vw;
`;
const MainContent = styled.div`
  display: flex;
  top: 6.66vw;
  margin: 0 0 0 4vw;
`;
const WaggleContainer = styled.div`
  width: 60.41vw;
`;
// 검색 영역
const SearchArea = styled.div`
  width: 22.9vw;
  height: 100vh;
`;

export const UserUploadedList = () => {
  return (
    <Wrapper>
      <SideBar></SideBar>
      <Contents>
        <MainTitle>&lt; 내가 업로드한 영상</MainTitle>
        <MainContent>
          <WaggleContainer>
            <WaggleList posts={data} />
          </WaggleContainer>
          <SearchArea></SearchArea>
        </MainContent>
      </Contents>
    </Wrapper>
  );
};

export default UserUploadedList;
