import { StrictMode } from 'react';
import { RouterProvider } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import { RouterObject } from './RouterList'; // Import RouterObject instead of RouterList
import './styles/index.css';
import { RecoilRoot } from 'recoil';
import { GoogleOAuthProvider } from '@react-oauth/google'; // Import GoogleOAuthProvider

const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

createRoot(document.getElementById('root')).render(
    <StrictMode>
        {/* Reintroduce GoogleOAuthProvider to provide context for GoogleLogin */}
        <GoogleOAuthProvider clientId={clientId}>
            <RecoilRoot>
                <RouterProvider router={RouterObject} />
            </RecoilRoot>
        </GoogleOAuthProvider>
    </StrictMode>,
);
