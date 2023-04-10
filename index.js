global.fetch = require('node-fetch')
require('dotenv').config();
require('aws-sdk/lib/maintenance_mode_message').suppress = true;
const Cognito = require('./cognito/index');
const { verify } = require('./cognito/index');
const body = {
    email: "md28md.hussain@gmail.com",
    password: "Hussain@2000",
    phone_number: +917607752679
};

async function Signup() {
    const response = await Cognito.signUp(body.email, body.password);
    console.log(response);
}

async function Verify() {
    const response = await Cognito.verify(body.email, '654769');
    console.log(response);
}

async function SignIn() {
    const response = await Cognito.signIn(body.email, body.password);
    console.log(response);
}

SignIn()
