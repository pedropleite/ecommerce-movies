import {
    Container,
    ContainerForm,
    ContainerButtons,
    Error,
} from '../stylesLogin&Register';
import imageLoginRegister from '../../../assets/imageLoginRegister/movies.jpg';

import { useAuthentication } from '../../../hooks/useAuthentication';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { login, error: authError, loading } = useAuthentication();
    const navigate = useNavigate();

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    const handleSubmit = (e) => {
        e.preventDefault();

        setError('');

        if (email.trim() === '' || password.trim() === '') {
            setError('All fields are required');
            return;
        }

        const user = {
            email: email,
            password: password,
        };

        login(user);
    };

    return (
        <Container>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <h1>Login</h1>
                    <span>Faça login e assista seus filmes favoritos</span>
                    <label>
                        <span>E-mail:</span>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='Digite seu e-mail'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Senha:</span>
                        <input
                            autoComplete='on'
                            type='password'
                            name='password'
                            required
                            placeholder='Digite sua senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <ContainerButtons>
                        {!loading && <button>Login</button>}
                        {loading && <button disabled>Loading...</button>}
                        {!loading && (
                            <button
                                onClick={() => {
                                    navigate('/register');
                                }}
                            >
                                Registrar
                            </button>
                        )}
                        {loading && <button disabled>Registrar</button>}
                    </ContainerButtons>
                    {error && <Error>{error}</Error>}
                </form>
                <section>
                    <img src={imageLoginRegister} alt='Movies' />
                </section>
            </ContainerForm>
        </Container>
    );
};
