import { Router } from 'express'
import { ListTeamsController } from '../../../../../modules/teams/useCases/listTeams/ListTeamsController'
import { RegisterTeamController } from '../../../../../modules/teams/useCases/registerTeam/RegisterTeamController'

const teamsRoutes = Router()

const registerTeamController = new RegisterTeamController()
const listTeamsController = new ListTeamsController()

teamsRoutes.post('/', registerTeamController.handle)
teamsRoutes.get('/', listTeamsController.handle)

export { teamsRoutes }
