const typeDefs = `

    input BookInfo {
        authors: [String]!
        description: String!
        title: String!
        bookId: ID!
        image: String!
    }

    type Query {
        user: User
    }
    type User {
        _id: ID
        username: String
        email: String
        password: String
        savedBooks: [Book]!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Book {
        authors: [String]!
        description: String!
        bookId: ID!
        image: String
        title: String!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(email: String!, username: String!, password: String!): Auth
        saveBook(info: BookInfo!): User
        removeBook(bookId: ID!): User
    }

    `;

    module.exports = typeDefs;