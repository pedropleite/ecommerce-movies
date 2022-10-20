import { CartItemContainer, IconContainer, CellContainer } from '../styles';

import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/slices/cartSlice';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const CheckoutShowItems = (item) => {
    const dispatch = useDispatch();

    return (
        <>
            <CartItemContainer>
                <CellContainer>
                    <img
                        src={API_IMG + item.item.posterPath}
                        alt={item.item.title}
                    />
                </CellContainer>
                <CellContainer>
                    <span>{item.item.title}</span>
                </CellContainer>
                <CellContainer>
                    <span>{item.item.amount}</span>
                </CellContainer>
                <CellContainer>
                    <span>R$ {item.item.amount * item.item.price},00</span>
                </CellContainer>
                <IconContainer>
                    <DeleteIcon
                        sx={{
                            position: 'absolute',
                            right: '-15%',
                            fontSize: '1.4rem',
                            cursor: 'pointer',
                        }}
                        onClick={() => {
                            dispatch(cartActions.remove(item.item.id));
                        }}
                    />
                </IconContainer>
            </CartItemContainer>
            <hr />
        </>
    );
};
