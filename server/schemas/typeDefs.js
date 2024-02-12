const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    mealsByDay: [Day]
  }

  type Day {
    _id: ID!
    carbGoal: Int!
    proteinGoal: Int!
    fatsGoal: Int!
    calorieGoal: Int!
    savedMeals: [Meal]
  }

  type Meal {
    _id: ID!
    mealId: String!
    mealName: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user (username: String!, email: String!): User
    day (dayId: ID!): Day
    days (UserId: ID!): [Day]
    meal (mealId: String!): Meal
    meals (dayId: ID!): [Meal]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addDay(dayData: DayInput!): User
    removeDay (dayId: ID!): User
    addMeal(dayId: ID!, mealData: MealInput!): Day
    removeMeal(dayID: ID!, mealId: String!): Day
  }

  input DayInput {
    carbGoal: Int
    proteinGoal: Int
    fatsGoal: Int
    calorieGoal: Int
  }

  input MealInput {
    mealId: String
    mealName: String
  }
`;

module.exports = typeDefs;
