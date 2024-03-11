import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
        _id
        username
        email
        password
        savedBooks
    }
}`;

export const LOGIN_USER = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
            profile{
                _id
                username
            }
        }
    }`;

export const SAVE_BOOK = gql`
    mutation saveBook($user: String!, $book: String!) {
        saveBook(user: $user, book: $book)
        {
            _id
            username
            savedBooks
        }
    }`