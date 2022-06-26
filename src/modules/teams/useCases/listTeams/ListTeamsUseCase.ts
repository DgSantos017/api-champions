
import { inject, injectable } from 'tsyringe'
import { Team } from '../../infra/typeorm/entities/Team'
import { ITeamsRepository } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'

@injectable()
class ListTeamsUseCase {
	constructor(
		@inject('TeamsRepository')
		private teamsRepository: ITeamsRepository) {}

	async execute(): Promise<Team[]>  {
		const teams = await this.teamsRepository.list()
		return teams
	}
}

export { ListTeamsUseCase }
