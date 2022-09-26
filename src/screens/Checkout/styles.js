import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 6rem;

    hr {
        width: 115%;
        border: 2px solid rgba(0, 0, 0, 0.2);
    }

    @media (max-width: 850px) {
        flex-direction: column;
        margin-top: 4rem;
        gap: 2rem;
    }

    @media (max-width: 600px) {
        margin-top: 12rem;
    }
`;

export const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    max-width: 90%;

    span {
        font-size: 1.5rem;
    }

    input {
        height: 2.5rem;
        padding: 0 1rem;
        font-size: 1rem;
        font-weight: 500;
        border: 2px solid rgba(0, 0, 0, 0.2);

        &:focus {
            outline: none;
        }
    }

    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    div {
        display: flex;
        gap: 1.3rem;
    }

    div:nth-of-type(2) {
        input:nth-of-type(1) {
            width: 30%;
        }
        input:nth-of-type(2) {
            width: 70%;
        }
    }

    @media (max-width: 900px) {
        margin-bottom: 6rem;
    }
`;

export const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 400px;

    @media (max-width: 850px) {
        width: 500px;
        max-width: 90%;
    }
`;

export const CartDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    width: 90%;

    div:nth-of-type(1) {
        display: flex;
        justify-content: space-between;

        span {
            width: 25%;
            text-align: center;
            font-size: 1.2rem;
            font-weight: 500;
        }

        span:nth-of-type(1) {
            text-align: left;
        }
    }
`;

export const CartItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    position: relative;
`;

export const IconContainer = styled.div`
    width: 100%;
    position: absolute;
    display: flex;

    span {
        position: absolute;
        right: -20%;
    }
`;

export const CartPriceContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.5rem;
    }

    button {
        cursor: pointer;
        height: 2.5rem;
        width: 100%;
        font-size: 1.2rem;
        font-weight: 500;
        border: none;
        color: #fff;
    }

    button:nth-of-type(1) {
        background-color: #6558f5;
        margin-bottom: 0.3rem;

        &:hover {
            background-color: #463dab;
            transition: 0.2s;
        }
    }

    button:nth-of-type(2) {
        background-color: #f55e5e;

        &:hover {
            background-color: #e10e0e;
            transition: 0.2s;
        }
    }
`;

export const CellContainer = styled.div`
    width: 25%;
    text-align: center;

    img {
        width: 50px;
        height: 50px;
    }
`;

export const ErrorMessageContainer = styled.div`
    margin-top: 1rem;
    width: 100%;
    text-align: center;

    span {
        font-size: 1.2rem;
        color: rgba(0, 0, 0, 0.7);
        font-weight: 500;
    }
`;

export const ErrorMessageForm = styled.div`
    font-size: 1.3rem;
    background-color: #f55e5e;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #fff;
    border: 2px solid rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: center;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
`;
