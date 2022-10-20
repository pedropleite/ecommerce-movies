import {
    Container,
    FormContainer,
    CartContainer,
    CartDescriptionContainer,
    CartPriceContainer,
    ErrorMessageContainer,
    ErrorMessageForm,
} from './styles';

import ReactInputMask from 'react-input-mask';

import { CheckoutShowItems } from './CheckoutShowItems/CheckoutShowItems';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import { Modal } from '../../components/index';
import { useSelector } from 'react-redux';

const isEmpty = (value) => value.trim() === '';

const Checkout = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const totalAmount = useSelector((state) => state.cart.totalAmount);
    const navigate = useNavigate();
    const [isFormValid, setIsFormValid] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);

    const nameInputRef = useRef();
    const CPFInputRef = useRef();
    const phoneInputRef = useRef();
    const emailInputRef = useRef();
    const CEPInputRef = useRef();
    const addressInputRef = useRef();
    const cityInputRef = useRef();
    const stateInputRef = useRef();

    const confirmHandler = () => {
        const enteredNameIsValid = !isEmpty(nameInputRef.current.value);
        const enteredCPFIsValid = !isEmpty(CPFInputRef.current.value);
        const enteredPhoneIsValid = !isEmpty(phoneInputRef.current.value);
        const enteredEmailIsValid = !isEmpty(emailInputRef.current.value);
        const enteredCEPIsValid = !isEmpty(CEPInputRef.current.value);
        const enteredAddressIsValid = !isEmpty(addressInputRef.current.value);
        const enteredCityIsValid = !isEmpty(cityInputRef.current.value);
        const enteredStateIsValid = !isEmpty(stateInputRef.current.value);

        const formIsValid =
            enteredNameIsValid &&
            enteredCPFIsValid &&
            enteredPhoneIsValid &&
            enteredEmailIsValid &&
            enteredCEPIsValid &&
            enteredAddressIsValid &&
            enteredCityIsValid &&
            enteredStateIsValid;

        setIsFormValid(formIsValid);

        if (!formIsValid || cartItems.length === 0) {
            return;
        }

        toggleModal();
    };

    const toggleModal = () => {
        setModalIsOpen((prev) => !prev);
    };

    return (
        <>
            <Container>
                <FormContainer>
                    <span>Finalizar Compra</span>
                    <input
                        type={'text'}
                        placeholder={'Nome Completo'}
                        ref={nameInputRef}
                    />
                    <div>
                        <ReactInputMask
                            mask='999.999.999-99'
                            placeholder={'CPF'}
                            ref={CPFInputRef}
                        />
                        <ReactInputMask
                            mask='(99) 99999-9999'
                            placeholder={'Celular'}
                            ref={phoneInputRef}
                        />
                    </div>
                    <input
                        type={'email'}
                        required
                        placeholder={'E-mail'}
                        ref={emailInputRef}
                    />
                    <div>
                        <ReactInputMask
                            mask='99999-999'
                            placeholder={'CEP'}
                            ref={CEPInputRef}
                        />
                        <input
                            type={'text'}
                            placeholder={'Endereço'}
                            ref={addressInputRef}
                        />
                    </div>
                    <div>
                        <input
                            type={'text'}
                            placeholder={'Cidade'}
                            ref={cityInputRef}
                        />
                        <input
                            type={'text'}
                            placeholder={'Estado'}
                            ref={stateInputRef}
                        />
                    </div>

                    {isFormValid === false ? (
                        <ErrorMessageForm>
                            Preencha todos os campos
                        </ErrorMessageForm>
                    ) : (
                        ''
                    )}
                </FormContainer>
                <CartContainer>
                    <CartDescriptionContainer>
                        <div>
                            <span>Imagem</span>
                            <span>Nome</span>
                            <span>Qtd</span>
                            <span>Preço</span>
                        </div>
                        {cartItems.length > 0 &&
                            cartItems.map((item) => (
                                <CheckoutShowItems key={item.id} item={item} />
                            ))}
                        {cartItems.length === 0 && (
                            <ErrorMessageContainer>
                                <span>Nenhum item no carrinho...</span>
                            </ErrorMessageContainer>
                        )}
                    </CartDescriptionContainer>
                    <CartPriceContainer>
                        <div>
                            <span>Total</span>
                            <span>R$ {totalAmount},00</span>
                        </div>
                        <button onClick={confirmHandler}>Finalizar</button>
                        <button
                            onClick={() => {
                                navigate('/');
                            }}
                        >
                            Voltar
                        </button>
                    </CartPriceContainer>
                </CartContainer>
            </Container>
            {modalIsOpen && <Modal toggleModal={toggleModal} />}
        </>
    );
};

export default Checkout;
