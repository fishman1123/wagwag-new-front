import profile from "../assets/profile.jpg";
import logoImage from "../assets/wagwagLogo.png";
import { useEffect, useState, useRef } from "react";
import styled from "styled-components";

// import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
// import { userAtoms } from '../recoil/userAtoms';

const LogoImg = styled.img.attrs({
  src: logoImage,
  alt: "",
})`
  top: 3.4vw;
  left: 3.6vw;
  position: absolute;
  width: 9.2vw;
  height: 1.5vw;
`;

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
  background: ${(props) => (props.image ? `url(${props.image})` : "gray")};
  background-size: cover;
  background-position: center;
  &:hover {
    cursor: pointer;
  }
`;

const SettingsmallTitle = styled.h2`
    font-family: 'Pretendard-Medium';
    position: absolute;
    text-align: center;
    color: white;
    font-size: 1vw;
    top: 35.4vw;
`;

const ColorText = styled.span`
  color: #57F98E;
  font-family: "Pretendard-Medium";
  position: absolute;
  text-align: center;
  color: white;
  font-size: 1.35vw;
 top: 12vw;
 `;


const SettingTitle = styled.h1`
  font-family: "Pretendard-Medium";
  position: absolute;
  text-align: center;
  color: white;
  font-size: 1.35vw;
  top: 12vw;
`;

const SaveButton = styled.button`
  width: 7vw;
  height: 3.4vw;
  margin-top: 43.4vw;
  background-color: rgba(255, 255, 255, 0.8);
  color: #080808;
  font-family: "Pretendard-Medium";
  border-radius: 0.8vw;
  border: 1px solid #787878;
  transition: 0.5s ease;
  text-align: center;
  font-size: 1.14vw;
  align-items: center;
  justify-content: center;
  display: flex;
  cursor: pointer;

  &:hover {
    border: 1px solid white;
    color: #080808;
    background-color: white;
    transition: 0.5s ease;
  }
`;

const NavWrapper = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavItem = styled.div`
  position: relative;
  width: 2.4vw;
  padding: 0.1vw;
  text-align: center;
  display: flex;
  margin: 0.5vw;
  background: #474747;
  justify-content: space-around;
  border-radius: 5px;
  top: 50vw;
`;

const InputWrapper = styled.div`
  width: 18.75vw;
  height: 5.26vw;
  display: flex;
  flex-direction: column;
  gap: 0.62vw;
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
    font-size: 1.14vw;
  }
  outline: none;
  background: transparent;
  padding: 0 1.25vw;
  font-size: 1.14vw;
`;

const Message = styled.div`
  font-family: "Pretendard-Medium";
  width: 18.75vw;
  height: 1.2vw;
  font-size: 1vw;
  color: white;
`;

const HighlightText = styled.span`
  color: ${(props) => props.color || "inherit"};
`;

const NickName = () => {
  const [text, setText] = useState("");
  const [message, setMessage] = useState("");
  const [profileImage, setProfileImage] = useState(profile);
  const fileInputRef = useRef(null);
  const nicknames = ["example1", "example2"]; // Example nicknames array
  const navigate = useNavigate();

  useEffect(() => {
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
      setProfileImage(URL.createObjectURL(fileInputRef.current.files[0]));
    }
  };

  const handleSaveButtonClick = () => {
    // "사용가능한 닉네임입니다"가 메시지에 포함되어 있는지 확인
    if (
      message.props.children[0].props.color === '#57F98E'  // 첫 번째 자식의 색상이 #57F98E(녹색)인지 확인
    ) {
      navigate('/basic/region');  // 녹색 메시지라면 다음 페이지로 이동
    } else {
      navigate('/basic/nickName');  // 그렇지 않으면 닉네임 설정 페이지에 남음
    }
  };

  return (
    <div>
      <LogoImg />
      <Wrapper>
        <SettingTitle>닉네임을 설정해 주세요</SettingTitle>
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
        <SaveButton onClick={handleSaveButtonClick}>확인</SaveButton>
        <NavWrapper>
          <NavItem style={{ backgroundColor: '#D9D9D9' }} />
          <NavItem />
          <NavItem />
        </NavWrapper>
      </Wrapper>
    </div>
  );
};

export default NickName;
