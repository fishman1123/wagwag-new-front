// src/utils/token.js

export const refreshToken = async () => {
    try {
        // Assume refresh token is stored in local storage
        const refreshToken = localStorage.getItem('refreshToken');
        const response = await fetch('/auth/refresh', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ refreshToken }), // Pass the refresh token if needed
        });

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
