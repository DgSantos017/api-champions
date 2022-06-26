import { Router } from 'express'
import { ListChampionshipsController } from '../../../../../modules/championships/useCases/listChampionships/ListChampionshipsController'
import { RegisterChampionshipController } from '../../../../../modules/championships/useCases/registerChampionship/RegisterChampionshipController'

const championshipRoutes = Router()

const registerChampionshipController = new RegisterChampionshipController()
const listChampionshipsController = new ListChampionshipsController()

championshipRoutes.post('/', registerChampionshipController.handle)
championshipRoutes.get('/', listChampionshipsController.handle)

export { championshipRoutes }
