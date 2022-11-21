import React from 'react';
import './App.css';
import {
    Routes, 
    Route,
} from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';
import { Layout } from './routes/Layout/Layout';
import { Converter } from './containers/Converter/Converter';
import { AllCurrencies } from './containers/AllCurrencies/AllCurrencies';
import { Header } from './containers/Header/Header';


const App = () => {

    return (
        <>
            <Header />
            <Routes>
                <Route path='/' element={ <Layout /> }>
                    <Route index element={ <Converter /> } />  
                    <Route path='all-currencies' element={ <AllCurrencies /> } />
                    <Route path='*' element={ <NotFound /> } />
                </Route>
            </Routes>
        </>
    )
}

export default App;
