import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="*">
          <p>It's recommended to extract routing outside of this component</p>
          <p>Make sure to customize manifest.json, favicon and index.html</p>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
