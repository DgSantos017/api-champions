import { inject, injectable } from 'tsyringe'
import { validate } from 'uuid'
import { AppError } from '../../../../shared/erros/Apperror'
import { Championship } from '../../infra/typeorm/entities/ Championship'
import { IChampionshipRepository } from '../../infra/typeorm/repositories/interfaces/IChampionshipsRepository'

interface IRequest {
  id: string
	name: string, 
  description: string, 
  number_teams: number, 
  award: string
}

@injectable()
class UpdateTeamUseCase {

	constructor(
		@inject('ChampionshipRepository')
		private championship: IChampionshipRepository
	) {}

	async execute({ id, name, description, number_teams, award }:IRequest):Promise<Championship> {

		const nameFirstLetterUppercase = name[0].toUpperCase() + name.substring(1).toLowerCase()

		const uuidValidate = uuid => validate(uuid)
		if(!uuidValidate(id)){
			throw new AppError('championship does not exists', 404)
		}

		const championshipAlreadyExists = await this.championship.findByNameChampionship(nameFirstLetterUppercase)
		if(championshipAlreadyExists){
			throw new AppError('Championship name already exists', 409)
		}

		const limitedNumber =  await this.championship.nameLimitedTo25Letters(nameFirstLetterUppercase)
		if(limitedNumber === false){
			throw new AppError('the championship name cannot exceed 25 characters')
		}

		const championshipUpdated = await this.championship.updateChampionship(id, nameFirstLetterUppercase, description, number_teams, award)

		return championshipUpdated
	}
}
export { UpdateTeamUseCase }
