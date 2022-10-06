import { AppContainer } from './appStyles';
import { GlobalStyle } from './globalStyles';

import { Header } from './components/layout/Header/Header';
import { Paths } from './routes';

import { useAuthentication } from './hooks/useAuthentication';
import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';

import { authActions } from './store/authSlice';
import { useDispatch } from 'react-redux';

function App() {
    const { auth } = useAuthentication();
    const dispatch = useDispatch();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            dispatch(authActions.changeUser(user));
        });
    }, [auth, dispatch]);

    return (
        <AppContainer>
            <div>
                <Header />
                <Paths />
            </div>
            <GlobalStyle />
        </AppContainer>
    );
}

export default App;
