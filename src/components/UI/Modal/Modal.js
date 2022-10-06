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

import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../../store/cartSlice';

export const Modal = (props) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleModal = () => {
        props.toggleModal();
        dispatch(cartActions.clear());
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
