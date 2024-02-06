const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    mealsByDay: [Day]!
  }

  type Day {
    _id: ID
    carbGoal: Int
    proteinGoal: Int
    fatsGoal: Int
    calorieGoal: Int
    savedMeals: [Meal]!
  }

  type Meal {
    _id: ID
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
    addMeal(dayID: ID!, mealId: ID!): Day
    removeMeal(mealId: ID!): Day
    addDay(dayId: ID!): User
    removeDay (dayId: ID!): User
  }
`;

module.exports = typeDefs;
