import settingBg from "../assets/aaa.png";
import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
`;
const ProfileImage = styled.div`
  position: absolute;
  top: 21.3vw;
  width: 8.43vw;
  height: 8.43vw;
  border-radius: 50%;
  background: gray;
  &:hover {
    cursor: pointer;
  }
  background: ${(props) => (props.image ? `url(${props.image})` : "gray")};
  background-size: cover;
  background-position: center;
`;
const InputWrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 31.4vw;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  border: 2px solid #5e5e5e;
  width: 18.75vw;
  height: 3.43vw;
  border-radius: 15px;
  color: #fff;
  &::placeholder {
    color: #5e5e5e;
  }
  outline: none;
  background: transparent;
  padding: 0 10px;
`;
const Message = styled.div`
  color: #898989;
  margin-top: 0.62vw;
`;
const HighlightText = styled.span`
  color: ${(props) => props.color || ""};
`;
const NickName = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [profileImage, setProfileImage] = useState();
  const fileInputRef = useRef(null);
  const nicknames = ["하이", "닉네임", "여행중", "hi"]; // 닉네임 더미데이터

  useEffect(() => {
    // 특수문자를 검사하는 정규 표현식
    const specialCharacterRegex =
      /[\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]/g;

    if (!text.length) {
      setMessage("");
    } else if (text.length > 0 && text.length < 2) {
      setMessage(
        <>
          <HighlightText color="#FF7777">* 2 글자 이상의 </HighlightText>
          닉네임으로 정해주세요
        </>
      );
    } else if (specialCharacterRegex.test(text)) {
      setMessage(
        <>
          <HighlightText color="#FF7777">* 특수문자</HighlightText>는
          제거해주세요
        </>
      );
    } else if (nicknames.includes(text)) {
      setMessage(
        <>
          <HighlightText color="#FF7777">* 이미 사용 중</HighlightText>인
          닉네임입니다
        </>
      );
    } else {
      setMessage(
        <>
          <HighlightText color="#57F98E">* 사용가능한 </HighlightText>
          닉네임입니다
        </>
      );
    }
  }, [text]);

  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  const handlePreview = () => {
    if (fileInputRef.current.files !== null) {
      setProfileImage(URL.createObjectURL(fileInputRef.current?.files[0]));
    }
  };
  return (
    <Wrapper>
      <ProfileImage image={profileImage} onClick={handleImageClick}>
        <input
          type="file"
          style={{ display: "none" }}
          accept="image/*"
          onChange={handlePreview}
          ref={fileInputRef}
        />
      </ProfileImage>
      <InputWrapper>
        <Input
          type="text"
          placeholder="닉네임을 입력하세요"
          onChange={(e) => setText(e.target.value)}
        />
        <Message>{message}</Message>
      </InputWrapper>
    </Wrapper>
  );
};

export default NickName;
