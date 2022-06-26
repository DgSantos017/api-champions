import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/erros/Apperror'
import { Team } from '../../infra/typeorm/entities/Team'
import { ITeamsRepository } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'

interface IRequest {
	initials: string
	name: string
	id: string
}

@injectable()
class UpdateTeamUseCase {

	constructor(
		@inject('TeamsRepository')
		private teamsRepository: ITeamsRepository
	) {}

	async execute({ id, initials, name }:IRequest):Promise<Team> {

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

		const uuidExists = await this.teamsRepository.findById(id)

		if(!uuidExists){
			throw new AppError('Team does not exists')
		}
		
		
		const teamUpdated = await this.teamsRepository.updateTeam(uuidExists.id, initials, name)

		return teamUpdated
	}
}
export { UpdateTeamUseCase }
