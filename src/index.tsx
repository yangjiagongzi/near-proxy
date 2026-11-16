import React from "react";
import ReactDOM from "react-dom/client";
import { RelayEnvironmentProvider } from "react-relay";
import { relayEnv } from "~/relay";
import Root from "~/router";
import "~/styles/global.css";
import { BackendReadyProvider } from "./context/BackendReadyContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BackendReadyProvider>
      <RelayEnvironmentProvider environment={relayEnv}>
        <Root />
      </RelayEnvironmentProvider>
    </BackendReadyProvider>
  </React.StrictMode>,
);
