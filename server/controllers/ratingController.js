const {Rating} = require('../models/models')
const ApiError = require('../error/ApiError');

class RatingController {
    async create(req, res){
        const {rate, userId, recipeId } = req.body
        const rating = await Rating.create({rate, userId, recipeId})
        console.log(rating)
        return res.json(rating)
    }
    async getAll(req, res){
        const ratings = await Rating.findAll()
        return res.json(ratings)
    }
    async getOne(req, res){
        const {id} = req.params
        const ratings = await Rating.findOne(
            {where:{id}}
        )
        return res.json(ratings)
    }
    async delete(req, res){
        const {id} = req.params
        const ratings = await Rating.destroy(
            {where: {id}},
        )
        return res.json(ratings)
    }
    async update(req, res){
        const {id} = req.params
        const {rate} = req.body
        const ratings = await(await (Rating.findOne({where: {id}}))).update({rate:rate})
        return res.json(ratings)
    }
}
module.exports = new RatingController()