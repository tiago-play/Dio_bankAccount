import { Router, Request, Response } from "express";
import { UserController } from './controllers/UserController';

export const router = Router()

const userController = new UserController()

//podemos criar rotas com o mesmo end point desde que o método seja diferente
router.post('/user', userController.createUser)
router.get('/user', userController.getAllUsers)
router.delete('/user', (request: Request, response: Response) => {
    const user = request.body
    console.log('Deletando usuário...', user)
    return response.status(200).json({ message: 'Usuário deletado' })
})