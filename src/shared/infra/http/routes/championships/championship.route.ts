import { Router } from 'express'
import { DeleteChampionshipController } from '../../../../../modules/championships/useCases/deleteChampionship/DeleteChampionshipController'
import { ListChampionshipsController } from '../../../../../modules/championships/useCases/listChampionships/ListChampionshipsController'
import { ListChampionshipByIdController } from '../../../../../modules/championships/useCases/listChampionshipsById/ListChampionshipsByIdController'
import { RegisterChampionshipController } from '../../../../../modules/championships/useCases/registerChampionship/RegisterChampionshipController'

const championshipRoutes = Router()

const registerChampionshipController = new RegisterChampionshipController()
const listChampionshipsController = new ListChampionshipsController()
const listChampionshipByIdController = new ListChampionshipByIdController()
const deleteChampionshipController = new DeleteChampionshipController()

championshipRoutes.post('/', registerChampionshipController.handle)
championshipRoutes.get('/', listChampionshipsController.handle)
championshipRoutes.get('/:id', listChampionshipByIdController.handle)
championshipRoutes.delete('/:id', deleteChampionshipController.handle)

export { championshipRoutes }
