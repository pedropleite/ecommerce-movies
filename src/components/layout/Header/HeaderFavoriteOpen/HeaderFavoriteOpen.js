import {
    ContainerCartOpen,
    ContainerCartOpenDescription,
    ContainerItem,
    ItemCart,
    EmptyCartMessage,
} from './styles';
import { useFavorite } from '../../../../context/FavoriteContext';

import DeleteIcon from '@mui/icons-material/Delete';

export const HeaderFavoriteOpen = () => {
    const favoriteCtx = useFavorite();
    const API_IMG = 'https://image.tmdb.org/t/p/w500/';

    const favoriteItemRemove = (id) => {
        favoriteCtx.removeFavorite(id);
    };

    const favoriteClear = () => {
        favoriteCtx.clearFavorite();
    };

    return (
        <ContainerCartOpen>
            <ContainerCartOpenDescription>
                <span>Meus favoritos</span>
                <span onClick={favoriteClear}>Esvaziar</span>
            </ContainerCartOpenDescription>
            <ContainerItem>
                {favoriteCtx.items.length > 0 &&
                    favoriteCtx.items.map((item) => (
                        <ItemCart key={item.id}>
                            <div>
                                <img src={API_IMG + item.posterPath} />
                            </div>
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <div>
                                <span>
                                    <DeleteIcon
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            favoriteItemRemove(item.id);
                                        }}
                                    />
                                </span>
                            </div>
                        </ItemCart>
                    ))}
                {favoriteCtx.items.length === 0 && (
                    <EmptyCartMessage>Favorito vazio...</EmptyCartMessage>
                )}
            </ContainerItem>
        </ContainerCartOpen>
    );
};
