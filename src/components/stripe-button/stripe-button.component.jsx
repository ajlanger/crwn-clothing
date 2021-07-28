import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51JIH3FHNrdKDezOTxNVuWHbNYJE0c4FhpBjLp8QkLKqw3QlKIEN4cbhTMetIT7wLh6HBiAzOrRJ8fhXs2VNj2ven00fOwoX8lp";

  const onToken = (token) => {
    // Normally you would pass the token to your backend to handle payment
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken} // on success callback that triggers if we submit.
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;