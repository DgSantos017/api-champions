import { container } from 'tsyringe'

import { ChampionshipsRepository } from '../../../modules/championships/infra/typeorm/repositories/ChampionshipsRepository'
import { IChampionshipRepository } from '../../../modules/championships/infra/typeorm/repositories/interfaces/IChampionshipsRepository'
import { HistoricRepository } from '../../../modules/competition/infra/typeorm/repositories/HistoricRepository'
import { IHistoricRepository } from '../../../modules/competition/infra/typeorm/repositories/interfaces/IHistoricRepository'
import { ITeamsRepository } from '../../../modules/teams/infra/typeorm/repositories/interfaces/ITeamsRepository'
import { TeamsRepository } from '../../../modules/teams/infra/typeorm/repositories/TeamsRepository'

container.registerSingleton<ITeamsRepository>(
	'TeamsRepository',
	TeamsRepository
)

container.registerSingleton<IChampionshipRepository>(
	'ChampionshipRepository',
	ChampionshipsRepository
)

container.registerSingleton<IHistoricRepository>(
	'HistoricRepository',
	HistoricRepository
)

