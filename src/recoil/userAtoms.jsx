import {atom, selector} from 'recoil';

export const userAtoms = atom({
    key: 'authState', // Unique ID (with respect to other atoms/selectors)
    default: {
        isAuthenticated: false, // Track if the user is authenticated
        user: null, // Store user data
        isNewcomer: false, // Track if the user is new
        accessToken: null, // Store the access token for making API requests
        idToken: null, // Store the ID token for user authentication and identity claims
    },
});

export const newComerAtoms = atom({
    key: 'newOneState', // Unique ID (with respect to other atoms/selectors)
    default: {
        userNickName: null, // Track if the user is authenticated
        userRegion: null, // Store user data
        userCategory: [], // Track if the user is new
    },
});











