import { Router } from 'express'
import { ListTeamByIdController } from '../../../../../modules/teams/useCases/listTeamById/ListTeamByIdController'
import { ListTeamsController } from '../../../../../modules/teams/useCases/listTeams/ListTeamsController'
import { RegisterTeamController } from '../../../../../modules/teams/useCases/registerTeam/RegisterTeamController'

const teamsRoutes = Router()

const registerTeamController = new RegisterTeamController()
const listTeamsController = new ListTeamsController()
const listTeamByIdController = new ListTeamByIdController()

teamsRoutes.post('/', registerTeamController.handle)
teamsRoutes.get('/', listTeamsController.handle)
teamsRoutes.get('/:initials', listTeamByIdController.handle)

export { teamsRoutes }
