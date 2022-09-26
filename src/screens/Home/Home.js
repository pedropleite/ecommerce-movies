import { Card } from '../../components/UI/Card/Card';
import { useState, useEffect } from 'react';
import { useCart } from '../../context/CartContext';
import { useFavorite } from '../../context/FavoriteContext';
import axios from 'axios';

import { CardsContainer } from './styles';
import { useSearch } from '../../context/SearchContext';

const API_SEARCH =
    'https://api.themoviedb.org/3/search/movie?api_key=32f00a67600eef14143e09e681c210f0&query';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const search = useSearch();

    useEffect(() => {
        if (search !== '') {
            axios
                .get(`${API_SEARCH}=${search}`)
                .then((res) => {
                    console.log(res.data.results);
                    setMovies(res.data.results);
                })
                .catch((err) => console.log(err));
        } else {
            axios
                .get(
                    'https://api.themoviedb.org/3/movie/popular?api_key=32f00a67600eef14143e09e681c210f0'
                )
                .then((res) => {
                    setMovies(res.data.results);
                });
        }
    }, [search]);

    useEffect(() => {
        axios
            .get(
                'https://api.themoviedb.org/3/movie/popular?api_key=32f00a67600eef14143e09e681c210f0'
            )
            .then((res) => {
                setMovies(res.data.results);
            });
    }, []);

    const cartCtx = useCart();
    const favoriteCtx = useFavorite();

    const cartItemAddHandler = (item) => {
        cartCtx.addItem(item);
    };

    const favoriteItemAddHandler = (item) => {
        favoriteCtx.addFavorite(item);
    };

    const favoriteItemRemoveHandler = (id) => {
        favoriteCtx.removeFavorite(id);
    };

    return (
        <CardsContainer>
            {movies.map((movie) => (
                <Card
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    poster_path={movie.poster_path}
                    vote_average={movie.vote_average}
                    release_date={movie.release_date}
                    overview={movie.overview}
                    onAddCart={(item) => {
                        cartItemAddHandler(item);
                    }}
                    onAddFavorite={(item) => {
                        favoriteItemAddHandler(item);
                    }}
                    onRemoveFavorite={(id) => {
                        favoriteItemRemoveHandler(id);
                    }}
                />
            ))}
        </CardsContainer>
    );
};
