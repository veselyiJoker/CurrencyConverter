import React, { useEffect, useRef } from 'react';
import { CurrencyInput } from '../../components/CurrencyInput/CurrencyInput';
import axios from 'axios';


export const Converter = React.memo(() => {

    const effectPassed = useRef(false)

    const getAllCurrenciesList = async () => {
        axios(
            {
                method: 'get',
                url: 'https://api.apilayer.com/currency_data/list',
                headers: {
                    'apikey': 'iBgUsAZWHRRsqNnJr4pxLY0KTFSdD81F'
                }
            }
        )
        .then(
            ( res: any ) => {
                const data = res.data;
                console.log(data);
            }
        )
        .catch(
            ( err: any ) => console.log(err)
        );
    }

    const getAllConvertedCurrencies = () => {
        axios(
            {
                method: 'get',
                url: "https://api.apilayer.com/currency_data/change?start_date=2022-11-21&end_date=2022-11-21",
                params:{
                    source: 'BYN'
                },
                headers: {
                    'apikey': 'mI0d8J8wcZPDOVCvT5e1gjJ1XWN4CtQL'
                }
            }
        )
        .then(
            ( res: any ) => {
                const data = res.data;
                console.log(data);
            }
        )
        .catch(
            ( err: any ) => console.log(err)
        );
    }
    
    useEffect(() => {
        if ( effectPassed.current === false ) {
            // getAllCurrenciesList();
            // getAllConvertedCurrencies();
        }

        return () => {
            effectPassed.current = true;
        }

    }, []);



    function handleAmountChange() {
   
    }

    function handleCurrencyChange() {
   
    }

    return (
        <section>
            <h1>Converter</h1>
            <div>
                <CurrencyInput
                    amount = "10"
                    currency = "UI"
                    currencies = { ["UI","EUR","RUB"] }
                    onAmountChange = { handleAmountChange }
                    onCurrencyChange = { handleCurrencyChange }
                />
                <button>
                    Swap
                </button>
                <CurrencyInput
                    amount = "10"
                    currency = "UI"
                    currencies = { ["UI","EUR","RUB"] }
                    onAmountChange = { handleAmountChange }
                    onCurrencyChange = { handleCurrencyChange }
                />
            </div>
            <button>
                Convert
            </button>
        </section>
    )
})
