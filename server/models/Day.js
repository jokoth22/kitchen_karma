const { Schema } = require('mongoose');

const mealSchema = require('./Meal');
const dateFormat = require('../utils/dateFormat');

const daySchema = new Schema(
    {
        dayNumber: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp),
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
        savedMeals: [mealSchema]
    }
);

daySchema.virtual('mealCount').get(function() {
    return this.savedMeals.length;
})

module.exports = daySchema;