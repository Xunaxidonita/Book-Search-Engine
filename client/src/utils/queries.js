import { gql } from "@apollo/client";

export const GET_ME = gql`
  {
    me {
      _id
      username
      email
      bookCount
      savedBooks {
        _id
        authors
        description
        image
        link
        title
      }
    }
  }
`;

export const QUERY_BOOKS = gql`
  query books($username: String) {
    books(username: $username) {
      _id
      bookId
      authors
      description
      image
      link
      title
    }
  }
`;
