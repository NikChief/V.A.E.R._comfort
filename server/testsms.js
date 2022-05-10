// require('dotenv').config();
// const Vonage = require('@vonage/server-sdk');

// const {
//   VONAGE_API_KEY,
//   VONAGE_API_SECRET,
//   VONAGE_BRAND_NAME,
//   TO_NUMBER,
// } = process.env;

// const vonage = new Vonage({
//   apiKey: VONAGE_API_KEY,
//   apiSecret: VONAGE_API_SECRET,
// });

// const from = VONAGE_BRAND_NAME;
// const to = TO_NUMBER;
// const text = 'A text message sent using the Vonage SMS API';

// vonage.message.sendSms(from, to, text, (err, responseData) => {
//   if (err) {
//     console.log(err);
//   } else {
//     if (responseData.messages[0]['status'] === "0") {
//       console.log("Message sent successfully.");
//     } else {
//       console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
//     }
//   }
// })

// // vonage.verify.request({
// //   number: "+79312243165",
// //   brand: "Vonage"
// // }, (err, result) => {
// //   if (err) {
// //     console.error(err);
// //   } else {
// //     const verifyRequestId = result.request_id;
// //     console.log('request_id', verifyRequestId);
// //   }
// // });

// // vonage.verify.check({
// //   request_id: 'd02704b29bc949dcbda3cf503e901f3e',
// //   code: '3172'
// // }, (err, result) => {
// //   if (err) {
// //     console.error(err);
// //   } else {
// //     console.log(result);
// //   }
// // });
