const sequelize = require('../db')
const {DataTypes} = require('sequelize')
const { types } = require('pg')


const User = sequelize.define('user', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    last_name: {type: DataTypes.STRING, allowNull: false},
    phone: {type: DataTypes.STRING, unique: true, allowNull: false},
    email: {type: DataTypes.STRING, unique: true, allowNull: false},
    password: {type: DataTypes.STRING, allowNull: false},
})

const Cabinet = sequelize.define('cabinet',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Favorites = sequelize.define('favorites',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const MyRecipe = sequelize.define('my_recipe',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Cook = sequelize.define('cook',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Type = sequelize.define('type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true},
})

const Recipe = sequelize.define('recipe', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    time: {type: DataTypes.INTEGER, allowNull: false},
    complex: {type: DataTypes.STRING, allowNull: false},
    profile_mini: {type: DataTypes.STRING, allowNull: false},
    profile: {type: DataTypes.STRING, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Proportion = sequelize.define('proportion', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    kolvo: {type: DataTypes.INTEGER, allowNull: false},
})

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
})

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    kcal: {type: DataTypes.INTEGER, allowNull: false},
    protein: {type: DataTypes.INTEGER, allowNull: false},
    fat: {type: DataTypes.INTEGER, allowNull: false},
    carb: {type: DataTypes.INTEGER, allowNull: false},
})

const RecipeKcal = sequelize.define('recipe_kcal', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    kcal: {type: DataTypes.INTEGER, allowNull: false},
    protein: {type: DataTypes.INTEGER, allowNull: false},
    fat: {type: DataTypes.INTEGER, allowNull: false},
    carb: {type: DataTypes.INTEGER, allowNull: false},
})

const ProductRecipe = sequelize.define('product_recipe',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

User.hasOne(Cabinet)
Cabinet.belongsTo(User)

Cabinet.hasMany(Favorites)
Favorites.belongsTo(Cabinet)

Cabinet.hasMany(Cook)
Cook.belongsTo(Cabinet)

Cabinet.hasMany(MyRecipe)
MyRecipe.belongsTo(Cabinet)

Recipe.hasMany(Favorites)
Favorites.belongsTo(Recipe)

Recipe.hasMany(Cook)
Cook.belongsTo(Recipe)

Recipe.hasMany(MyRecipe)
MyRecipe.belongsTo(Recipe)

Recipe.hasMany(Proportion, {as: 'proportion'})
Proportion.belongsTo(Recipe)

Product.hasMany(Proportion)
Proportion.belongsTo(Product, {as: 'product'})

User.hasMany(Rating)
Rating.belongsTo(User)

Recipe.hasMany(Rating)
Rating.belongsTo(Recipe)

Recipe.belongsToMany(Product, {through: ProductRecipe})
Product.belongsToMany(Recipe, {through: ProductRecipe})

Type.hasMany(Recipe)
Recipe.belongsTo(Type)

Recipe.hasOne(RecipeKcal, {as: 'recipe_kcal'})
RecipeKcal.belongsTo(Recipe)

User.hasMany(Recipe)
Recipe.belongsTo(User)

module.exports = {
    User,
    Cabinet,
    Product,
    Recipe,
    RecipeKcal,
    Favorites,
    Cook,
    MyRecipe,
    ProductRecipe,
    Proportion,
    Type,
    Rating
}