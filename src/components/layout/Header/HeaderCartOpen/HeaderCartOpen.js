import {
    ContainerCartOpen,
    ContainerCartOpenDescription,
    ContainerItem,
    ItemCart,
    EmptyCartMessage,
    CheckoutContainer,
} from './styles';

import { cartActions } from '../../../../store/cartSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const HeaderCartOpen = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);

    const cartItemRemoveHandler = (id) => {
        dispatch(cartActions.remove(id));
    };

    const cartItemsClear = () => {
        dispatch(cartActions.clear());
    };

    const redirectToCheckout = () => {
        if (props.cartIsOpen === true) {
            navigate('/check');
            props.toggleCart();
        }
    };

    return (
        <ContainerCartOpen>
            <ContainerCartOpenDescription>
                <span>Meu Carrinho</span>
                <span onClick={cartItemsClear}>Esvaziar</span>
            </ContainerCartOpenDescription>
            <ContainerItem>
                {cartItems.length > 0 &&
                    cartItems.map((item) => (
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
                                <span>{item.amount}</span>
                            </div>
                            <div>
                                <span>R$ {item.amount * item.price},99</span>
                            </div>
                            <div>
                                <span>
                                    <DeleteIcon
                                        sx={{ cursor: 'pointer' }}
                                        onClick={() => {
                                            cartItemRemoveHandler(item.id);
                                        }}
                                    />
                                </span>
                            </div>
                        </ItemCart>
                    ))}
                {cartItems.length === 0 && (
                    <EmptyCartMessage>Carrinho vazio...</EmptyCartMessage>
                )}
                <CheckoutContainer>
                    <div>
                        <span>Total</span>
                        <span>R$ {totalAmount},00</span>
                    </div>
                    <button onClick={redirectToCheckout}>
                        Finalizar compra
                    </button>
                </CheckoutContainer>
            </ContainerItem>
        </ContainerCartOpen>
    );
};
