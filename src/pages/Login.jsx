import settingBg from '../assets/settingBg.png';
import logoImage from '../assets/wagwagLogo.png';
import googleIcon from '../assets/google.png';
import naverIcon from '../assets/naver.png';
import kakaoIcon from '../assets/kakao.png';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userAtoms } from '../recoil/userAtoms';
import { useGoogleLogin } from '@react-oauth/google';  // Use hook instead of GoogleLogin component

const Login = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);

  // Use the GoogleLogin hook for manual triggering
  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (response) => {
      try {
        // Google returns the authorization code
        const { code } = response; // Extract the authorization code

        // Send the authorization code to your backend server for token exchange
        const backendResponse = await fetch('/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ code }), // Send authorization code to the server
        });

        const result = await backendResponse.json(); // Parse server response (tokens, user data)

        if (backendResponse.ok) {
          const { isNewcomer, user } = result;

          // Update Recoil state with the authenticated user data and newcomer flag
          setAuthState({
            isAuthenticated: true,
            user: user, // Backend should return user data
            isNewcomer: isNewcomer,
          });

          // Redirect based on newcomer status
          if (isNewcomer) {
            navigate('/basic/nickname');  // Newcomer, redirect to nickname
          } else {
            navigate('/main');  // Returning user, redirect to main
          }
        } else {
          console.error('Login failed: ', result.message);
        }
      } catch (error) {
        console.error('Error during login process: ', error);
      }
    },
    onError: () => {
      console.log('Login Failed');
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
    alt: "",
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

    &:hover {
      border: 1px solid white;
      color: white;
      transition: 0.5s ease;
    }
  `;

  const GoogleImg = styled.img.attrs({
    src: googleIcon,
    alt: "",
  })`
    position: absolute;
    width: 2vw;
    height: 2vw;
    left: 1.25vw;
  `;

  const NaverImg = styled.img.attrs({
    src: naverIcon,
    alt: "",
  })`
    position: absolute;
    width: 2vw;
    height: 2vw;
    left: 1.25vw;
  `;

  const KakaoImg = styled.img.attrs({
    src: kakaoIcon,
    alt: "",
  })`
    position: absolute;
    width: 2vw;
    height: 2vw;
    left: 1.25vw;
  `;

  return (
      <>
        <Wrapper>
          <LogoImg />
          <SettingTitle>로그인을 위한 계정을 선택해주세요</SettingTitle>
          <ButtonContainer>
            {/* Custom Google Login Button */}
            <Button type="button" onClick={login}>
              <GoogleImg />
              구글로 시작하기
            </Button>

            {/* Other buttons */}
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
  );
};

export default Login;
