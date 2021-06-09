// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { request } from 'node:http';
import Stripe from 'stripe';

const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function api(req, res) {
  if (request.method !== 'POST') {
    return res.send({
      error: 'Method needs to be POST',
    });
  }
  const domainURL = 'http://localhost:3000';
  const { quantity, mode, priceID } = req.body;
  const pmTypes = ['card'];

  const session = await stripeServer.checkout.sessions.create({
    success_url: `${domainURL}/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${domainURL}/cancel`,
    payment_method_types: pmTypes,
    line_items: [{ price: process.env[priceID], quantity: quantity }],
    mode: mode,
  });
  res.send({ sessionID: session.id });
}
