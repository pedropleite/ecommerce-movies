import {
    ModalContainer,
    SucessCheckmark,
    CheckIcon,
    IconLineTip,
    IconLineLong,
    IconCircle,
    IconFix,
    ShowModalContainer,
    ModalDescription,
} from './styles';

import { useCart } from '../../../context/CartContext';
import { useNavigate } from 'react-router-dom';

export const Modal = (props) => {
    const cartCtx = useCart();
    const navigate = useNavigate();

    const handleModal = () => {
        props.toggleModal();
        cartCtx.clearCart();
        navigate('/');
    };

    return (
        <ModalContainer>
            <ShowModalContainer>
                <div>
                    <SucessCheckmark>
                        <CheckIcon>
                            <IconLineTip />
                            <IconLineLong />
                            <IconCircle />
                            <IconFix />
                        </CheckIcon>
                    </SucessCheckmark>
                </div>
                <ModalDescription>
                    <span>Compra realizada com sucesso!</span>
                    <button onClick={handleModal}>Voltar</button>
                </ModalDescription>
            </ShowModalContainer>
        </ModalContainer>
    );
};
