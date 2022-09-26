import {
    HeaderContainer,
    LogoContainer,
    SearchContainer,
    ButtonsContainer,
    ContainerLogin,
} from './styles';

import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import { HeaderCart } from './HeaderCart/HeaderCart';
import { HeaderFavorite } from './HeaderFavorite/HeaderFavorite';

import { useAuth } from '../../../context/AuthContext';
import { useAuthentication } from '../../../hooks/useAuthentication';
import { useNavigate } from 'react-router-dom';

export const Header = (props) => {
    const { user } = useAuth();
    const { logout } = useAuthentication();

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <LogoContainer>
                <span>Logo</span>
            </LogoContainer>
            <SearchContainer style={{ backgroundImage: `url(${SearchIcon})` }}>
                <input
                    type='text'
                    placeholder='Pesquisa'
                    onChange={(e) => {
                        props.handleSearch(e.target.value);
                    }}
                />
            </SearchContainer>
            <ButtonsContainer>
                {user && (
                    <>
                        <HeaderFavorite />
                        <HeaderCart />
                        <LogoutIcon
                            sx={{
                                fontSize: 26,
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                            onClick={() => {
                                navigate('/login');
                                logout();
                            }}
                        />
                    </>
                )}
                {!user && (
                    <ContainerLogin
                        onClick={() => {
                            navigate('/login');
                        }}
                    >
                        <span>LOGIN</span>
                        <LoginIcon
                            sx={{
                                fontSize: 26,
                                color: '#fff',
                                cursor: 'pointer',
                            }}
                        />
                    </ContainerLogin>
                )}
            </ButtonsContainer>
        </HeaderContainer>
    );
};
