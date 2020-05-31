const { Router } = require('express')
const controllers = require('../controllers')
const router = Router()
const restrict = require('../helpers')

router.get('/', (req, res) => res.send('This is the root!')) //works good

router.post('/sign-up', controllers.signUp) //works good
router.post('/sign-in', controllers.signIn) //works good

router.get('/todos', controllers.getAllTodos) //works good
router.get('/users', controllers.getAllUsers) //works good
router.get('/todos/:id', controllers.getTodoById) //works good
// restricted routes
router.get('/users/:id/todos', restrict, controllers.getUserTodos) //??
router.post('/todos', restrict, controllers.createTodo) //works good 
router.put('/todos/:id', restrict, controllers.updateTodo)
router.delete('/todos/:id', restrict, controllers.deleteTodo)

module.exports = router
