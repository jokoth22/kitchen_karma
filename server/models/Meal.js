const { Schema } = require('mongoose');

const mealSchema = new Schema(
    {
        mealName: {
            type: String,
            required: true,
        },
        calories: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for calories`
            }
        },
        carbs: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for carbGoal`
            }
        },
        protein: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for proteinGoal`
            }
        },
        fats: {
            type: Number,
            validate: {
                validator: Number.isStorage,
                message: `{Value} is not an integer value for fatsGoal`
            }
        },
        completed: {
            type: Boolean,
            default: false
        },
    }
);

module.exports = mealSchema;