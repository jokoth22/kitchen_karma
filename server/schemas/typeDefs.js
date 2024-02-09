const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    mealsByDay: [Day]!
  }

  type Day {
    _id: ID!
    dayName: String!
    carbGoal: Int!
    proteinGoal: Int!
    fatsGoal: Int!
    calorieGoal: Int!
    savedMeals: [Meal]!
  }

  type Meal {
    _id: ID
    mealId: String
    mealName: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user (username: String!, email: String!): User
    meals (mealId:ID!): [Meal]
    day (day: ID!): [Day]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addMeal(dayID: ID!, mealId: String!, mealName: String!): Day
    removeMeal(dayID: ID!, mealId: String!): Day
    addDay(dayData: DayInput!): User
    removeDay (dayId: ID!): User
  }

  input DayInput {
    carbGoal: Int
    proteinGoal: Int
    fatsGoal: Int
    calorieGoal: Int
  }
`;

module.exports = typeDefs;
