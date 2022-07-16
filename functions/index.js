const functions = require("firebase-functions");
const admin=require("firebase-admin")
const stripe = require('stripe')(
    'sk_test_51L8zqVJe12k0EsGWAR4goMtFBqMJ1uhCJIEEjR65eHUWpAvPlSDa5gN1zwM6PpjsanR0juDE9PFQeDEYAhlv4fMt00qgquvrnB',
  );
  admin.initializeApp()
exports.saveCard = functions.https.onRequest(async (req, res) => {
  
    try {
      let customer;
      const userDoc = await admin
        .firestore()
        .collection('Users')
        .doc(req.body.uid)
        .get();
      if (!userDoc.data().stripeCustomer) {
        customer = await stripe.customers.create({
          description: req.body.description ? req.body.description : '',
          email: req.body.email ? req.body.email : '',
          name: req.body.name ? req.body.name : '',
          phone: req.body.phone ? req.body.phone : '',
        });
        await admin
          .firestore()
          .collection('Users')
          .doc(req.body.uid)
          .set({stripeCustomer: customer}, {merge: true});
      } else {
        customer = userDoc.data().stripeCustomer;
      }
      const card = await stripe.customers.createSource(customer.id, {
        source: req.body.token,
      });
      await admin
        .firestore()
        .collection('Users')
        .doc(req.body.uid)
        .update({card: admin.firestore.FieldValue.arrayUnion(card)});
      res.status(200).send({
        success: true,
        message: 'Card has been saved',
        card: card,
        stripeCustomer: customer,
      });
      _// console.log(JSON.stringify(card))_
    } catch (error) {
      console.log(error)
      res.send({success: false, message: 'Error: ' + JSON.stringify(error)});
      console.log(JSON.stringify(error));
    }
  });
  
  exports.payWithStripeCard = functions.https.onRequest((request, response) => {
    stripe.charges
      .create({
        amount: Number(request.body.amount) * 100,
        currency: request.body.currency,
        source: request.body.token,
        customer: request.body.customer,
        metadata: {
          bookingId: request.body.bookingId,
          barberUid: request.body.barberUid,
        },
      })
      .then(async (charge) => {
        response.send(charge);
      })
      .catch((err) => {
        console.log('ERROR: ', JSON.stringify(err));
      });
  });
  
  exports.refundBookingPayment = functions.https.onRequest(
    (request, response) => {
      stripe.refunds
        .create({
          charge: request.body.paymentId,
        })
        .then(async (charge) => {
          response.send(charge);
        })
        .catch((err) => {
          console.log('ERROR: ', JSON.stringify(err));
        });
    },
  );