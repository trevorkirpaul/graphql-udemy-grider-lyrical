import React, { Component } from 'react'
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    }
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(event) {
    const { content } = this.state
    const { songId } = this.props
    event.preventDefault()
    this.props.mutate({
      variables: { content, songId }
    }).then(() => this.setState({ content: '' }))
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label>Add a Lyric</label>
        <input
          type="text"
          value={this.state.content}
          onChange={event => this.setState({ content: event.target.value })}
        />
      </form>
    )
  }
}

const mutation = gql`
  mutation AddLyricToSong($content: String, $songId: ID) {
    addLyricToSong(content: $content, songId: $songId) {
      id
      lyrics {
        content
      }
    }
  }
`;

export default graphql(mutation)(LyricCreate);