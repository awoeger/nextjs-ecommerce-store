// export default function Checkout2(props) {
//   async function handleBuyClick() {
//     const res = await fetch('api/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: 'This is the body',
//     });
//   }

//   // return ()
// }

// export async function getServerSideProps() {
//   const { Stripe } = await import('stripe');
//   const stripeServer = new Stripe(process.env.STRIPE_SECRET_KEY);
//   const publicKey = process.env.STRIPE_PUBLISHABLE_KEY;

// const price1 = await stripeServer.prices.retrieve(process.env.PRICE1);
// const price2 = await stripeServer.prices.retrieve(process.env.PRICE2);
// const price3 = await stripeServer.prices.retrieve(process.env.PRICE3);
// const price4 = await stripeServer.prices.retrieve(process.env.PRICE4);
// const price5 = await stripeServer.prices.retrieve(process.env.PRICE5);
// const price6 = await stripeServer.prices.retrieve(process.env.PRICE6);
// const price7 = await stripeServer.prices.retrieve(process.env.PRICE7);
// const price8 = await stripeServer.prices.retrieve(process.env.PRICE8);
// // const price9 = await stripeServer.prices.retrieve(process.env.PRICE9);

// return {
//   props: {
//     price: {
//       priceId: 'PRICE',
//       unitAmount: price1.unit_amount,
//       currency: price.currency,
//     },
//     publicKey,
//   },
//   };
// }
