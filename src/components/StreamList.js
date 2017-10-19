import React, { Component } from 'react';
import axios from 'axios';
import Stream from './Stream';

class StreamList extends Component {
  state = {
    streams: []
  };

  componentDidMount() {
    const { game } = this.props.match.params;

    if (game) {
      axios.get(`http://localhost:5000/api/streams/${game}`)
        .then(response => this.setState({ streams: response.data.streams }));
    } else {
      axios.get('http://localhost:5000/api/streams')
        .then(response => this.setState({ streams: response.data.streams }));
    }
  }

  renderStreams() {
    return this.state.streams.map(streamData => {
      return <Stream key={streamData._id} streamData={streamData} />;
    });
  }

  render() {
    return (
      <div className="row">
        {this.renderStreams()}
      </div>
    );
  }
}

export default StreamList;
