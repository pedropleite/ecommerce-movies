import { CartItemContainer, IconContainer, CellContainer } from '../styles';

import DeleteIcon from '@mui/icons-material/Delete';
import { useCart } from '../../../context/CartContext';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const CheckoutShowItems = (item) => {
    const cartCtx = useCart();

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
                        onClick={() => cartCtx.removeItem(item.item.id)}
                    />
                </IconContainer>
            </CartItemContainer>
            <hr />
        </>
    );
};
