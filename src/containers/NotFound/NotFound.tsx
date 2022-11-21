import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <section>
            <h2>Страница не найдена</h2>
            <Link to='/'>Перейти на главную страницу</Link>
        </section>
    )
}

export default NotFound