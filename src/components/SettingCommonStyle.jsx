// CommonStyles.js
import styled from 'styled-components';

// 버튼
export const CommonButton = styled.button`
  width: 100%;
  height: 3.5vw;
  border: none;
  border-radius: 0.5vw;
  background-color: #57f98e;
  color: white;
  font-size: 1vw;
  font-family: 'Pretendard-Medium';
  cursor: pointer;
  margin-top: 1.2vw;

  &:hover {
    background-color: #4de07e;
  }
`;

// 입력 필드
export const CommonInput = styled.input`
  width: 90%;
  height: 3.2vw;
  padding: 0.5vw;
  border: 1px solid #ccc;
  border-radius: 0.5vw;
  font-size: 1vw;
  margin-bottom: 1.2vw;
`;

// 제목
export const CommonTitle = styled.h1`
  font-size: 2vw;
  color: white;
  margin-bottom: 1vw;
  font-family: 'Pretendard-Bold';
`;

// 컨테이너
export const CommonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2vw;
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
`;
