import { Router } from 'express'
import { ListChampionshipsController } from '../../../../../modules/championships/useCases/listChampionships/ListChampionshipsController'
import { ListChampionshipByIdController } from '../../../../../modules/championships/useCases/listChampionshipsById/ListChampionshipsByIdController'
import { RegisterChampionshipController } from '../../../../../modules/championships/useCases/registerChampionship/RegisterChampionshipController'

const championshipRoutes = Router()

const registerChampionshipController = new RegisterChampionshipController()
const listChampionshipsController = new ListChampionshipsController()
const listChampionshipByIdController = new ListChampionshipByIdController()

championshipRoutes.post('/', registerChampionshipController.handle)
championshipRoutes.get('/', listChampionshipsController.handle)
championshipRoutes.get('/:id', listChampionshipByIdController.handle)

export { championshipRoutes }
