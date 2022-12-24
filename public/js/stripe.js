/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';
const Stripe = require('stripe');

const baseUrl = 'http://localhost:3000';
const api = '/api/v1';

export const bookTour = async tourId => {
  const stripe = Stripe(
    'pk_test_51MH3FPL5aaxYKqVZFEPEOUPc9l85iCziQJU4ClFFMnJqD4biG487Dz13ETd6LRygHJmPJ7FATTrBi3SND2tsgRVq00HX23oSry'
  );

  try {
    // 1) Get checkout session from API
    const session = await axios(
      `${baseUrl}${api}/bookings/checkout-session/${tourId}`
    );
    console.log(session);

    // 2) Create checkout form + chanre credit card
    // await stripe.redirectToCheckout({
    //   sessionId: session.data.session.id
    // });
    window.location.replace(session.data.session.url);
  } catch (err) {
    console.log(err);
    showAlert('error', err);
  }
};
