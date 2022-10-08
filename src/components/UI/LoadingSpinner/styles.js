import styled, { keyframes } from 'styled-components';

const spin = keyframes`
    0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingDiv = styled.div`
    display: inline-block;
    width: 300px;
    max-width: 60%;
    height: 300px;
    max-height: 60%;
    position: absolute;
    top: 50%;
    left: 50%;

    &:after {
        content: ' ';
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid teal;
        border-color: teal transparent teal transparent;
        animation: ${spin} 1.2s linear infinite;
    }
`;
