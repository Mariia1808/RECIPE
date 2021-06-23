const uuid = require('uuid')
const path = require('path')
const {Recipe, Proportion, Product, RecipeKcal} = require('../models/models')
const ApiError = require('../error/ApiError')
const { info } = require('console')

class RecipeController {
    async create(req, res, next){
        try {
        let {name, time, complex, profile_mini, profile, typeId, userId} = req.body
        const {img} = req.files
        let fileName = uuid.v4() + ".jpg"
        img.mv(path.resolve(__dirname, '..', 'static', fileName))
        const recipe = await Recipe.create({name, time, complex, profile_mini, profile, img: fileName, typeId, userId})

        


        return res.json(recipe)
        }
        catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        let {typeId, userId, limit, page} = req.body
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let recipes;
        if(!typeId && !userId) {
            resipes = await Recipe.findAndCountAll({limit, offset})
        }
        if(typeId && !userId) {
            resipes = await Recipe.findAndCountAll({where:{typeId}, limit, offset})
        }
        if(!typeId && userId) {
            resipes = await Recipe.findAndCountAll({where:{userId}, limit, offset})
        }
        if(typeId && userId) {
            resipes = await Recipe.findAndCountAll({where:{userId, typeId}, limit, offset})
        }
        return res.json(recipes)
    }
    async getOne(req, res){
        const {id} = req.params
        const recipe = await Recipe.findAll({
            where:{id},
            include:[{model: Proportion, as: 'proportion'}],
            include:[{model: Product, as: 'product', where: {productId}}],
            include:[{model: RecipeKcal, as: 'recipe_kcal'}]
            },

        )
        return res.json(recipe)

    }
}

module.exports = new RecipeController()