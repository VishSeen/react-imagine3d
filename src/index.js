import React from "react";
import ReactDOM from "react-dom/client";
import App from './App'
import {  ApolloProvider } from "@apollo/client";
import Client from './services/ApolloClient'

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ApolloProvider client={Client}>
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>
);