import React, { Component } from 'react';
import { Link } from 'react-router'
import { graphql } from 'react-apollo';
import fetchSong from '../queries/fetchSong';
import LyricCreate from './LyricCreate'

class SongDetail extends Component {

  render() {
    console.log(this.props)
    const { song } = this.props.data
    if (!song) { return <div><h1>loading...</h1></div> }
    return (
      <div>
        <Link to="/">Back</Link>
        <p>Song Detail</p>
        <p>ID: {song.id}</p>
        <h3>Title: {song.title}</h3>
        <LyricCreate songId={song.id} />
      </div>
    )
  }
}

export default graphql(fetchSong, {
  // heres how pass vars here
  options: (props) => { return { variables: { id: props.params.id } } }
})(SongDetail)