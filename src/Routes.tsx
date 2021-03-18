import React from 'react';

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainRoute from './layouts/MainRoute';
import { AppProvider } from './utils/context/AppContext';
import NotFoundView from './views/NotFoundView';
import ProducersList from './views/ProducersList';

function Routes() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <MainRoute exact path="/" component={<ProducersList />} />
          <Route exact path="*" component={NotFoundView} />
        </Switch>
      </Router>
    </AppProvider>
  )
}

export default Routes;