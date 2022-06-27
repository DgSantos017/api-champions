import { inject, injectable } from 'tsyringe'

import { AppError } from '../../../../shared/utils/erros/Apperror'
import { validateInitials, validateName } from '../../../../shared/utils/validators/ValidateData'
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

		if(!(validateInitials(initialsUppercase) && validateName(firstLetterUppercase))){
			throw new AppError('the initial team acronyms must be exactly 3 characters long and the team name cannot exceed 25 characters')
		}

		const team = await this.teamsRepository.register({ initials: initialsUppercase, name: firstLetterUppercase, number_wins: 0 })
		return team
	}
}
export { RegisterTeamUseCase }
