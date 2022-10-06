import FavoriteIcon from '@mui/icons-material/Favorite';
import { Counter } from '../styles';
import { HeaderFavoriteOpen } from '../HeaderFavoriteOpen/HeaderFavoriteOpen';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const HeaderFavorite = () => {
    const [favoriteIsOpen, setFavoriteIsOpen] = useState(false);
    const favoriteItems = useSelector((state) => state.favorite.items);

    const toggleFavorite = () => {
        setFavoriteIsOpen((prev) => {
            return !prev;
        });
    };

    return (
        <>
            <div>
                <FavoriteIcon
                    sx={{
                        fontSize: 26,
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onClick={toggleFavorite}
                />
                <Counter style={{ right: '67%' }}>
                    {favoriteItems.length}
                </Counter>
            </div>
            {favoriteIsOpen && <HeaderFavoriteOpen />}
        </>
    );
};
