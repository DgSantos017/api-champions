import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/erros/Apperror'
import { Team } from '../../infra/typeorm/entities/Team'
import { ITeamsRepository } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'

@injectable()
class ListTeamByIdUseCase {
	constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
	){}
  
	async execute(id: string): Promise<Team>{
		
		const teamById = await this.teamsRepository.findById(id)

		if(!teamById){
			throw new AppError('team does not exists', 404)
		}

		return teamById
	}
}
export { ListTeamByIdUseCase }
