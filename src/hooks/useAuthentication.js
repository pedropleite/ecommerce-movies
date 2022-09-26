import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
    signOut,
} from 'firebase/auth';
import { authorization } from '../firebase/config';
import { useState } from 'react';

export const useAuthentication = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const auth = authorization;

    const createUser = async (data) => {
        setLoading(true);

        try {
            const { user } = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await updateProfile(user);

            return user;
        } catch (error) {
            if (error.message.includes('password')) {
                setError('Password must be at least 6 characters');
            } else if (error.message.includes('email')) {
                setError('E-mail is already registered');
            } else {
                setError('Something went wrong');
            }
        }
        setLoading(false);
    };

    const logout = () => {
        signOut(auth);
    };

    const login = async (data) => {
        setLoading(true);
        setError(null);

        try {
            await signInWithEmailAndPassword(auth, data.email, data.password);
        } catch (error) {
            if (error.message.includes('user-not-found')) {
                setError('User not found');
            } else if (error.message.includes('wrong-password')) {
                setError('Wrong password');
            } else {
                setError('Something went wrong');
            }
        }
        setLoading(false);
    };

    return {
        auth,
        createUser,
        error,
        loading,
        logout,
        login,
    };
};
