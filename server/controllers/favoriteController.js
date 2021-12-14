const {Favorites} = require('../models/models')
const ApiError = require('../error/ApiError');

class FavoriteController {
    async create(req, res){
        const {recipeId, userId} = req.body
        const favorite = await Favorites.create({recipeId, userId})
        console.log(favorite)
        return res.json(favorite)
    }
    async getAll(req, res){
        let {recipeId, userId} = req.body
        let favorites;
        if(!recipeId && !userId) {
            favorites = await Favorites.findAndCountAll()
        }
        if(recipeId && !userId) {
            favorites = await Favorites.findAndCountAll({where:{recipeId}})
        }
        if(!recipeId && userId) {
            favorites = await Favorites.findAndCountAll({where:{userId}})
        }
        if(recipeId && userId) {
            favorites = await Favorites.findAndCountAll({where:{userId, recipeId}})
        }
        return res.json(favorites)

    }
    async getOne(req, res){
        const {id} = req.params
        const favorites = await Favorites.findOne(
            {where:{id}}
        )
        return res.json(favorites)
    }
    async delete(req, res){
        const {id} = req.params
        const favorites = await Favorites.destroy(
            {where: {id}},
        )
        return res.json(favorites)
    }
}
module.exports = new FavoriteController()