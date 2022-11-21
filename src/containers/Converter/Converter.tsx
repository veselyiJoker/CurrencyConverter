import React, { useEffect } from 'react';
import { CurrencyInput } from '../../components/CurrencyInput/CurrencyInput';
import axios from 'axios';

export const Converter = () => {
    
    useEffect(() => {
        axios(
            {
                method: 'get',
                url: "https://api.apilayer.com/currency_data/change?start_date=2022-11-21&end_date=2022-11-21",
                params:{
            
                },
                headers: {
                    'apikey': 'mI0d8J8wcZPDOVCvT5e1gjJ1XWN4CtQL'
                }
            }
        )
        .then(
            res => {
                const data = res.data;
                console.log(data);
            }
        )
        .catch(
            err => console.log(err)
        );

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
}
