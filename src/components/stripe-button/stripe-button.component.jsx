import React from 'react';
import StripeCheckout from 'react-stripe-checkout';


const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51I7NYuBjSa62UU0ByiHgW8vbbPE1Bqz1xDgUSKXn9oAWddVa7DlGTgPXpNK01oefUsU34DzJhSOWGMJW6sHKkboI000Dfs35Xg';

  const onToken = token => {
    console.log(token);
    alert('Paiement Successfull!');
  }


  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  )
};

/*  TEST 4242 4242 4242 4242   01/21  123  */



export default StripeCheckoutButton;