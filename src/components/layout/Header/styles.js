import styled from 'styled-components';

import SearchIcon from '../../../assets/icon/search-interface-symbol.png';

export const HeaderContainer = styled.header`
    background: #8dd7cf;
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 3.4rem;
    padding: 0 2rem;
    width: 100%;
    position: fixed;
    z-index: 100;

    @media (max-width: 600px) {
        flex-direction: column;
        gap: 1rem;
        padding: 1rem 0;
    }
`;

export const LogoContainer = styled.div`
    text-transform: uppercase;
    color: #fff;
    font-weight: 900;
    font-size: 1.3rem;
    letter-spacing: 0.1rem;
`;

export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    input {
        height: 2.2rem;
        width: 22rem;
        max-width: 60%;
        border: none;
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.2);
        padding-left: 1rem;
        font-size: 1rem;

        background-image: url(${SearchIcon});
        background-size: 1.1rem;
        background-position: 97% center;
        background-repeat: no-repeat;

        @media (max-width: 600px) {
            width: 100%;
            max-width: 90%;
        }

        &:focus {
            outline: none;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 1rem;
    position: relative;
`;

export const Counter = styled.span`
    position: absolute;
    bottom: 70%;
    right: 31%;
    font-weight: 900;
    background: yellow;
    border-radius: 50%;
    width: 1.2rem;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerLogin = styled.div`
    display: flex;
    align-items: center;
    gap: 0.1rem;

    span {
        font-size: 0.9rem;
        font-weight: 900;
        color: #fff;
        cursor: pointer;
    }

    &:hover {
        opacity: 0.7;
        transition: 0.2s;
    }
`;
