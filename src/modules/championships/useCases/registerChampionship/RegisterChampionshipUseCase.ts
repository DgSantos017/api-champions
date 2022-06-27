import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/erros/Apperror'
import { Championship } from '../../infra/typeorm/entities/ Championship'
import { IChampionshipRepository, ICreateChampionship } from '../../infra/typeorm/repositories/interfaces/IChampionshipsRepository'



@injectable()
class RegisterChampionshipUseCase {

	constructor(
		@inject('ChampionshipRepository')
		private ChampionshipRepository: IChampionshipRepository
	) {}

	async execute({ name, description, award, number_teams}:ICreateChampionship):Promise<Championship> {

		const firstLetterUppercase = name[0].toUpperCase() + name.substring(1).toLowerCase()

		const championshipAlreadyExists = await this.ChampionshipRepository.findByNameChampionship(firstLetterUppercase)
		if(championshipAlreadyExists){
			throw new AppError('Championship Already Exists', 409)
		}

		const nameLimited =  await this.ChampionshipRepository.nameLimitedTo25Letters(firstLetterUppercase)
		if(nameLimited === false){
			throw new AppError('a Championship can have a maximum of 25 letters')
		}

		const numberBase2 = await this.ChampionshipRepository.numberTeamsBase2(number_teams)
		if(numberBase2 === false){
			throw new AppError('the championship can only be registered if it has a number of teams greater than 4, less than 1024 and base 2')
		}

		const team = await this.ChampionshipRepository.register({ name: firstLetterUppercase, description, award, number_teams })
		return team
	}
}
export { RegisterChampionshipUseCase }
