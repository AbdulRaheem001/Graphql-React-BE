import { gql } from 'apollo-server';

const typeDefs = gql`
type User {
  Name: String
  Email: String
  userType: String
  Password: String
}  
type Query {
    hello: String
    users: [User!]!
  }
  type Mutation {
    login(email: String!, password: String!): User
  }
`;

export default typeDefs;