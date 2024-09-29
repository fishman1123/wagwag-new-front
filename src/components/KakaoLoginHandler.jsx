// src/components/KakaoLoginHandler.jsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtoms } from '../recoil/userAtoms';
import LandingPage from '../pages/LandingPage';

const KakaoLoginHandler = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  // URL에서 인가 코드 추출
  const extractKakaoCode = () => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('code');
  };

  useEffect(() => {
    const handleKakaoLogin = async () => {
      const code = extractKakaoCode();

      if (code) {
        try {
          // Send the authorization code to the backend server to exchange for tokens
          const backendResponse = await fetch(`${backendUrl}/auth/kakao`, {
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

          // store tokens in local storage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);

          // update recoil state
          setAuthState({
            isAuthenticated: true,
            user: user,
            accessToken: accessToken,
            idToken: null, // No ID token for Kakao
            isNewcomer: isNewcomer,
          });
          console.log(userAtoms)

          // Redirect based on whether the user is a newcomer
          if (isNewcomer) {
            navigate('/basic/nickname');
          } else {
            navigate('/main');
          }
        } catch (error) {
          console.error('Error during Kakao login:', error);
        }
      } else {
        navigate('/login');
      }
    };

    handleKakaoLogin();
  }, []);

  return <LandingPage />;
};

export default KakaoLoginHandler;
