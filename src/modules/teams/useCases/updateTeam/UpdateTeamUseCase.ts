import { inject, injectable } from 'tsyringe'
import { validate } from 'uuid'
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

		const uuidValidate = uuid => validate(uuid)
		if(!uuidValidate(id)){
			throw new AppError('team does not exists', 404)
		}

		const initialsAlreadyExists = await this.teamsRepository.findByInitialsTeam(initialsUppercase)
		if(initialsAlreadyExists){
			throw new AppError('Team Initials already exists', 409)
		}

		const teamAlreadyExists = await this.teamsRepository.findByNameTeam(firstLetterUppercase)
		if(teamAlreadyExists){
			throw new AppError('Team name already exists', 409)
		}

		const limitedNumber =  await this.teamsRepository.limitedNumberLetters(initialsUppercase, firstLetterUppercase)
		if(limitedNumber === false){
			throw new AppError('the initial team acronyms must be exactly 3 characters long and the team name cannot exceed 25 characters')
		}
		
		const teamUpdated = await this.teamsRepository.updateTeam(id, initials, name)

		return teamUpdated
	}
}
export { UpdateTeamUseCase }
