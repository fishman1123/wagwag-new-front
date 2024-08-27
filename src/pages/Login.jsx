import settingBg from '../assets/settingBg.png';
import logoImage from '../assets/wagwagLogo.png';
import googleIcon from '../assets/google.png';
import naverIcon from '../assets/naver.png';
import kakaoIcon from '../assets/kakao.png';
import styled from 'styled-components';

// import { GoogleOAuthProvider } from '@react-oauth/google';


const Login = () => {

  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `

  const LogoImg = styled.img.attrs({ //로고 이미지
    src: logoImage,
    alt: "",
  })`
        top:15.3vw;
        position:absolute;
        width: 15.6vw;
        height: 2.6vw;
    `

  const SettingTitle = styled.h1` //로그인 안내 텍스트
        margin:0;
        font-family: 'Pretendard-Bold';
        position: absolute;
        text-align: center;
        color: white;
        font-size: 1.35vw;
        top: 20vw;
    `

  const ButtonContainer = styled.div` //계정선택 버튼들을 감싸는 컨테이너
        position: absolute;
        top: 24.5vw;
    `;

  const Button = styled.button`   //버튼 스타일
        width: 36.25vw;
        height: 4.6vw;
        margin-top: 1.25vw;
        background-color: rgba(8,8,8,0.3);
        color: #787878;
        font-family: 'Pretendard-Medium';
        border-radius: 1vw;
        border: 1px solid #787878;
        transition: 0.5s ease;
        text-align: center;
        font-size: 1.45vw;
        align-items: center;
        justify-content: center;
        display: flex;
        cursor: pointer;

        &:hover { //마우스호버 시 변경
            border: 1px solid white;
            color: white;
            transition: 0.5s ease;
        }
    `;

  const GoogleImg = styled.img.attrs({ //구글로고
    src: googleIcon,
    alt: "",
  })`
        position:absolute;
        width: 2vw;
        height: 2vw;
        left: 1.25vw;
    `

  const NaverImg = styled.img.attrs({ //네이버로고
    src: naverIcon,
    alt: "",
  })`
        position:absolute;
        width: 2vw;
        height: 2vw;
        left: 1.25vw;
    `

  const KakaoImg = styled.img.attrs({ //카카오로고
    src: kakaoIcon,
    alt: "",
  })`
        position:absolute;
        width: 2vw;
        height: 2vw;
        left: 1.25vw;
    `

  return (
    <>
      {/* <div><h1 className="font-thin">로그인</h1></div> */}
      <Wrapper>
        <LogoImg />
        <SettingTitle>로그인을 위한 계정을 선택해주세요</SettingTitle>
        <ButtonContainer>
          <Button type="submit">
            <GoogleImg />
            구글로 시작하기
          </Button>
          <Button type="submit">
            <NaverImg />
            네이버로 시작하기
          </Button>
          <Button type="submit">
            <KakaoImg />
            카카오로 시작하기
          </Button>
        </ButtonContainer>
      </Wrapper>
    </>
  )
}


export default Login;

