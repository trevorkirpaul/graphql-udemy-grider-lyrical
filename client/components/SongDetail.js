import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';

class SongDetail extends Component {

  render() {
    console.log(this.props)
    const { song } = this.props.data
    if (!song) { return <div><h1>loading...</h1></div> }
    return (
      <div>
        <h3>Song Detail</h3>
        <p>Title: {song.title}</p>
        <p>ID: {song.id}</p>
      </div>
    )
  }
}

export default graphql(fetchSong, {
  // heres how pass vars here
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail)