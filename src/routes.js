import { lazy, Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { LoadingSpinner } from './components/UI/LoadingSpinner/LoadingSpinner';

const Login = lazy(() => import('./screens/Login&Register/Login/Login'));
const Register = lazy(() =>
    import('./screens/Login&Register/Register/Register')
);
const Home = lazy(() => import('./screens/Home/Home'));
const Checkout = lazy(() => import('./screens/Checkout/Checkout'));

export const Paths = () => {
    const user = useSelector((state) => state.auth.user);

    return (
        <Suspense fallback={<LoadingSpinner />}>
            <Routes>
                <Route
                    path='/'
                    element={user ? <Home /> : <Navigate to='/login' />}
                    exact
                />
                <Route
                    path='/login'
                    element={!user ? <Login /> : <Navigate to='/' />}
                    exact
                />
                <Route
                    path='/register'
                    element={!user ? <Register /> : <Navigate to='/' />}
                    exact
                />
                {user && <Route path='/check' element={<Checkout />} exact />}
            </Routes>
        </Suspense>
    );
};
