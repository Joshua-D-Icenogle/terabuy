import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Client from 'shopify-buy';

const client = Client.buildClient({
  storefrontAccessToken: '1c587fd0f522432f885b5d73d6461e0b',
  domain: 'terabuy-test.myshopify.com'
  });


ReactDOM.render(
  <React.StrictMode>
    <App client={client} />
  </React.StrictMode>,
  document.getElementById('root')
);


