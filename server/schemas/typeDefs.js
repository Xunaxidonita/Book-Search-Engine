// import the gql tagged template function
const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Book {
    _Id: ID
    bookId: String
    authors: [String]
    description: String
    image: String
    link: String
    title: String
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    books(username: String): [Book]
    book(_id: ID!): Book
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addBook(
      authors: [String]
      description: String!
      bookId: String!
      image: String
      link: String
      title: String!
    ): Book
    removeBook(
        bookId
    ):User
  }

  type Auth {
    token: ID!
    user: User
  }
`;

module.exports = typeDefs;
