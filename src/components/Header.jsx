import styled from 'styled-components';

import { Card } from '../styles/_layout';
import { fromTopAnimation } from '../styles/_keyframes';
import { nba_logo, spalding_balls } from '../images';


const Header = () => {
    return (
        <HeaderCard>
            <img src={nba_logo} alt="logo" />
            <p>NBA statistics</p>
        </HeaderCard>
    );
}

const HeaderCard = styled(Card)`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${spalding_balls});
    background-size: cover;
    background-position: center;
    animation: ${fromTopAnimation} 1.5s ease-in-out .3s both;

    & img {
        height: 90px;
        width: auto;
        margin-left: 5%;
    }

    & p {
        padding-right: 10%;
    }
`

export default Header;