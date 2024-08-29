import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { Navigate } from 'react-router-dom';
import { userAtoms } from '../recoil/userAtoms';
import { refreshToken as refreshAccessToken } from '../util/token'; // Assuming you have a refresh token function

const SecuredRoute = ({ children }) => {
    const { isAuthenticated, accessToken } = useRecoilValue(userAtoms); // Remove refreshToken from here
    const setAuthState = useSetRecoilState(userAtoms);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const checkAuthentication = async () => {
            if (isAuthenticated && accessToken) {
                // The user is authenticated, and access token exists
                setIsLoading(false);
            } else {
                // Try to refresh the token using HTTP-only cookie
                try {
                    const newAccessToken = await refreshAccessToken(); // No need to pass refreshToken
                    if (newAccessToken) {
                        // Update Recoil state with the new access token
                        setAuthState((prevState) => ({
                            ...prevState,
                            accessToken: newAccessToken,
                            isAuthenticated: true, // Mark the user as authenticated
                        }));
                        setIsLoading(false); // Authentication succeeded after token refresh
                    } else {
                        // Failed to refresh the token
                        setIsLoading(false);
                    }
                } catch (error) {
                    console.error('Error refreshing token:', error);
                    setIsLoading(false);
                }
            }
        };

        checkAuthentication();
    }, [isAuthenticated, accessToken, setAuthState]);

    if (isLoading) {
        // Show loading indicator while checking authentication/token refresh
        return <div>Loading...</div>;
    }

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If the user is authenticated, render the children (the protected component)
    return children;
};

export default SecuredRoute;
