import settingBg from '../assets/settingBg.png';
import logoImage from '../assets/wagwagLogo.png';
import googleIcon from '../assets/google.png';
import naverIcon from '../assets/naver.png';
import kakaoIcon from '../assets/kakao.png';
import styled from 'styled-components';
import { useSetRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import { userAtoms } from '../recoil/userAtoms';
import { useGoogleLogin } from '@react-oauth/google';  // Using the hook

const Login = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);

  // Google Login with Authorization Code flow
  const login = useGoogleLogin({
    flow: 'auth-code',
    onSuccess: async (response) => {
      try {
        // Extract the authorization code from the Google response
        const { code } = response;

        // Exchange the authorization code for ID token with Google (or get it from the initial response)
        const googleTokenResponse = await fetch(
            `https://oauth2.googleapis.com/token`, // Google API to exchange code for token
            {
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: new URLSearchParams({
                code: code,
                client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID, // Your Google Client ID
                client_secret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET, // Your Google Client Secret
                redirect_uri: import.meta.env.VITE_GOOGLE_REDIRECT_URI, // Your redirect URI
                grant_type: 'authorization_code',
              }),
            }
        );

        const googleTokens = await googleTokenResponse.json();
        console.log(googleTokens);
        const { id_token } = googleTokens; // Get ID token from Google's response

        // Store ID token in Recoil state
        setAuthState((prevState) => ({
          ...prevState,
          idToken: id_token, // Save the ID token
        }));

        // Send the ID token to your backend server for token exchange (access/refresh token)
        const backendResponse = await fetch('/auth/google', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ id_token }), // Send ID token to backend for token exchange
          credentials: 'include', // Ensures HTTP-only cookies are included (for refresh token)
        });

        // Check if the request was successful
        if (!backendResponse.ok) {
          throw new Error('Failed to exchange authorization code');
        }

        // Parse the result from the server (should include accessToken, user data, etc.)
        const result = await backendResponse.json();
        const { accessToken, user, isNewcomer } = result; // Now include the idToken

        // Update Recoil state with the authenticated user data, access token
        setAuthState({
          isAuthenticated: true,
          user: user, // Store user data
          accessToken: accessToken, // Store access token
          idToken: id_token, // Already stored earlier, but keeping it
          isNewcomer: isNewcomer, // Track if the user is new
        });

        // Redirect based on whether the user is a newcomer
        if (isNewcomer) {
          navigate('/basic/nickname');  // Newcomer, redirect to nickname setup
        } else {
          navigate('/main');  // Returning user, redirect to main page
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
          {/* Custom Google Login Button */}
          <Button type="button" onClick={login}>
            <GoogleImg />
            구글로 시작하기
          </Button>

          {/* Other login buttons */}
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
