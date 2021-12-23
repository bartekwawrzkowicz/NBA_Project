import nba_logo from '../images/nba-logo.jpg';
import { HeaderLogo, HeaderCard, HeaderText, HeaderWrapper } from '../styles/_styled-components';

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderCard>
                <HeaderLogo src={nba_logo} />
                <HeaderText>NBA statistics</HeaderText>
            </HeaderCard>
        </HeaderWrapper>
    );
}

export default Header;