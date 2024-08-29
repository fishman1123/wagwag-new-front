import settingBg from '../assets/settingBg.png';
import logoImage from '../assets/wagwagLogo.png';
import googleIcon from '../assets/google.png';
import naverIcon from '../assets/naver.png';
import kakaoIcon from '../assets/kakao.png';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userAtoms } from '../recoil/userAtoms';
import { useGoogleLogin } from '@react-oauth/google';

const Login = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);

  // 구글로 오픈 id 요청
  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (response) => {
      try {
        // 코드로 리스폰스 할당
        const { code } = response;

        // 토큰 교환을 위한 리퀘스트
        const backendResponse = await fetch('/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }), // 객체화
          credentials: 'include', // http-cookie only 포한 유무 확인?
        });


        if (!backendResponse.ok) {
          throw new Error('Failed to exchange authorization code');
        }

        // 파싱
        const result = await backendResponse.json();
        const { accessToken, idToken, user, isNewcomer } = result;

        // 리코일 업데이트
        setAuthState({
          isAuthenticated: true,
          user: user,
          accessToken: accessToken,
          idToken: idToken,
          isNewcomer: isNewcomer,
        });

        // 신규 유저 구분
        if (isNewcomer) {
          navigate('/basic/nickname');
        } else {
          navigate('/main');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    },
    onError: () => {
      console.error('Login Failed');
    },
  });

  // 스타일 컴포넌트
  const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  const LogoImg = styled.img.attrs({
    src: logoImage,
    alt: '',
  })`
    top: 15.3vw;
    position: absolute;
    width: 15.6vw;
    height: 2.6vw;
  `;

  const SettingTitle = styled.h1`
    font-family: 'Pretendard-SemiBold';
    position: absolute;
    text-align: center;
    color: white;
    font-size: 1.35vw;
    top: 20vw;
  `;

  const ButtonContainer = styled.div`
    position: absolute;
    top: 24.5vw;
  `;

  const Button = styled.button`
    width: 36.25vw;
    height: 4.6vw;
    margin-top: 1.25vw;
    background-color: rgba(8, 8, 8, 0.3);
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

    &:hover {
      border: 1px solid white;
      color: white;
      transition: 0.5s ease;
    }
  `;

  const GoogleImg = styled.img.attrs({
    src: googleIcon,
    alt: '',
  })`
    position: absolute;
    width: 2vw;
    height: 2vw;
    left: 1.25vw;
  `;

  const NaverImg = styled.img.attrs({
    src: naverIcon,
    alt: '',
  })`
    position: absolute;
    width: 2vw;
    height: 2vw;
    left: 1.25vw;
  `;

  const KakaoImg = styled.img.attrs({
    src: kakaoIcon,
    alt: '',
  })`
    position: absolute;
    width: 2vw;
    height: 2vw;
    left: 1.25vw;
  `;

  return (
      <Wrapper>
        <LogoImg />
        <SettingTitle>로그인을 위한 계정을 선택해주세요</SettingTitle>
        <ButtonContainer>
          <Button type="button" onClick={login}>
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
  );
};

export default Login;

