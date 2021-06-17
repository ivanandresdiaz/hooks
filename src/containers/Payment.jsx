import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.scss';

const Payment = (props) => {
  const { history } = props;
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;
  const paypalOptions = {
    clientId: 'AZRSpvbYgXnsjrXL7kRiS6fHFAN72Xu6ogPHITh4otfl2Wr4U68-90J6yjDHICq1Bg0jJf7cC8GgCgdy',
    intent: 'capture',
    currency: 'USD',
  };
  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  };
  const handlePaymentSuccess = (data) => {
    if (data.status === 'COMPLETED') {
      const newOrder = {
        buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push('/checkout/success');
    }
  };
  const handleSummTotal = () => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue.price;
    const sum = cart.reduce(reducer, 0);
    return sum;
  };
  return (
    <div className='Payment'>
      <div className='Payment-content'>
        <h3>Resument del pedido:</h3>
        {cart.map((item) => (
          <div className='Payment-item' key={item.title}>
            <div className='Payment-element'>
              <h4>{item.title}</h4>
              <span>
                $
                {' '}
                {item.price}
              </span>
            </div>
          </div>
        ))}
        <div className='Payment-button'>
          <PayPalButton
            options={paypalOptions}
            style={buttonStyles}
            amount={handleSummTotal()}
            onApprove={() => console.log('start Payment')}
            onSuccess={(data) => handlePaymentSuccess(data)}
            onError={() => console.log('error')}
            onCancel={() => console.log('data')}
          />
          Boton de pago con Paypal
        </div>
      </div>
      <div />
    </div>
  );
};

export default Payment;
