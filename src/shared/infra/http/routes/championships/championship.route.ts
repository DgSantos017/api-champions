import { Router } from 'express'

import { DeleteChampionshipController } from '../../../../../modules/championships/useCases/deleteChampionship/DeleteChampionshipController'
import { ListChampionshipsController } from '../../../../../modules/championships/useCases/listChampionships/ListChampionshipsController'
import { ListChampionshipByIdController } from '../../../../../modules/championships/useCases/listChampionshipsById/ListChampionshipsByIdController'
import { RegisterChampionshipController } from '../../../../../modules/championships/useCases/registerChampionship/RegisterChampionshipController'
import { UpdateChampionshipController } from '../../../../../modules/championships/useCases/updateChampionship/UpdateChampionshipController'

const championshipRoutes = Router()

const registerChampionshipController = new RegisterChampionshipController()
const listChampionshipsController = new ListChampionshipsController()
const listChampionshipByIdController = new ListChampionshipByIdController()
const deleteChampionshipController = new DeleteChampionshipController()
const updateChampionshipUseCase = new UpdateChampionshipController()

championshipRoutes.post('/', registerChampionshipController.handle)
championshipRoutes.get('/', listChampionshipsController.handle)
championshipRoutes.get('/:id', listChampionshipByIdController.handle)
championshipRoutes.delete('/:id', deleteChampionshipController.handle)
championshipRoutes.put('/:id', updateChampionshipUseCase.handle)

export { championshipRoutes }
