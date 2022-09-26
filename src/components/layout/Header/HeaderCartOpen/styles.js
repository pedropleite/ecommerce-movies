import styled from 'styled-components';

export const ContainerCartOpen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    z-index: 10;
    right: -2rem;
    top: 2.6rem;
    width: 500px;
    border-left: 1px solid #000;
    background-color: #fff;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    padding: 1rem;

    @media (max-width: 600px) {
        transform: translateX(50%);
        width: 400px;
        top: 2.9rem;
        right: 50%;
        border-right: 1px solid #000;
        border-bottom: 1px solid #000;
    }

    @media (max-width: 500px) {
        width: 300px;
    }
`;

export const ContainerCartOpenDescription = styled.div`
    padding: 0 1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.7rem;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);

    span:nth-of-type(1) {
        font-size: 1.4rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.8);
    }

    span:nth-of-type(2) {
        font-size: 0.8rem;
        font-weight: 600;
        color: #000;
        cursor: pointer;
    }

    span:nth-of-type(2):hover {
        color: #df4759;
        text-decoration: underline;
        text-decoration-color: #df4759;
        transition: 0.2s;
    }
`;

export const ContainerItem = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ItemCart = styled.div`
    margin-bottom: 1.1rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 0.1px solid rgba(0, 0, 0, 0.1);

    img {
        width: 3rem;
        height: 3rem;
    }

    div {
        width: 20%;
        text-align: center;
    }

    span:nth-of-type(1) {
        font-weight: 550;
    }
`;

export const EmptyCartMessage = styled.span`
    font-size: 1.2rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.5);
`;

export const CheckoutContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    div {
        width: 90%;
        display: flex;
        justify-content: space-between;
        margin-bottom: 1.1rem;

        span {
            font-size: 1.2rem;
            font-weight: 500;
        }
    }

    button {
        width: 100%;
        height: 2.5rem;
        background-color: #6558f5;
        color: #fff;
        font-size: 1.1rem;
        font-weight: 600;
        border: none;
        cursor: pointer;

        &:hover {
            background-color: #463dab;
            transition: 0.2s;
        }
    }
`;
