import React, { useState, useEffect } from 'react';

const Joke = () => {
    const [joke, setJoke] = useState('');

    useEffect(() => {
        if (!navigator.onLine) {
            if (localStorage.getItem('joke') === null) {
                setJoke('Cargando...');
            } else {
                setJoke(localStorage.getItem('joke'));
            }
        } else {
            const URL = 'https://api.chucknorris.io/jokes/random';
            fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    setJoke(res.value);
                    localStorage.setItem('joke', res.value);
                })
                .catch((error) => {
                    console.log('Error al obtener la broma:', error);
                });
        }
    }, []);

    return (
        <div>
            <h1>Joke</h1>
            <p>{joke}</p>
        </div>
    );
};

export default Joke;
