import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactDOM from 'react-dom';
import { createContainer } from 'meteor/react-meteor-data';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';

import MainMenu from '../components/MainMenu.jsx';
import TopBar from '../components/TopBar.jsx';

// App component - represents the whole app
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      menu: {
        open: false
      }
    };
  }

  menuToggleHandler = () => this.setState({menu: {open: !this.state.menu.open}});
  menuCloseHandler = () => this.setState({menu: {open: false}});

  render() {
    const {
      children,
      location,
      connected,
      loading,
    } = this.props;

    // clone route components with keys so that they can
    // have transitions
    const clonedChildren = children && React.cloneElement(children, {
      key: location.pathname,
    });

    return (
      <MuiThemeProvider>
        <div>
          <TopBar
            toggleMenu={this.menuToggleHandler}
            title={"City Hacks"}
          />

          <MainMenu
            open={this.state.menu.open}
            closeHandler={this.menuCloseHandler}
            history={this.props.history}
          />

          <div id="content-container" className="container">
            <ReactCSSTransitionGroup
              transitionName="fade"
              transitionEnterTimeout={200}
              transitionLeaveTimeout={200}
            >
              {loading
                ? <Loading key="loading"/>
                : clonedChildren}
            </ReactCSSTransitionGroup>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

App.propTypes = {
 hacks: PropTypes.array.isRequired,
};
