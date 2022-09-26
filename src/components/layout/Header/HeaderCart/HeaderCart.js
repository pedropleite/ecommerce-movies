import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HeaderCartOpen } from '../HeaderCartOpen/HeaderCartOpen';
import { Counter } from '../styles';
import { useCart } from '../../../../context/CartContext';
import { useState } from 'react';

export const HeaderCart = () => {
    const cartCtx = useCart();
    const [cartIsOpen, setCartIsOpen] = useState(false);

    const toggleCart = () => {
        setCartIsOpen((prev) => {
            return !prev;
        });
    };

    return (
        <>
            <div>
                <ShoppingCartIcon
                    sx={{
                        fontSize: 26,
                        color: '#fff',
                        cursor: 'pointer',
                    }}
                    onClick={toggleCart}
                />
                <Counter>{cartCtx.items.length}</Counter>
            </div>
            {cartIsOpen && (
                <HeaderCartOpen
                    toggleCart={toggleCart}
                    cartIsOpen={cartIsOpen}
                />
            )}
        </>
    );
};
