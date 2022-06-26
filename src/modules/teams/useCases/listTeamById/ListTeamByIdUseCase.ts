
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
  
	async execute(initials: string): Promise<Team>{
		const teamsById = await this.teamsRepository.findById(initials)

		if(!teamsById){
			throw new AppError('team does not exists', 404)
		}

		return teamsById
	}
}
export { ListTeamByIdUseCase }
