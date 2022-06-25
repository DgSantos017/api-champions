import { container } from 'tsyringe'
import { ITeamsRepository } from '../../modules/teams/infra/typeorm/repositories/interfaces/ITeamsRepository'
import { TeamsRepository } from '../../modules/teams/infra/typeorm/repositories/TeamsRepository'

container.registerSingleton<ITeamsRepository>(
	'TeamsRepository',
	TeamsRepository
)
