// src/components/GoogleLoginHandler.jsx

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtoms } from '../recoil/userAtoms';

const GoogleLoginHandler = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);

  useEffect(() => {
    const handleGoogleLogin = async () => {
      const code = new URLSearchParams(window.location.search).get('code');

      if (code) {
        try {
          const backendUrl = import.meta.env.VITE_BACKEND_URL;
          const response = await fetch(`${backendUrl}/api/v1/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
          });

          if (!response.ok) {
            throw new Error('Failed to exchange authorization code');
          }

          const result = await response.json();
          const { accessToken, idToken, user, isNewcomer } = result;

          // 토큰을 로컬 스토리지에 저장
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('idToken', idToken);

          // Recoil 상태 업데이트
          setAuthState({
            isAuthenticated: true,
            user: user,
            accessToken: accessToken,
            idToken: idToken,
            isNewcomer: isNewcomer,
          });

          // 신규 사용자 여부에 따라 리디렉션
          if (isNewcomer) {
            navigate('/basic/nickname');
          } else {
            navigate('/main');
          }
        } catch (error) {
          console.error('Error during Google login:', error);
          navigate('/login'); // 오류 발생 시 로그인 페이지로 리디렉션
        }
      } else {
        // 인가 코드가 없을 경우 로그인 페이지로 리디렉션
        navigate('/login');
      }
    };

    handleGoogleLogin();
  }, [navigate, setAuthState]);

  return <div>구글 로그인 처리 중입니다...</div>;
};

export default GoogleLoginHandler;
