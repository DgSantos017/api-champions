import { inject, injectable } from 'tsyringe'

import { HistoricMatche } from '../../infra/typeorm/entities/HistoricMatche'
import { IHistoricRepository } from '../../infra/typeorm/repositories/interfaces/IHistoricRepository'

interface IGeneretaHistoric {
  id: string
	confrontation: string
	winner: string
  phase: string
  championship: string
}

@injectable()
class StartCompetitionUseCase {

	constructor(
		@inject('HistoricRepository')
		private historicRepository: IHistoricRepository
	) {}

	async execute({ id, championship, confrontation, phase, winner }:IGeneretaHistoric):Promise<HistoricMatche> {
		
		const historic = await this.historicRepository.findById(id)
		return historic
	}
}
export { StartCompetitionUseCase }
