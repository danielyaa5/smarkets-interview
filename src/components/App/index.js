import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import Events from '../Events';
import Event from '../Event';
import NotFound from '../NotFound';

import 'semantic-ui-css/semantic.min.css';

const App = () => (
  <div>
    <main>
      <Switch>
        <Route
          exact
          path="/"
          component={() => <Redirect to="/events/popular" />}
        />
        <Route
          exact
          path="/events/:sortedBy(popular|recent)"
          component={Events}
        />
        <Route exact path="/event/:id" component={Event} />
        <Route component={NotFound} />
      </Switch>
    </main>
  </div>
);

export default App;
