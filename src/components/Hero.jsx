import { HeroAside, HeroArticle, HeroWrapper } from '../styles/_styled-components';

const mainArticle = 'Welcome to this nba statistics website. In order to keep you all updated with the playThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'

const Hero = () => {
    return (
        <HeroWrapper>
            <HeroAside>stats</HeroAside>
            <HeroArticle>{mainArticle}</HeroArticle>
        </HeroWrapper>
    );
}

export default Hero;