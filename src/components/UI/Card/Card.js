import {
    CardContainer,
    Title,
    DescriptionContainer,
    DescriptionContainerVote,
    ShopContainer,
    Overview,
} from './styles';

import StarIcon from '@mui/icons-material/Star';
import DateRangeIcon from '@mui/icons-material/DateRange';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useState } from 'react';

export const Card = (props) => {
    const API_IMG = 'https://image.tmdb.org/t/p/w500/';
    const PRICE = props.vote_average * 10;
    const [isFavorite, setIsFavorite] = useState(false);

    const styleFavorite = {
        position: 'absolute',
        zIndex: 9,
        top: '0.2rem',
        right: '0.2rem',
        color: `${isFavorite ? 'red' : 'gray'}`,
        cursor: 'pointer',
        fontSize: '1.7rem',
    };

    const onAddToCart = () => {
        const item = {
            id: props.id,
            title: props.title,
            price: PRICE,
            amount: 1,
            posterPath: props.poster_path,
        };
        props.onAddCart(item);
    };

    const onAddToFavorite = () => {
        if (!isFavorite) {
            const item = {
                id: props.id,
                title: props.title,
                posterPath: props.poster_path,
            };
            props.onAddFavorite(item);
        } else {
            props.onRemoveFavorite(props.id);
        }
    };

    const favoriteHandle = () => [setIsFavorite((prevState) => !prevState)];

    return (
        <CardContainer>
            <div>
                <img src={API_IMG + props.poster_path} alt={props.title} />
                <FavoriteIcon
                    sx={styleFavorite}
                    onClick={() => {
                        onAddToFavorite();
                        favoriteHandle();
                    }}
                />
            </div>
            <DescriptionContainer>
                <Title>{props.title}</Title>
                <DescriptionContainerVote>
                    <div>
                        <StarIcon
                            sx={{
                                position: 'relative',
                                bottom: '0.15rem',
                                fontSize: '1.4rem',
                                color: '#f9c700',
                            }}
                        />
                        <span>{props.vote_average}</span>
                    </div>
                    <div>
                        <DateRangeIcon
                            sx={{
                                position: 'relative',
                                bottom: '0.12rem',
                                fontSize: '1.3rem',
                            }}
                        />
                        <span style={{ fontSize: '0.7rem' }}>
                            {props.release_date}
                        </span>
                    </div>
                </DescriptionContainerVote>
                <ShopContainer>
                    <span>{`R$ ${PRICE},00`}</span>
                    <button onClick={onAddToCart}>Adicionar</button>
                </ShopContainer>
            </DescriptionContainer>
            <Overview>{props.overview}</Overview>
        </CardContainer>
    );
};
