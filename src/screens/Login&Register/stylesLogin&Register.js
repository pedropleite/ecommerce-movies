import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 3rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    color: #000;

    section {
        width: 50%;
        height: 80%;
        border-left: 1.5px solid rgba(38, 43, 111, 0.3);

        img {
            width: 80%;
        }
    }

    @media (max-width: 1000px) {
        section {
            border-left: none;
        }
    }

    @media (max-width: 768px) {
        section {
            display: none;
        }
    }
`;

export const ContainerForm = styled.div`
    margin: 3rem 0;
    display: flex;
    width: 80%;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    border-radius: 10px;
    -webkit-box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);
    box-shadow: 5px 5px 15px 5px rgba(0, 0, 0, 0.23);

    form {
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        padding: 0.8em 4em;
        width: 50%;

        h1 {
            margin-bottom: -0.3em;
        }

        span {
            text-align: left;
        }

        label:nth-of-type(1) {
            margin-top: 1.4rem;
        }

        label {
            width: 100%;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

            span {
                font-weight: bold;
                margin-bottom: 0.5rem;
            }
        }

        input {
            width: 100%;
            height: 2rem;
            border: none;
            background-color: #fff;
            border-bottom: 1px solid rgba(0, 0, 0, 0.3);
            color: #000;
        }
    }

    @media (max-width: 1000px) {
        form {
            border-right: 1.5px solid rgba(38, 43, 111, 0.3);
        }
    }

    @media (max-width: 768px) {
        form {
            width: 100%;
            border-right: none;
        }
    }
`;

export const ContainerButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    button {
        height: 2.6rem;
        border: none;
        border-radius: 9px;
        color: #fff;
        font-weight: bold;
        font-size: 1.1rem;
        padding: 0.5rem 1.5rem;
        cursor: pointer;
        transition: 0.3s;
    }

    button:nth-of-type(1) {
        background-color: #4345e6;
    }

    button:nth-of-type(2) {
        background-color: #848788;
    }

    button:hover {
        background-color: rgba(4, 6, 47, 1);
    }

    button:nth-of-type(2):hover {
        background-color: #212222;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 0.5rem;
    }
`;

export const Error = styled.p`
    width: 100%;
    color: #721c24;
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    padding: 5px;
    border-radius: 5px;
`;
