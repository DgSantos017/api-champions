import { Router } from 'express'
import { RegisterChampionshipController } from '../../../../../modules/championships/useCases/registerChampionship/RegisterChampionshipController'

const championshipRoutes = Router()

const registerChampionshipController = new RegisterChampionshipController()

championshipRoutes.post('/', registerChampionshipController.handle)

export { championshipRoutes }
