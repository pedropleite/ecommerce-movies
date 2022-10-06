import {
    ContainerCartOpen,
    ContainerCartOpenDescription,
    ContainerItem,
    ItemCart,
    EmptyCartMessage,
} from './styles';

import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { favoriteActions } from '../../../../store/favoriteSlice';

export const HeaderFavoriteOpen = () => {
    const API_IMG = 'https://image.tmdb.org/t/p/w500/';
    const dispatch = useDispatch();
    const favoriteItems = useSelector((state) => state.favorite.items);

    const favoriteItemRemove = (item) => {
        dispatch(favoriteActions.remove(item));
    };

    const favoriteClear = () => {
        dispatch(favoriteActions.clear());
    };

    return (
        <ContainerCartOpen>
            <ContainerCartOpenDescription>
                <span>Meus favoritos</span>
                <span onClick={favoriteClear}>Esvaziar</span>
            </ContainerCartOpenDescription>
            <ContainerItem>
                {favoriteItems.length > 0 &&
                    favoriteItems.map((item) => (
                        <ItemCart key={item.id}>
                            <div>
                                <img
                                    src={API_IMG + item.posterPath}
                                    alt={item.title}
                                />
                            </div>
                            <div>
                                <span>{item.title}</span>
                            </div>
                            <div>
                                <span>
                                    <DeleteIcon
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            favoriteItemRemove(item);
                                        }}
                                    />
                                </span>
                            </div>
                        </ItemCart>
                    ))}
                {favoriteItems.length === 0 && (
                    <EmptyCartMessage>Favorito vazio...</EmptyCartMessage>
                )}
            </ContainerItem>
        </ContainerCartOpen>
    );
};
