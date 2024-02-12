import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser ($email: String!, $password: String!) {
    login (email: $email, password: $password) {
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

export const ADD_DAY = gql`
mutation addDay($dayData: DayInput!) {
  addDay(dayData: $dayData) {
    _id
    username
    mealsByDay {
      _id
      calorieGoal
      carbGoal
      fatsGoal
      proteinGoal
    }
  }
}
`;

export const REMOVE_DAY = gql`
mutation removeDay($dayId: ID!) {
  removeDay(dayId: $dayId) {
    _id
    username
    mealsByDay {
      _id
      calorieGoal
      carbGoal
      fatsGoal
      proteinGoal
    }
  }
}
`;

export const ADD_MEAL = gql`
mutation Mutation($dayId: ID!, $mealData: MealInput!) {
  addMeal(dayId: $dayId, mealData: $mealData) {
    _id
    savedMeals {
      _id
      mealId
      mealName
    }
  }
}
`;
export const REMOVE_MEAL = gql`
  mutation removeMeal ($mealId: ID!, $dayID: ID!) {
    day (mealId: $mealId, dayId: $dayID) {
        _id
        savedMeals {
           _id
        }
    }
  }
`;