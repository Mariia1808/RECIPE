const Router = require('express')
const router = new Router()
const recipeController = require('../controllers/recipeController')

router.post('/', recipeController.create)
router.get('/', recipeController.getAll)
router.get('/:id', recipeController.getOne)


module.exports = router