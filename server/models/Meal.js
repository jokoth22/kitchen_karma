const { Schema } = require('mongoose');

const mealSchema = new Schema(
    {
        mealName: {
            type: String,
            required: true,
        },
        mealId: {
            type: String,
            required: true,
        },
        calories: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for Calories`
            }
        },
        carbs: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for Carbs`
            }
        },
        protein: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for Protein`
            }
        },
        fats: {
            type: Number,
            validate: {
                validator: Number.isInteger,
                message: `{Value} is not an integer value for Fats`
            }
        },
        completed: {
            type: Boolean,
            default: false
        },
    }
);

module.exports = mealSchema;
