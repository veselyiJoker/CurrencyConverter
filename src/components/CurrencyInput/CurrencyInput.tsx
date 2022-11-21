import React from 'react';

interface CurrencyInputProps {
    amount: string,
    currency: string,
    currencies: Array<string>,
    onAmountChange: ( e: string ) => void,
    onCurrencyChange: ( e: string ) => void,
}

export const CurrencyInput : React.FC<CurrencyInputProps> = props => {

    return (
        <div>
            <input
                type='text'
                value={ props.amount }
                onChange={ e => props.onAmountChange( e.target.value )}
            />
            <select
                value={ props.currency }
                onChange={e => props.onCurrencyChange( e.target.value )}
            >
                { 
                    props.currencies.map(
                        currency => (
                            <option value={ currency }>
                                { currency }
                            </option>
                        )
                    )
                }
            </select>
        </div>
    )
}
