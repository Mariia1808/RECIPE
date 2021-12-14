const Router = require('express')
const cookController = require('../controllers/cookController')
const router = new Router()

router.post('/', cookController.create)
router.get('/', cookController.getAll)
router.get('/:id', cookController.getOne)
router.delete('/:id', cookController.delete)


module.exports = router