import styled from 'styled-components';

import { Card } from '../styles/_layout';
import { fromBottomAnimation } from '../styles/_keyframes';

import { michael_jordan } from '../images';

const SearchBar = () => {
    return (
        <SearchCard>
            <label htmlFor="name-search">
                Search NBA Players by name
            </label>
            <form>
                <input
                    type="text"
                    id="name-search"
                    placeholder="Search Players..."
                    name="s"
                />
                <button type="submit">Search</button>
            </form>
        </SearchCard>
    );
}

const SearchCard = styled(Card)`
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${michael_jordan});
    background-size: cover;
    animation: ${fromBottomAnimation} 1.5s ease-in-out .3s both;

    & form {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    & label {
        display: flex;
        justify-content: center;
        font-size: 1rem;
        margin: 10px 0 5px 0;
    }

    & input {
        height: 1.3rem;
        width: 8rem;
        padding: 0 .5rem;
        font-size: .7rem;
        background-color: #e6e6ff;
    }

    & button {
        height: 1.3rem;
        width: 3.3rem;
        margin: 0 20px;
        padding: 0 .5rem;
        font-size: .7rem;
        cursor: pointer;
        background-color: #6666ff;
        color: #ffffff;
        border-radius: 5px;
        border: 1px solid #ffffff;
        transition: .5s;

        &:hover {
            background-color: #9999ff;
            transition: .5s;
        }
    }
`

export default SearchBar;