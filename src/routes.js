import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Main from "../src/Pages/Up/Up";
import Relatorio from "../src/Pages/Relatorios/Relatorio";
import Politica from "../src/Pages/Politicas/Politica";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Main} />
        <Route path="/relatorio" component={Relatorio} />
        <Route path="/politica" component={Politica} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
