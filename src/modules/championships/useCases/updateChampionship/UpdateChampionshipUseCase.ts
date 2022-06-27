import { inject, injectable } from 'tsyringe'
import { validate as uuidValidate } from 'uuid'

import { AppError } from '../../../../shared/utils/erros/Apperror'
import { validateName } from '../../../../shared/utils/validators/ValidateData'
import { Championship } from '../../infra/typeorm/entities/ Championship'
import { IChampionshipRepository, IUpdateChampionsship } from '../../infra/typeorm/repositories/interfaces/IChampionshipsRepository'

interface IRequest {
	id: string
	dataChampionship: IUpdateChampionsship
}

@injectable()
class UpdateChampionshipUseCase {

	constructor(
		@inject('ChampionshipRepository')
		private championshipRepository: IChampionshipRepository
	) {}

	async execute({ id, dataChampionship }: IRequest): Promise<Championship> {

		if (!uuidValidate(id)) {
			throw new AppError('invalid UUID')
		}

		const championship = await this.championshipRepository.findById(id)

		if(!championship){
			throw new AppError('championship does not exists', 404)
		} else{
			if(
				championship.name.toUpperCase() === dataChampionship.name?.toUpperCase() 
				&& championship.description === dataChampionship.description
				&& championship.award === dataChampionship.award
				&& championship.number_teams === dataChampionship.number_teams
			){
				return championship
			}
		}

		if (Object.keys(dataChampionship).length === 0) {
			throw new AppError('team data is invalid')
		}

		if (dataChampionship.name) {

			dataChampionship.name = dataChampionship.name[0].toUpperCase() + dataChampionship.name.substring(1).toLowerCase()

			if(championship.name === dataChampionship.name && Object.keys(dataChampionship).length === 1){
				return championship
			 }

			if (!validateName(dataChampionship.name)) {
				throw new AppError('the team name cannot exceed 25 characters')
			}

			const championshipAlreadyExists = await this.championshipRepository.findByNameChampionship(dataChampionship.name)
			if (championshipAlreadyExists && championship.name !== dataChampionship.name) {
				throw new AppError('Team name already exists', 409)
			}
		}

		if (dataChampionship.description) {

			if(championship.description === dataChampionship.description && Object.keys(dataChampionship).length === 1){
				return championship
			 }
		}

		if (dataChampionship.award) {

			if(championship.award === dataChampionship.award && Object.keys(dataChampionship).length === 1){
				return championship
			 }
		}

		if (dataChampionship.number_teams) {

			if(championship.number_teams === dataChampionship.number_teams && Object.keys(dataChampionship).length === 1){
				return championship
			 }
		}

		return await this.championshipRepository.updateChampionship(id, dataChampionship)

	}
}
export { UpdateChampionshipUseCase }
