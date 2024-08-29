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
import { useEffect } from 'react';

const Login = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);

  // Kakao Login function to redirect user to Kakao login page
  const kakaoLogin = () => {
    const kakaoClient = import.meta.env.VITE_KAKAO_CLIENT_ID;
    const kakaoRedirect = import.meta.env.VITE_KAKAO_REDIRECT_URL;
    const kakaoAuthUrl = `https://kauth.kakao.com/oauth/authorize?client_id=${kakaoClient}&redirect_uri=${kakaoRedirect}&response_type=code`;
    window.location.href = kakaoAuthUrl;
  };

  // Extract Kakao authorization code from the URL
  const extractKakaoCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  };

  // Handle Kakao login after redirection
  const handleKakaoLogin = async () => {
    const code = extractKakaoCode();
    if (code) {
      try {
        // Send the authorization code to the backend server to exchange for tokens
        const backendResponse = await fetch('/auth/kakao', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
        });

        if (!backendResponse.ok) {
          throw new Error('Failed to exchange authorization code');
        }

        // Parse the result from the backend (includes accessToken, refreshToken, user info)
        const result = await backendResponse.json();
        const { accessToken, refreshToken, user, isNewcomer } = result;

        // Store tokens in local storage
        localStorage.setItem('accessToken', accessToken);
        localStorage.setItem('refreshToken', refreshToken);

        // Update Recoil state
        setAuthState({
          isAuthenticated: true,
          user: user,
          accessToken: accessToken,
          idToken: null, // No ID token for Kakao
          isNewcomer: isNewcomer,
        });

        // Redirect based on whether the user is a newcomer
        if (isNewcomer) {
          navigate('/basic/nickname');
        } else {
          navigate('/main');
        }
      } catch (error) {
        console.error('Error during Kakao login:', error);
      }
    }
  };

  // Call handleKakaoLogin when the component is loaded (if there is a Kakao code in the URL)
  useEffect(() => {
    handleKakaoLogin();
  }, []);

  // Google login (same as before)
  const googleLogin = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (response) => {
      try {
        const { code } = response;
        const backendResponse = await fetch('/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }),
          credentials: 'include',
        });

        if (!backendResponse.ok) {
          throw new Error('Failed to exchange authorization code');
        }

        const result = await backendResponse.json();
        const { accessToken, idToken, user, isNewcomer } = result;

        setAuthState({
          isAuthenticated: true,
          user: user,
          accessToken: accessToken,
          idToken: idToken,
          isNewcomer: isNewcomer,
        });

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

  // Styled components
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
          <Button type="button" onClick={googleLogin}>
            <GoogleImg />
            구글로 시작하기
          </Button>

          <Button type="submit">
            <NaverImg />
            네이버로 시작하기
          </Button>
          <Button type="button" onClick={kakaoLogin}>
            <KakaoImg />
            카카오로 시작하기
          </Button>
        </ButtonContainer>
      </Wrapper>
  );
};

export default Login;
