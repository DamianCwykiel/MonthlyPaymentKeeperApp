import { firebase, googleAuthProvider, facebookAuthProvider } from '../firebase/firebase';

//login
export const login = (uid) => ({
    type: 'LOGIN',
    uid
});

export const startLogin = () => {
    return () => {
        return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};

export const startLoginFb = () => {
    return () => {
        return firebase.auth().signInWithPopup(facebookAuthProvider);
    };
};

//logout
export const logout = () => ({
    type: 'LOGOUT'
});

export const startLogout = () => {
    return () => {
        return firebase.auth().signOut();
    };
};