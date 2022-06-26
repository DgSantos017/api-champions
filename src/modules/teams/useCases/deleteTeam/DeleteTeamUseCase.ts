import { inject, injectable } from 'tsyringe'
import { validate } from 'uuid'
import { AppError } from '../../../../shared/erros/Apperror'
import { ITeamsRepository } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'

@injectable()
class DeleteTeamUseCase {
	constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
	){}
  
	async execute(id: string): Promise<void>{
		
		const uuidValidate = uuid => validate(uuid)
		if(!uuidValidate(id)){
			throw new AppError('team does not exists', 404)
		}

		const teamById = await this.teamsRepository.findById(id)
		if(!teamById){
			throw new AppError('team does not exists', 404)
		}

		await this.teamsRepository.deleteTeam(id)
	
	}
}
export { DeleteTeamUseCase }

