const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User, Todo } = require('../models')

const SALT_ROUNDS = 11
const TOKEN_KEY = 'areallylonggoodkey'

const signUp = async (req, res) => {
	try {
		console.log(req.body)
		const { username, email, password } = req.body
		const password_digest = await bcrypt.hash(password, SALT_ROUNDS)
		const user = await User.create({
			username,
			email,
			password_digest
		})
		const payload = {
			id: user.id,
			username: user.username,
			email: user.email
		}

		const token = jwt.sign(payload, TOKEN_KEY)
		return res.status(201).json({ user, token })
	} catch (error) {
		console.log(
			'You made it to the signUp controller, but there was an error :('
		)
		return res.status(400).json({ error: error.message })
	}
}

const signIn = async (req, res) => {
	try {
		console.log(req.body)
		const { username, password } = req.body
		const user = await User.findOne({
			where: {
				username
			}
		})
		if (await bcrypt.compare(password, user.dataValues.password_digest)) {
			const payload = {
				id: user.id,
				username: user.username,
				email: user.email
			}

			const token = jwt.sign(payload, TOKEN_KEY)
			return res.status(201).json({ user, token })
		} else {
			res.status(401).send('Invalid Credentials')
		}
	} catch (error) {
		return res.status(500).json({ error: error.message })
	}
}
const createTodo = async (req, res) => {
	try {
		console.log('req.body:', req.body)
		const createdTodo = await Todo.create(req.body)

		return res.status(201).json({
			todo: {
				createdTodo
			}
		})
	} catch (error) {
		console.log(error)
		return res.status(500).json({ error: error.message })
	}
}

const getAllUsers = async (req,res) => {  
    try {
        const users = await User.findAll();
        return res.status(200).json({ users })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAllTodos = async (req, res) => {
	try {
		const todos = await Todo.findAll()
		return res.status(200).json({ todos })
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const getTodoById = async (req, res) => {
	try {
		const { id } = req.params
		const todo = await Todo.findOne({
			where: { id: id }
		})
		if (todo) {
			return res.status(200).json({ todo })
		}
		return res.status(404).send('To-Do with the specified ID does not exists')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const updateTodo = async (req, res) => {
	try {
		const { id } = req.params
		const { todo } = req.body
		const [updated] = await Todo.update(todo, {
			where: { id: id }
		})
		if (updated) {
			const updatedTodo = await Todo.findOne({ where: { id: id } })
			return res.status(202).json({ todo: updatedTodo })
		}
		throw new Error('To-Do not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

const deleteTodo = async (req, res) => {
	try {
		const { id } = req.params
		const deleted = await Todo.destroy({
			where: { id: id }
		})
		if (deleted) {
			return res.status(202).send('To-Do deleted')
		}
		throw new Error('To-Do not found')
	} catch (error) {
		return res.status(500).send(error.message)
	}
}

module.exports = {
	signUp,
	signIn,
	createTodo,
	getAllTodos,
	getTodoById,
	updateTodo,
	deleteTodo,
	getAllUsers
}
