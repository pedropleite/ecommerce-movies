import { AppContainer } from './appStyles';
import { GlobalStyle } from './globalStyles';

import { Header } from './components/layout/Header/Header';
import { Paths } from './routes';

import { useAuthentication } from './hooks/useAuthentication';
import { AuthProvider } from './context/AuthContext';
import { CartProvider } from './context/CartContext';
import { FavoriteProvider } from './context/FavoriteContext';
import { onAuthStateChanged } from 'firebase/auth';
import { useState, useEffect } from 'react';
import { SearchProvider } from './context/SearchContext';

function App() {
    const [user, setUser] = useState(undefined);
    const [search, setSearch] = useState('');
    const { auth } = useAuthentication();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => setUser(user));
    }, [auth]);

    const receiveSearch = (query) => {
        setSearch(query);
    };

    return (
        <AuthProvider value={{ user }}>
            <CartProvider>
                <FavoriteProvider>
                    <SearchProvider value={search}>
                        <AppContainer>
                            <div>
                                <Header handleSearch={receiveSearch} />
                                <Paths />
                            </div>
                            <GlobalStyle />
                        </AppContainer>
                    </SearchProvider>
                </FavoriteProvider>
            </CartProvider>
        </AuthProvider>
    );
}

export default App;
