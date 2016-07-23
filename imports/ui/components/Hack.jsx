import React, { Component, PropTypes } from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';

export default class Hacks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };
  }

  handleExpandChange(expanded) {
    this.setState({expanded: expanded});
  }

  handleToggle(event, toggle) {
    this.setState({expanded: toggle});
  }

  handleExpand() {
    this.setState({expanded: true});
  }

  handleReduce() {
    this.setState({expanded: false});
  }

  goToDetailsPage = () => {
    this.props.onClick(`/hack/${this.props.hack._id}`);
  }

  render() {
    return (
      <div>
        <Card className="card" onExpandChange={this.handleExpandChange.bind(this)}>
          <CardHeader
            title={this.props.hack.text}
            subtitle={this.props.hack.createdAt.toString()}
            titleStyle={{marginBottom: "10px"}}
          >
            <FlatButton
              label="DETAILS"
              onTouchTap={this.goToDetailsPage}
              style={{float: "right"}}
            />
            <div style={{"clear": "both"}}></div>
          </CardHeader>
        </Card>
      </div>
    );
  }
}

// // Hacks component - represents a single todo item
// export default class Hacks extends Component {
//   render() {
//     return (
//       <div className="col s12 m6">
//         <div className="card hoverable">
//           <div className="card-content">
//             <span className="card-title">{this.props.hack.text}</span>
//             <p>I am a very simple card. I am good at containing small bits of information.
//             I am convenient because I require little markup to use effectively.</p>
//           </div>
//           <div className="card-action">
//             <a className="waves-effect waves-light btn">details</a>
//             <RaisedButton label="Default" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

Hacks.propTypes = {
  // This component gets the hack to display through a React prop.
  // We can use propTypes to indicate it is required
  hack: PropTypes.object.isRequired,
  hack: PropTypes.boolean
};
