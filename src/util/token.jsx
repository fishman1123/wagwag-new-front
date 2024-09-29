// src/utils/token.js

export const refreshToken = async () => {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    try {
        // Assume refresh token is stored in local storage
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await fetch(`${backendUrl}/api/v1/auth/refresh`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }), // Pass the refresh token if needed
        });

        // 401 response
        if (response.status === 401) {
            console.error('Refresh token is invalid or expired. Please log in again.');
            return null;
        }

        if (response.ok) {
            const data = await response.json();
            localStorage.setItem('accessToken', data.accessToken); // Update access token in local storage
            return data.accessToken;
        } else {
            console.error('Failed to refresh token');
            return null;
        }
    } catch (error) {
        console.error('Error during token refresh:', error);
        return null;
    }
};
