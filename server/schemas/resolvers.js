const { User, Day, Meal } = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('mealsByDay');
    },
    user: async (parent, { username, email }) => {
      return User.findOne({ username, email }).populate('mealsByDay');
    },
    meals: async (parent, {mealId}) => {
      return Meal.findOne({_id: mealId});
    },
    day: async (parent, {dayId}) => {
      return Day.findOne({_id: dayId});
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({_id:context.user._id}).populate('mealsByDay');
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addDay: async (parent, {dayId}, context) => {
      if(context.user){
        const dayPlan= await Day.create({
          dayId,
          carbGoal: context.user.carbGoal,
          proteinGoal: context.user.proteinGoal,
          fatsGoal: context.user.fatsGoal,
          calorieGoal: context.user.calorieGoal
        });

        await User.findOneAndUpdate(
          {_id: context.user._id},
          { $addToSet: {mealsByDay: day._id}}
        );

        return dayPlan;
      }
      throw AuthenticationError;
      ('You need to be logged in!');
    },
    addMeal: async (parent, {dayId, mealId}, context) => {
      if(context.user){
        return Day.findOneAndUpdate (
          {_id: dayId },
          {
            $addToSet: {
              savedMeals: {mealId},
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw AuthenticationError;
    },
    removeDay: async (parent, { dayId }, context) => {
      if (context.user) {
        const day = await Day.findOneAndDelete({
          _id: dayId,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { mealsByDay: day._id } }
        );

        return day;
      }
      throw AuthenticationError;
    },
    removeMeal: async (parent, { dayId, mealId }, context) => {
      if (context.user) {
        return Day.findOneAndUpdate(
          { _id: dayId },
          {
            $pull: {
              savedMeals: {
                _id: mealId,
              },
            },
          },
          { new: true }
        );
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;
