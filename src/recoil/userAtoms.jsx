// src/atoms/userAtoms.js
import { atom } from 'recoil';

export const userAtoms = atom({
    key: 'authState', // unique ID (with respect to other atoms/selectors)
    default: {
        isAuthenticated: false,
        user: null,
        isNewcomer: false, // Track if the user is new
    },
});
