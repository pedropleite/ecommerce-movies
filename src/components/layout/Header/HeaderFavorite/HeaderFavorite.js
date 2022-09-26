import FavoriteIcon from '@mui/icons-material/Favorite';
import { Counter } from '../styles';
import { useFavorite } from '../../../../context/FavoriteContext';
import { HeaderFavoriteOpen } from '../HeaderFavoriteOpen/HeaderFavoriteOpen';
import { useState } from 'react';

export const HeaderFavorite = () => {
    const favoriteCtx = useFavorite();
    const [favoriteIsOpen, setFavoriteIsOpen] = useState(false);

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
                    {favoriteCtx.items.length}
                </Counter>
            </div>
            {favoriteIsOpen && <HeaderFavoriteOpen />}
        </>
    );
};
