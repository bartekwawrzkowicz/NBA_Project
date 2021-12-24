import { keyframes } from 'styled-components';

export const fromTopAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-10rem);
    }

    100% {
    opacity: 1;
    transform: translate(0);
    }
`

export const fromLeftAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-10rem);
    }

    100% {
    opacity: 1;
    transform: translate(0);
    }
`

export const fadeInAnimation = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

export const fromBottomAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateY(10rem);
    }

    100% {
    opacity: 1;
    transform: translate(0);
    }
}
`