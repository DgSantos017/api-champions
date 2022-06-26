import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/erros/Apperror'
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

		const initialsUppercase = initials.toUpperCase()
		const firstLetterUppercase = name[0].toUpperCase() + name.substring(1).toLowerCase()

		const initialsAlreadyExists = await this.teamsRepository.findByInitialsTeam(initialsUppercase)
		if(initialsAlreadyExists){
			throw new AppError('Team Initials already exists', 409)
		}

		const teamAlreadyExists = await this.teamsRepository.findByNameTeam(firstLetterUppercase)
		if(teamAlreadyExists){
			throw new AppError('Team name already exists', 409)
		}

		const threeLetters =  await this.teamsRepository.threeLetterInitials(initialsUppercase)
		if(threeLetters === false){
			throw new AppError('the initials of each team must contain exactly 3 letters')
		}

		const nameLimited =  await this.teamsRepository.nameLimitedTo23Letters(firstLetterUppercase)
		if(nameLimited === false){
			throw new AppError('a team can have a maximum of 23 letters')
		}

		const team = await this.teamsRepository.register({ initials: initialsUppercase, name: firstLetterUppercase, number_wins: 0 })
		return team
	}
}
export { RegisterTeamUseCase }
