import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { HeaderCartOpen } from '../HeaderCartOpen/HeaderCartOpen';
import { Counter } from '../styles';
import { useState } from 'react';
import { useSelector } from 'react-redux';

export const HeaderCart = () => {
    const [cartIsOpen, setCartIsOpen] = useState(false);
    const cartItems = useSelector((state) => state.cart.items);

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
                <Counter>{cartItems.length}</Counter>
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
