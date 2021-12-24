import styled from 'styled-components';
import { miami_heat } from '../images';

import { fadeInAnimation, fromLeftAnimation } from '../styles/_keyframes';

const mainArticle = 'Welcome to this nba statistics website. In order to keep you all updated with the playThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'

const Hero = () => {
    return (
        <HeroCard>
            <aside>stats</aside>
            <article>{mainArticle}</article>
        </HeroCard>
    );
}

const HeroCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 94vw;
    margin: 0 auto;

    & aside {
        height: 500px;
        width: 30%;
        background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(${miami_heat});
        background-size: cover;
        background-position: bottom;
        font-size: 1.2rem;
        text-align: center;
        border-radius: 5px;
        border: 1px solid #ffffff;
        animation: ${fromLeftAnimation} 1.5s ease-in-out .3s both;
    }

    & article {
        width: 70%;
        max-height: 500px;
        padding-left: 20px;
        animation: ${fadeInAnimation} ease-in 3s;
        font-size: .8rem;
        color: #ffffff;
        text-align: justify;
    }
`

export default Hero;