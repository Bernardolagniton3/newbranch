const { gql } = require("apollo-server-express");

const typeDefs = gql`
    type User {
        id:Int!
        username: String!
        password: String!
        opt: Int
        authorizationtoken: String
        items:[Item]
    }
    type Item {
          firstname:String,
          lastname:String,
          mobile: String,
          address: String,
          location: String,
          balanceRecord: Int,
          payment:Int,
          datecreation:String,
          gender:String,
          age:Int,
          birthday:String,
          job:String,
          record:String,
    }

    type Query {
      getAllUser: [User]
      getUser(username: String, password:String): User
    }
`;

 
module.exports = { typeDefs }