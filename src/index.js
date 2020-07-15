import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import authentication from "react-azure-b2c";

authentication.initialize({
  // optional, will default to this
  instance: "https://login.microsoftonline.com/tfp/",
  // your B2C tenant
  tenant: "loyaltyapp.onmicrosoft.com",
  // the policy to use to sign in, can also be a sign up or sign in policy
  signInPolicy: "B2C_1_react_loyalty_signup",
  // the the B2C application you want to authenticate with (that's just a random GUID - get yours from the portal)
  clientId: "1664d3cf-6f62-4137-bab2-8ef2c83db34d",
  // where MSAL will store state - localStorage or sessionStorage
  cacheLocation: "sessionStorage",
  // the scopes you want included in the access token
  scopes: [
    "https://loyaltyapp.onmicrosoft.com/api/1664d3cf-6f62-4137-bab2-8ef2c83db34d/Read",
  ],
  // optional, the redirect URI - if not specified MSAL will pick up the location from window.href
  redirectUri: "http://localhost:3000/welcome",
});

authentication.run(() => {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById("root")
  );
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
