import { inject, injectable } from 'tsyringe'
import { validate as uuidValidate } from 'uuid'

import { AppError } from '../../../../shared/utils/erros/Apperror'
import { validateInitials, validateName } from '../../../../shared/utils/validators/ValidateData'
import { Team } from '../../infra/typeorm/entities/Team'
import { ITeamsRepository, IUpdateTeam } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'

interface IRequest {
	id: string
	objTeamData: IUpdateTeam
}

@injectable()
class UpdateTeamUseCase {

	constructor(
		@inject('TeamsRepository')
		private teamsRepository: ITeamsRepository
	) {}

	async execute({ id, objTeamData }: IRequest): Promise<Team> {

		if (!uuidValidate(id)) {
			throw new AppError('invalid UUID')
		}

		const team = await this.teamsRepository.findById(id)

		if(!team){
			throw new AppError('team does not exists', 404)
		} else{
			if(
				team.initials.toUpperCase() === objTeamData.initials?.toUpperCase() 
				&& team.name.toUpperCase() === objTeamData.name?.toUpperCase()){
				return team
			}
		}

		if (Object.keys(objTeamData).length === 0) {
			throw new AppError('team data is invalid')
		}

		if (objTeamData.initials) {

			objTeamData.initials = objTeamData.initials.toUpperCase()

			if(team.initials === objTeamData.initials && Object.keys(objTeamData).length === 1){
				 return team
			}

			if (!validateInitials(objTeamData.initials)) {
				throw new AppError('the initial team acronyms must be exactly 3 characters')
			}

			const initialsAlreadyExists = await this.teamsRepository.findByInitialsTeam(objTeamData.initials)
			if (initialsAlreadyExists && team.initials !== objTeamData.initials) {
				throw new AppError('Team Initials already exists', 409)
			}
		}

		if (objTeamData.name) {

			objTeamData.name = objTeamData.name[0].toUpperCase() + objTeamData.name.substring(1).toLowerCase()

			if(team.name === objTeamData.name && Object.keys(objTeamData).length === 1){
				return team
			 }

			if (!validateName(objTeamData.name)) {
				throw new AppError('The team name cannot exceed 25 characters')
			}

			const teamAlreadyExists = await this.teamsRepository.findByNameTeam(objTeamData.name)
			if (teamAlreadyExists && team.name !== objTeamData.name) {
				throw new AppError('Team name already exists', 409)
			}
		}

		return await this.teamsRepository.updateTeam(id, objTeamData)

	}
}
export { UpdateTeamUseCase }
