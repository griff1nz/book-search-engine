const typeDefs = `

    type Query {
        user: (userId: ID!): User
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
        authors: [String]
        description: String!
        bookId: String!
        image: String
        link: String
        title: String!
    }

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser: (email: String!, username: String!, password: String!): Auth
        saveBook: (user: User!, book: Book!): User
        removeBook: (user: User!, book: Book!): User
    }

    `;

    module.exports = typeDefs;