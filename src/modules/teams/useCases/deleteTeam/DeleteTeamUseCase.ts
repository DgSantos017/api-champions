import { inject, injectable } from 'tsyringe'
import { AppError } from '../../../../shared/erros/Apperror'
import { ITeamsRepository } from '../../infra/typeorm/repositories/interfaces/ITeamsRepository'

@injectable()
class DeleteTeamUseCase {
	constructor(
    @inject('TeamsRepository')
    private teamsRepository: ITeamsRepository
	){}
  
	async execute(initials: string): Promise<void>{
		
		const teamByInitials = await this.teamsRepository.findByInitials(initials)

		if(!teamByInitials){
			throw new AppError('team does not exists', 404)
		}

		await this.teamsRepository.deleteTeam(initials)
	
	}
}
export { DeleteTeamUseCase }

