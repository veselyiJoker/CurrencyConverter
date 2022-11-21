import React from 'react';

interface CurrencyProps {
    currency: string,
}

export const Currency : React.FC<CurrencyProps> = props => {

    return (
        <li>
            {
                props.currency
            }
        </li>
    )
}
