import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Navigate, useNavigate } from 'react-router-dom';
import { userAtoms } from '../recoil/userAtoms';
import { refreshToken as refreshAccessToken } from '../util/token'; // Token refresh logic
import LandingPage from '../pages/LandingPage';

const SecuredRoute = ({ children }) => {
    const { isAuthenticated } = useRecoilValue(userAtoms);
    const setAuthState = useSetRecoilState(userAtoms);
    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkAuthentication = async () => {
            const accessToken = localStorage.getItem('accessToken'); // Retrieve token from local storage
            if (isAuthenticated && accessToken) {
                setIsLoading(false);
            } else {
                // Token needs to be refreshed
                try {
                    const newAccessToken = await refreshAccessToken(); // Fetch new token
                    if (newAccessToken) {
                        localStorage.setItem('accessToken', newAccessToken); // Update local storage
                        setAuthState(prevState => ({
                            ...prevState,
                            accessToken: newAccessToken,
                            isAuthenticated: true,
                        }));
                        setIsLoading(false);
                    } else {
                        console.error('Failed to refresh token or received 401 response.');
                        navigate('/login');
                    }
                } catch (error) {
                    console.error('Error refreshing token:', error);
                    setIsLoading(false);
                }
            }
        };

        checkAuthentication();
    }, [isAuthenticated, setAuthState]);

    if (isLoading) {
        return <LandingPage />;
    }

    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default SecuredRoute;
