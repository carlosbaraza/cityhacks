import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class MainMenu extends React.Component {
  constructor(props) {
    super(props);
  }

  goToUrl = (url) => {
    return () => {
      this.props.history.push(url);
      this.props.closeHandler();
    };
  }

  render() {
    return (
      <div>
        <Drawer
          open={this.props.open}
          docked={false}
          onRequestChange={this.props.closeHandler}
        >
          <MenuItem onTouchTap={this.goToUrl('/')}>Featured</MenuItem>
          <MenuItem onTouchTap={this.goToUrl('/')}>Your hacks</MenuItem>
        </Drawer>
      </div>
    );
  }
}
