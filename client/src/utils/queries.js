import { gql } from "@apollo/client";

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
