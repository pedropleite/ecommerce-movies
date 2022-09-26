import { useContext, createContext } from 'react';
import { useReducer } from 'react';

const FavoriteContext = createContext();

const defaultFavoriteState = {
    items: [],
};

const favoriteReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingFavoriteItemIndex = state.items.findIndex(
            (item) => item.id === action.item.id
        );
        const existingFavoriteItem = state.items[existingFavoriteItemIndex];
        let updatedItems;
        if (existingFavoriteItem) {
            updatedItems = [...state.items];
        } else {
            updatedItems = state.items.concat(action.item);
        }
        return {
            items: updatedItems,
        };
    }
    if (action.type === 'REMOVE') {
        const updatedItems = state.items.filter(
            (item) => item.id !== action.id
        );
        return {
            items: updatedItems,
        };
    }
    if (action.type === 'CLEAR') {
        return defaultFavoriteState;
    }
};

export const FavoriteProvider = ({ children }) => {
    const [favoriteState, dispatchFavoriteAction] = useReducer(
        favoriteReducer,
        defaultFavoriteState
    );

    const addFavoriteHandler = (item) => {
        dispatchFavoriteAction({ type: 'ADD', item: item });
    };

    const removeFavoriteHandler = (id) => {
        dispatchFavoriteAction({ type: 'REMOVE', id: id });
    };

    const clearFavoriteHandler = () => {
        dispatchFavoriteAction({ type: 'CLEAR' });
    };

    const favoriteContext = {
        items: favoriteState.items,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        clearFavorite: clearFavoriteHandler,
    };

    return (
        <FavoriteContext.Provider value={favoriteContext}>
            {children}
        </FavoriteContext.Provider>
    );
};

export const useFavorite = () => useContext(FavoriteContext);
