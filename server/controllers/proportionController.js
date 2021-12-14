const {Proportion} = require('../models/models')
const ApiError = require('../error/ApiError');

class ProportionController {
    async create(req, res){
        const {kolvo, recipeId, productId} = req.body
        const proportion = await Proportion.create({kolvo, recipeId, productId})
        console.log(proportion)
        return res.json(proportion)
    }
    async getAll(req, res){
        const proportions = await Proportion.findAll()
        return res.json(proportions)
    }
    async getOne(req, res){
        const {id} = req.params
        const proportions = await Proportion.findOne(
            {where:{id}}
        )
        return res.json(proportions)
    }
    async delete(req, res){
        const {id} = req.params
        const proportions = await Proportion.destroy(
            {where: {id}},
        )
        return res.json(proportions)
    }
}
module.exports = new ProportionController()