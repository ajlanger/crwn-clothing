import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";

import {
  selectCurrentUser
} from '../../redux/user/user.selectors';

import "./checkout.styles.scss";

const CheckOutPage = ({ cartItems, total, currentUser }) => (
  <div className="checkout-page">
    <h1>{currentUser ? `${currentUser.displayName}'s items` : null}</h1>
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {
        cartItems.map(cartItem => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))
    }
    <div className='total'>
        <span>TOTAL: €{total}</span>
    </div>
    <div className='test-warning'>
      *Please use the following test credit card information to process fake payments*
      <br />
      4242 4242 4242 4242 - Exp: 01/22 - CVV: 123
    </div>
    <StripeCheckoutButton price={total} />
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  currentUser: selectCurrentUser
});

export default connect(mapStateToProps)(CheckOutPage);
