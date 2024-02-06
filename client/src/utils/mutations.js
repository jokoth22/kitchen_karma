import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser ($email: String!, $password: String!) {
    loginUser (email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser ($username: String!, $email: String!, $password: String!){
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_MEAL = gql`
  mutation addMeal ($mealId: ID!, $dayID: ID!) {
    day (mealId: $mealId, dayId: $dayID) {
        _id
        savedMeals {
           _id
           mealName
        }
    }
  }
`
export const ADD_DAY = gql`
  mutation addDay ($dayID: ID!) {
    user (dayID: $dayID){
        _id
        mealsByDay {
            _id
            savedMeals
        }
    }
  }
`;