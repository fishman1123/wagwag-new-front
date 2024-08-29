// src/utils/token.js

export const refreshToken = async () => {
    try {
        const response = await fetch('/auth/refresh', {
            method: 'POST',
            credentials: 'include', // Ensure cookies (including HTTP-only) are sent with the request
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            const data = await response.json();
            return data.accessToken; // Return the new access token
        } else {
            console.error('Failed to refresh token');
            return null;
        }
    } catch (error) {
        console.error('Error during token refresh:', error);
        return null;
    }
};
