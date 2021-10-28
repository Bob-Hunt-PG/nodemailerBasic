// *** Simple Express Server ***
const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log('nodemailerProject is listening at http://localhost:${port}')
});
// *** End Server ***


// *** Transporter Object ***
// Pay attention, as apart from the user and the pass keys,
// which are your own credentials for your gmail account, 
// the other three keys need to be retrieved after setting up OAuth.
let transporter =nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user: process.env.MAIL_USERNAME,
        pass: process.env.MAIL_PASSWORD,
        clientId: process.env.OAUTH_CLIENTID,
        clientSecret: process.env.OAUTH_CLIENT_SECRET,
        refreshToken: process.env.OAUTH_REFRESH_TOKEN 
    }
});
// *** End Transporter ***


