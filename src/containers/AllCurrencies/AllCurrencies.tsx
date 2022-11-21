import React, { useState } from 'react';
import { Currency } from '../../components/Currensy/Currensy';


export const AllCurrencies: React.FC = props => {

    const [currencies, setCurrencies] = useState<string[]>(['EUR','USD','RUB']);

    return (
        <section>
            <h1>All currencies</h1>
            {
                currencies.map(
                    currency => <Currency currency={ currency } />
                )
            }
        </section>
    )
}
