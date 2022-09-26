import styled from 'styled-components';

export const Overview = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    background-color: #fff;
    padding: 1rem;
    max-height: 100%;
    transform: translateY(-101%);
    transition: transform 0.5s ease-in-out;
    font-size: 0.8rem;
`;

export const CardContainer = styled.div`
    text-align: center;
    width: 200px;
    margin: 2rem 3rem;
    position: relative;
    overflow: hidden;
    border: 1px solid #ccc;
    letter-spacing: 0.7px;

    img {
        width: 100%;
    }

    &:hover ${Overview} {
        transform: translateY(0);
    }
`;

export const Title = styled.span`
    font-size: 1.2rem;
    font-weight: 500;
`;

export const DescriptionContainer = styled.div`
    width: 100%;
    margin-top: 0.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
`;

export const DescriptionContainerVote = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 0.5rem;
    font-size: 0.9rem;
    margin: 0.5rem 0;

    div {
        display: flex;
        align-items: center;
        gap: 0.2rem;
    }
`;

export const ShopContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    span {
        font-size: 1rem;
    }

    button {
        height: 2.4rem;
        background-color: #6558f5;
        border: none;
        color: #fff;
        font-size: 0.9rem;
        font-weight: 700;
        cursor: pointer;
    }

    button:hover {
        background-color: #4b3dc2;
    }
`;
