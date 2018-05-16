import gql from 'graphql-tag';

const query = gql`
  query SongQuery($id: ID!) {
    song(id: $id) {
      title,
      id
    }
  }
`

export default query;