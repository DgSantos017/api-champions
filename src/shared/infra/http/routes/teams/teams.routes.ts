import { Router } from 'express'
import { RegisterTeamController } from '../../../../../modules/teams/useCases/registerTeam/RegisterTeamController'

const teamsRoutes = Router()

const registerTeamController = new RegisterTeamController()

teamsRoutes.post('/', registerTeamController.handle)

export { teamsRoutes }
