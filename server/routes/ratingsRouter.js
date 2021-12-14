const Router = require('express')
const ratingController = require('../controllers/ratingController')
const router = new Router()

router.post('/', ratingController.create)
router.get('/', ratingController.getAll)
router.get('/:id', ratingController.getOne)
router.delete('/:id', ratingController.delete)
router.put('/:id', ratingController.update)

module.exports = router