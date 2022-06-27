import { inject, injectable } from 'tsyringe'
import { validate } from 'uuid'
import { AppError } from '../../../../shared/erros/Apperror'
import { IChampionshipRepository } from '../../infra/typeorm/repositories/interfaces/IChampionshipsRepository'


@injectable()
class DeleteChampionshipUseCase {
	constructor(
    @inject('ChampionshipRepository')
    private championshipsRepository: IChampionshipRepository
	){}
  
	async execute(id: string): Promise<void>{

		const uuidValidate = uuid => validate(uuid)
		if(!uuidValidate(id)){
			throw new AppError('championship does not exists', 404)
		}
		
		const championshipById = await this.championshipsRepository.findById(id)

		if(!championshipById){
			throw new AppError('championship does not exists', 404)
		}

		await this.championshipsRepository.deleteChampionship(id)
	
	}
}
export { DeleteChampionshipUseCase }
