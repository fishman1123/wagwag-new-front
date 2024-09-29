// GoogleLoginHandler.jsx

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { userAtoms } from '../recoil/userAtoms';
import LandingPage from '../pages/LandingPage';

const GoogleLoginHandler = () => {
  const navigate = useNavigate();
  const setAuthState = useSetRecoilState(userAtoms);
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const handleGoogleLogin = async () => {
      const code = new URLSearchParams(window.location.search).get('code');

      if (code) {
        try {

          // Send the authorization code to the backend server to exchange for tokens
          const response = await fetch(`${backendUrl}/api/v1/auth/google`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ code }),
          });

          if (!response.ok) {
            throw new Error('Failed to exchange authorization code');
          }

          // Parse the result from the backend (includes accessToken, refreshToken, user info)
          const result = await response.json();
          const { accessToken, idToken, user, isNewcomer } = result;

          // store tokens in local storage
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('idToken', idToken);

          // update recoil state
          setAuthState({
            isAuthenticated: true,
            user: user,
            accessToken: accessToken,
            idToken: idToken,
            isNewcomer: isNewcomer,
          });

          // Redirect based on whether the user is a newcomer
          if (isNewcomer) {
            navigate('/basic/nickname');
          } else {
            navigate('/main');
          }
        } catch (error) {
          console.error('Error during Google login:', error);
          navigate('/login');
        }
      } else {
        navigate('/login');
      }
    };

    handleGoogleLogin();
  }, [navigate, setAuthState]);

  return <LandingPage />;
};

export default GoogleLoginHandler;
