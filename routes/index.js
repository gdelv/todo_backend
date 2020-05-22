const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is the root!')) //works good

router.post('/sign-up', controllers.signUp)
router.post('/sign-in', controllers.signIn)

router.get('/todos', controllers.getAllTodos) //works good
router.get('/users', controllers.getAllUsers) //works good
router.get('/todos/:id', controllers.getTodoById) //works good
router.post('/todos', restrict, controllers.createTodo)
router.put('/todos/:id', restrict, controllers.updateTodo)
router.delete('/todos/:id', restrict, controllers.deleteTodo)

module.exports = router
