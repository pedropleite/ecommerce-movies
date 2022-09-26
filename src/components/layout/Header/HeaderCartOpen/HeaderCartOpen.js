import {
    ContainerCartOpen,
    ContainerCartOpenDescription,
    ContainerItem,
    ItemCart,
    EmptyCartMessage,
    CheckoutContainer,
} from './styles';
import { useCart } from '../../../../context/CartContext';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

export const HeaderCartOpen = (props) => {
    const cartCtx = useCart();

    const navigate = useNavigate();

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };

    const cartItemsClear = () => {
        cartCtx.clearCart();
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
                {cartCtx.items.length > 0 &&
                    cartCtx.items.map((item) => (
                        <ItemCart key={item.id}>
                            <div>
                                <img
                                    src={API_IMG + item.posterPath}
                                    alt={îtem.title}
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
                {cartCtx.items.length === 0 && (
                    <EmptyCartMessage>Carrinho vazio...</EmptyCartMessage>
                )}
                <CheckoutContainer>
                    <div>
                        <span>Total</span>
                        <span>R$ {cartCtx.totalAmount},00</span>
                    </div>
                    <button onClick={redirectToCheckout}>
                        Finalizar compra
                    </button>
                </CheckoutContainer>
            </ContainerItem>
        </ContainerCartOpen>
    );
};
