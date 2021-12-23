import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { MainContext } from './context/MainContext';
import { _API } from './data/api';

import Header from './components/Header';
import Hero from './components/Hero';
import Loading from './components/Loading';
import SearchBar from './components/SearchBar';

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

    console.log(newData);

    return (
        isLoading ?
            <Loading />
            :
            <MainContext.Provider value={newData}>
                <Header />
                <Hero />
                <SearchBar />
            </MainContext.Provider>
    )
}

export default App;