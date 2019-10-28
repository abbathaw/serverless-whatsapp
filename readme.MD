### Intro

A lambda function that sends once a day "I love you always" message using whatsapp to your target phone.

Inspired by this [article](https://medium.com/better-programming/i-wrote-a-script-to-whatsapp-my-parents-every-morning-in-just-20-lines-of-python-code-5d203c3b36c1#673d).

This is nearly the same idea but I set it up using nodejs and serverless framework. 

#### To Deploy on your own

- Setup your twilio sandbox using this [guide](https://www.twilio.com/docs/autopilot/channels/whatsapp).

- Create a `.env` file and insert the values for twilio accountSID, auth Token, the provided phone number and the target number.

- To deploy `sls deploy`

- Note: Make sure the target number subscribes to the twilio sandbox number they give you (otherwise you won't receive the message).

#### Planned to add sometime soon
If I get the time, I want to:
 - expand this app to actually send proper messages to multiple numbers, 
 - add an endpoint to hook up the replies as well (right now the target phone replies only get echoed back to them), 
 - and maybe hook it up to a chatbot (I will still see the limitations of the twilio sandbox and whatsapp api).
