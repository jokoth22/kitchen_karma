import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            mealsByDay {
                dayNumber
                carbGoal
                proteinGoal
                fatsGoal
                calorieGoal
                savedMeals {
                    mealName
                    calories
                    carbs
                    protein
                    fats
                    completed
                }
            }
        }
    }
`;

export const QUERY_USER = gql`
    query user($username: String!) {
        user(username: $username) {
            _id
            username
            email
            mealsByDay {
                dayNumber
                carbGoal
                proteinGoal
                fatsGoal
                calorieGoal
                savedMeals {
                    mealName
                    calories
                    carbs
                    protein
                    fats
                    completed
                }
            }
        }
    }
`;

export const GET_DAY = gql`
  query GetDays {
    days {
      _id
      name
      meals {
        _id
      }
    }
  }
`;
