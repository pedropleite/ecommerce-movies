import { Card } from '../../components/UI/Card/Card';
import { useState, useEffect } from 'react';
import axios from 'axios';

import { CardsContainer } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cartSlice';
import { favoriteActions } from '../../store/favoriteSlice';

const API_SEARCH =
    'https://api.themoviedb.org/3/search/movie?api_key=32f00a67600eef14143e09e681c210f0&query';

export const Home = () => {
    const [movies, setMovies] = useState([]);
    const search = useSelector((state) => state.search.search);

    useEffect(() => {
        if (search !== '') {
            axios
                .get(`${API_SEARCH}=${search}`)
                .then((res) => {
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

    const dispatch = useDispatch();

    const cartItemAddHandler = (item) => {
        dispatch(cartActions.add(item));
    };

    const favoriteItemAddHandler = (item) => {
        dispatch(favoriteActions.add(item));
    };

    const favoriteItemRemoveHandler = (item) => {
        dispatch(favoriteActions.remove(item));
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
                    onRemoveFavorite={(item) => {
                        favoriteItemRemoveHandler(item);
                    }}
                />
            ))}
        </CardsContainer>
    );
};
