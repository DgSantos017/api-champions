import { Router } from 'express'
import { DeleteTeamController } from '../../../../../modules/teams/useCases/deleteTeam/DeleteTeamController'
import { ListTeamByInitialsController } from '../../../../../modules/teams/useCases/listTeamByInitials/ListTeamByInitialsController'
import { ListTeamsController } from '../../../../../modules/teams/useCases/listTeams/ListTeamsController'
import { RegisterTeamController } from '../../../../../modules/teams/useCases/registerTeam/RegisterTeamController'

const teamsRoutes = Router()

const registerTeamController = new RegisterTeamController()
const listTeamsController = new ListTeamsController()
const listTeamByIdController = new ListTeamByInitialsController()
const deleteTeamController = new DeleteTeamController()

teamsRoutes.post('/', registerTeamController.handle)
teamsRoutes.get('/', listTeamsController.handle)
teamsRoutes.get('/:initials', listTeamByIdController.handle)
teamsRoutes.delete('/:initials', deleteTeamController.handle)

export { teamsRoutes }
