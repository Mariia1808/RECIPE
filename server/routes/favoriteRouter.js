const Router = require('express')
const favoriteController = require('../controllers/favoriteController')
const router = new Router()

router.post('/', favoriteController.create)
router.get('/', favoriteController.getAll)
router.get('/:id', favoriteController.getOne)
router.delete('/:id', favoriteController.delete)


module.exports = router