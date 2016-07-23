import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import AppContainer from '../../ui/containers/AppContainer.jsx';
import HackFeaturedPageContainer
  from '../../ui/containers/hacks/HackFeaturedPageContainer.jsx';
import HackDetailsPage from '../../ui/pages/hacks/Details.jsx';

export const createRoutes = () => {
  return (
    <Router history={browserHistory}>
      <Route path="/" component={AppContainer}>
        <IndexRoute component={HackFeaturedPageContainer} />
        <Route path="hack/:id" component={HackDetailsPage} />
      </Route>
    </Router>
  );
}
