const {Cook} = require('../models/models')
const ApiError = require('../error/ApiError');

class CookController {
    async create(req, res){
        const {userId, recipeId} = req.body
        const cook = await Cook.create({userId, recipeId})
        console.log(cook)
        return res.json(cook)
    }
    async getAll(req, res){
        const cooks = await Cook.findAll()
        return res.json(cooks)
    }
    async getOne(req, res){
        const {id} = req.params
        const cooks = await Cook.findOne(
            {where:{id}}
        )
        return res.json(cooks)
    }
    async delete(req, res){
        const {id} = req.params
        const cooks = await Cook.destroy(
            {where: {id}},
        )
        return res.json(cooks)
    }
}
module.exports = new CookController()