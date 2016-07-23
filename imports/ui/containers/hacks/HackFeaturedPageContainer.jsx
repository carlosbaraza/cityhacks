import { Meteor } from 'meteor/meteor';

import { createContainer } from 'meteor/react-meteor-data';
import HackFeaturedPage from '../../pages/hacks/Featured.jsx';

import { Hacks } from '../../../api/hacks.js';

export default createContainer(() => {
  const hacksHandle = Meteor.subscribe('hacks');

  return {
    connected: Meteor.status().connected,
    hacks: Hacks.find({}).fetch(),
  };
}, HackFeaturedPage);
