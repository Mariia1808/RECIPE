const Router = require('express')
const router = new Router()
const recipeController = require('../controllers/recipeController')

router.post('/', recipeController.create)
router.get('/', recipeController.getAll)
router.get('/:id', recipeController.getOne)
router.put('/:id', recipeController.update)
router.delete('/:id', recipeController.delete)


module.exports = router