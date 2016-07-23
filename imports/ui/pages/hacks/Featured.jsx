import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Hacks } from '../../../api/hacks.js';
import Hack from '../../components/Hack.jsx';

export default class HackFeaturedPage extends Component {
  constructor(props) {
    super(props);
  }

  handleSubmit(event) {
    event.preventDefault();

    // Find the text field via the React ref
    const text = ReactDOM.findDOMNode(this.refs.textInput).value.trim();

    Hacks.insert({
      text,
      createdAt: new Date(), // current time
    });

    // Clear form
    ReactDOM.findDOMNode(this.refs.textInput).value = '';
  }

  renderHacks() {
    return this.props.hacks.map((hack) => (
      <Hack
        key={hack._id}
        hack={hack}
        onClick={hackUrl => this.props.history.push(hackUrl)}
      />
    ));
  }

  render() {
    return (
      <div>
        <form className="new-hack" onSubmit={this.handleSubmit.bind(this)} >
          <input
            type="text"
            ref="textInput"
            placeholder="Type to add new hacks"
          />
        </form>

        {this.renderHacks()}
      </div>
    );
  }
}
