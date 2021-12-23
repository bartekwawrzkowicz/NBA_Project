import styled, { keyframes } from 'styled-components';
import spalding_balls from '../images/spalding_balls.jpeg';
import miami_heat from '../images/miami_heat.jpeg';

export const HeaderCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 94vw;
    height: 100px;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${spalding_balls});
    background-size: cover;
    background-position: center;
    border-radius: 5px;
    border: 1px solid #ffffff;
    margin: 3% auto;
`

export const HeaderText = styled.div`
    padding-right: 10%;
`

export const HeaderLogo = styled.img`
    height: 90px;
    width: auto;
    margin-left: 5%;
`

export const headerAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateY(-10rem);
    }

    100% {
    opacity: 1;
    transform: translate(0);
    }
}
`

export const HeaderWrapper = styled.div`
    animation: ${headerAnimation} 1.5s ease-in-out .3s both;
`

export const HeroWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 94vw;
    margin: 0 auto;
`

export const asideAnimation = keyframes`
    0% {
    opacity: 0;
    transform: translateX(-10rem);
    }

    100% {
    opacity: 1;
    transform: translate(0);
    }
`;

export const HeroAside = styled.aside`
    height: 500px;
    width: 30%;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${miami_heat});
    background-size: cover;
    background-position: bottom;
    font-size: 1.2rem;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #ffffff;
    animation: ${asideAnimation} 1.5s ease-in-out .3s both;
`

export const heroAnimation = keyframes`
    from { opacity: 0; }
    to   { opacity: 1; }
`

export const HeroArticle = styled.article`
    width: 70%;
    height: 500px;
    padding-left: 10px;
    animation: ${heroAnimation} ease-in 3s;
    font-size: .8rem;
    color: #ffffff;
    text-align: justify;
`