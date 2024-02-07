const { User } = require('../models');
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
    addDay: async (parent, { dayData }, context) => {
        try {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id},
            { $addToSet: {mealsByDay: dayData } },
            { new: true, runValidators: true }
          );
          return updatedUser;
    } catch (err) {
      console.log(err);
      throw AuthenticationError;
    }
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
     const updatedUser = await User.findOneAndUpdate(
      { _id: context.user._id },
      { $pull: { mealsByDay: { _id: dayId } } },
      { new: true }
     );
     if (!updatedUser) {
      throw AuthenticationError;
     }
     return updatedUser;
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
