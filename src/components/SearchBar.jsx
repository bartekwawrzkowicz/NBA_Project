import styled from 'styled-components';
import michael_jordan from '../images/michael_jordan.jpeg';

const SearchBar = () => {
    return (
        <SearchCard>
            <SearchLabel htmlFor="name-search">
                Search NBA Players by name
            </SearchLabel>
            <SearchForm>
                <SearchInput
                    type="text"
                    id="name-search"
                    placeholder="Search Players..."
                    name="s"
                />
                <SearchButton type="submit">Search</SearchButton>
            </SearchForm>
        </SearchCard>
    );
}

export const SearchForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const SearchLabel = styled.label`
    display: flex;
    justify-content: center;
    font-size: 1rem;
    margin: 10px 0 5px 0;
`
export const SearchInput = styled.input`
    height: 1.3rem;
    width: 8rem;
    padding: 0 .5rem;
    font-size: .7rem;
    background-color: #e6e6ff;
`

export const SearchButton = styled.button`
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
`

export const SearchCard = styled.div`
    width: 94vw;
    height: 100px;
    border-radius: 5px;
    border: 1px solid #ffffff;
    margin: 3% auto;
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.6)), url(${michael_jordan});
    background-size: cover;
`

export default SearchBar;