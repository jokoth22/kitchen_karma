const { Schema, model } = require('mongoose');

//const mealSchema = require('./Meal');
//const dateFormat = require('../utils/dateFormat');

const daySchema = new Schema(
    {
        dayName: {
            type: String,
            required: true,
        },
        carbGoal: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for carbGoal`,
            }
        },
        proteinGoal: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for proteinGoal`,
            }
        },
        fatsGoal: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for fatsGoal`,
            }
        },
        calorieGoal: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for caloriesGoal`,
            }
        },
        savedMeals: [
            {
                mealName: {
                    type: String,
                    required: true,
                },
                mealId: {
                    type: String,
                    required: true,
                }, 
                completed: {
                    type: Boolean,
                    default: false
                },
            },
        ]
    }
);

const Day = model('Day', daySchema);

module.exports = Day;