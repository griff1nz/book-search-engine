import { gql } from '@apollo/client';

export const QUERY_USER = gql`
    query Query {
        user {
            _id
            username
            email
            password
            savedBooks {
                bookId
                title
                authors
                description
                image
            }
        }
    }`;