import { Router } from 'express'
import { DeleteTeamController } from '../../../../../modules/teams/useCases/deleteTeam/DeleteTeamController'
import { ListTeamByIdController } from '../../../../../modules/teams/useCases/listTeamById/ListTeamByIdController'
import { ListTeamsController } from '../../../../../modules/teams/useCases/listTeams/ListTeamsController'
import { RegisterTeamController } from '../../../../../modules/teams/useCases/registerTeam/RegisterTeamController'
import { UpdateTeamController } from '../../../../../modules/teams/useCases/updateTeam/UpdateTeamController'

const teamsRoutes = Router()

const registerTeamController = new RegisterTeamController()
const listTeamsController = new ListTeamsController()
const listTeamByIdController = new ListTeamByIdController()
const updateTeamController = new UpdateTeamController()
const deleteTeamController = new DeleteTeamController()

teamsRoutes.post('/', registerTeamController.handle)
teamsRoutes.get('/', listTeamsController.handle)
teamsRoutes.get('/:id', listTeamByIdController.handle)
teamsRoutes.put('/:id', updateTeamController.handle)
teamsRoutes.delete('/:id', deleteTeamController.handle)

export { teamsRoutes }
