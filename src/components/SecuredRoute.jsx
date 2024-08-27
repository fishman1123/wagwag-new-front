// src/components/ProtectedRoute.js
import { useRecoilValue } from 'recoil';
import { Navigate } from 'react-router-dom';
import { userAtoms } from '../recoil/userAtoms';

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useRecoilValue(userAtoms);

    // If the user is not authenticated, redirect to the login page
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // If the user is authenticated, render the children (the protected component)
    return children;
};

export default ProtectedRoute;
