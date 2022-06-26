
import { inject, injectable } from 'tsyringe'
import { validate } from 'uuid'
import { AppError } from '../../../../shared/erros/Apperror'
import { Championship } from '../../infra/typeorm/entities/ Championship'
import { IChampionshipRepository } from '../../infra/typeorm/repositories/interfaces/IChampionshipsRepository'

@injectable()
class ListChampionhipByIdUseCase {
	constructor(
    @inject('ChampionshipRepository')
    private championhipRepository: IChampionshipRepository
	){}
  
	async execute(id: string): Promise<Championship>{

		const uuidValidate = uuid => validate(uuid)
		if(!uuidValidate(id)){
			throw new AppError('team does not exists', 404)
		}

		const championhipById = await this.championhipRepository.findById(id)

		if(!championhipById){
			throw new AppError('Championhip does not exists', 404)
		}

		return championhipById
	}
}
export { ListChampionhipByIdUseCase }
