const Users = require('./users.models')
const Categories = require('./categories.models')
const Ingredients = require('./ingredients.models')
const Instructions = require('./instructions.models')
const RecipesIngredients = require('./recipes_ingredients.models')
const Recipes = require('./recipes.models')
const Types = require('./types.models')
const UsersIngredients = require('./users_ingredients.models')
const UsersRecipes = require('./users_recipes.models')


const initModels = () => {

    //relacion entre users y recipes de 1 a muchos
    Users.hasMany(Recipes)
    Recipes.belongsTo(Users)
    
    //relacion entre users y users_recipes de 1 a muchos
    Users.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Users)

    //relacion entre recipes y users_recipes de 1 a muchos
    Recipes.hasMany(UsersRecipes)
    UsersRecipes.belongsTo(Recipes)

    //relacion entre users y ingredients_users de 1 a muchos
    Users.hasMany(UsersIngredients)
    UsersIngredients.belongsTo(Users)

     //relacion entre ingredients y ingredients_users de 1 a muchos
     Ingredients.hasMany(UsersIngredients)
     UsersIngredients.belongsTo(Ingredients)

    //relacion entre categories y recipes de 1 a muchos
    Categories.hasMany(Recipes)
    Recipes.belongsTo(Categories)

    //relacion entre ingredients y types de 1 a muchos
    Types.hasMany(Ingredients)
    Ingredients.belongsTo(Types)

    //relacion entre recipes y recipesIngredients de 1 a muchos
    Recipes.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Recipes)
    //relacion entre ingredients y recipesIngredients de 1 a muchos
    Ingredients.hasMany(RecipesIngredients)
    RecipesIngredients.belongsTo(Ingredients)
    // //relacion entre recipes y instruccions de 1 a muchos
    Recipes.hasMany(Instructions)
    Instructions.belongsTo(Recipes)
 
}


module.exports = initModels