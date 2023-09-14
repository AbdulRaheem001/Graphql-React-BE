import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    FName: String
    LName: String
    Email: String
    Password: String
    token: String
  }
  type Todo {
    email:String
    title: String
    description: String
    completed: String
    completedOn: String
    urgency: String
  }
  type Query {
    hello: String
    todosByEmail(email: String!): [Todo]
  }
  type Mutation {
    login(email: String!, password: String!): User
    signup(
      fname: String!
      lname: String!
      email: String!
      password: String!
    ): User
    creattodo(
      email: String
      title: String
      description: String
      completed: Boolean
      completedOn: String
      urgency: String
    ): Todo
  }
`;

export default typeDefs;
