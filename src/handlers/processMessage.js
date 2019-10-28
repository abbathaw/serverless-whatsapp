const { TWILIO_ACCOUNT_SID: accountSID,
  TWILIO_AUTH_TOKEN: authToken,
  TWILIO_PHONE: twilioPhone,
  TARGET_PHONE:targetPhone} = process.env;

import Twilio from 'twilio';
const client = new Twilio(accountSID, authToken);

export const sendMessage= async (event, context) => {
  await client.messages
  .create({
    from: `whatsapp:${twilioPhone}`,
    body: 'I love you always',
    to: `whatsapp:${targetPhone}`
  })
  .then(message => console.log(message.sid));
};
