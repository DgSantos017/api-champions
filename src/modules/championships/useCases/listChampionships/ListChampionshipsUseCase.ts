
import { inject, injectable } from 'tsyringe'
import { Championship } from '../../infra/typeorm/entities/ Championship'
import { IChampionshipRepository } from '../../infra/typeorm/repositories/interfaces/IChampionshipsRepository'

@injectable()
class ListChampionshipUseCase {
	constructor(
		@inject('ChampionshipRepository')
		private championshipRepository: IChampionshipRepository) {}

	async execute(): Promise<Championship[]>  {
		const championship = await this.championshipRepository.list()
		return championship
	}
}

export { ListChampionshipUseCase }
