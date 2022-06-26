
import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/erros/Apperror'
import { Team } from '../../infra/typeorm/entities/Team'
import { ITeamsRepository } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'

@injectable()
class ListTeamByInitialsUseCase {
	constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
	){}
  
	async execute(initials: string): Promise<Team>{
		
		const teamByInitials = await this.teamsRepository.findByInitials(initials)

		if(!teamByInitials){
			throw new AppError('team does not exists', 404)
		}

		return teamByInitials
	}
}
export { ListTeamByInitialsUseCase }
