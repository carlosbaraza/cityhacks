import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';
import App from '../layouts/App.jsx';

import { Hacks } from '../../api/hacks.js';

export default createContainer(() => {
  const hacksHandle = Meteor.subscribe('hacks');

  return {
    connected: Meteor.status().connected,
    hacks: Hacks.find({}).fetch(),
  };
}, App);
