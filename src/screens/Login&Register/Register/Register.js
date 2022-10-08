import imageLoginRegister from '../../../assets/imageLoginRegister/movies.jpg';
import {
    Container,
    ContainerForm,
    ContainerButtons,
    Error,
} from '../stylesLogin&Register';
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../../hooks/useAuthentication';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const { createUser, error: authError, loading } = useAuthentication();
    const navigate = useNavigate();

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        } else if (password.length < 6) {
            setError('Password must be at least 6 characters');
            return;
        }

        const user = {
            email: email,
            password: password,
        };

        createUser(user);
    };

    return (
        <Container>
            <ContainerForm>
                <form onSubmit={handleSubmit}>
                    <h1>Registre</h1>
                    <span>
                        Crie seu usuário para aproveitar os melhores filmes
                    </span>
                    <label>
                        <span>E-mail:</span>
                        <input
                            type='email'
                            name='email'
                            required
                            placeholder='E-mail do usuário'
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
                            placeholder='Digite uma senha'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <label>
                        <span>Confirme a senha:</span>
                        <input
                            autoComplete='on'
                            type='password'
                            name='confirmedPassword'
                            required
                            placeholder='Confirme a senha'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                    </label>
                    <ContainerButtons>
                        {!loading && <button>Registrar</button>}
                        {loading && <button disabled>Loading...</button>}
                        {!loading && (
                            <button
                                onClick={() => {
                                    navigate('/login');
                                }}
                            >
                                Login
                            </button>
                        )}
                        {loading && <button disabled>Login</button>}
                    </ContainerButtons>
                    {error && <Error>{error}</Error>}
                </form>
                <section>
                    <img src={imageLoginRegister} alt='Registered' />
                </section>
            </ContainerForm>
        </Container>
    );
};

export default Register;
