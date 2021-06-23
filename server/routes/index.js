const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const typeRouter = require('./typeRouter')
const recipeRouter = require('./recipeRouter')



router.use('/user', userRouter)
router.use('/recipe', recipeRouter)
router.use('/type', typeRouter)



module.exports = router