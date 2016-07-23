import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';

/**
 * Dependencies
 */
import { $ } from 'jquery';

// Materialize
import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/js/materialize.js';

// Needed for Material-UI
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

import { createRoutes } from '../imports/startup/client/routes.jsx';

Meteor.startup(() => {
  render(
    createRoutes(),
    document.getElementById('render-target')
  );
});
