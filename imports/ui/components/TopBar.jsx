import React, { Component, PropTypes } from 'react';
import AppBar from 'material-ui/AppBar';

export default class TopBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <AppBar
        title={this.props.title}
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onLeftIconButtonTouchTap={this.props.toggleMenu}
      />
    );
  }
}
