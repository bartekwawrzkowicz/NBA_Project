import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MainContext } from './context/MainContext';

import Header from './components/Header';
import Hero from './components/Hero';


const _API = {
    method: 'GET',
    url: 'https://api-nba-v1.p.rapidapi.com/players/lastName/james',
    headers: {
        'x-rapidapi-host': 'api-nba-v1.p.rapidapi.com',
        'x-rapidapi-key': '88b6dba000mshc85ab2e2f383dabp127fb3jsnbcf212a3d706'
    }
};

const App = () => {
    const [newData, setNewData] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        axios
            .request(_API)
            .then(res => setNewData(res.data))
            .catch(error => console.error(error))

        setIsLoading(false)
    }, []);

    return (
        <MainContext.Provider value={newData}>
            <Header />
            <Hero />
        </MainContext.Provider>
    );
}

export default App;