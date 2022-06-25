import { inject, injectable } from 'tsyringe'
import { Team } from '../../infra/typeorm/entities/Team'
import { ITeamsRepository } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'



interface IRequest {
	initials: string
	name: string
}

@injectable()
class RegisterTeamUseCase {

	constructor(
		@inject('TeamsRepository')
		private teamsRepository: ITeamsRepository
	) {}

	async execute({ initials, name }:IRequest):Promise<Team> {

		const team = await this.teamsRepository.register({ initials, name, number_wins: 0 })
		return team
	}
}
export { RegisterTeamUseCase }
