import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloProvider } from '@apollo/client';
import client from "./utils/Apollo.ts";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ApolloProvider client={client}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ApolloProvider>
);
