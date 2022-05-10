import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import axios from "axios";

import keycloak from "./keycloak";
import { ReactKeycloakProvider } from "@react-keycloak/web";
import { AuthClientTokens } from "@react-keycloak/core/lib/types";

import * as Styled from "./App.style";

const App = () => {
  const setAxiosHeader = (tokens: AuthClientTokens) => {
    const { token } = tokens;

    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  };

  return (
    <ReactKeycloakProvider onTokens={setAxiosHeader} authClient={keycloak}>
      <Styled.Container>
        <BrowserRouter>
          <Switch>
            <Route path="*">
              <p>It's recommended to extract routing outside of this component</p>
              <p>Make sure to customize manifest.json, favicon and index.html</p>
            </Route>
          </Switch>
        </BrowserRouter>
      </Styled.Container>
    </ReactKeycloakProvider>
  )
}

export default App;
