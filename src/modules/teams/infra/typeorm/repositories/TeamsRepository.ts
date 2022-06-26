import { getRepository, Repository } from 'typeorm'
import { Team } from '../entities/Team'
import { ICreateTeam, ITeamsRepository } from './interfaces/ITeamsRepository'

class TeamsRepository implements ITeamsRepository {

	private repository: Repository<Team>

	constructor() {
		this.repository = getRepository(Team)
	}
	
	async register({ initials, name, number_wins }: ICreateTeam): Promise<Team> {
		const team = this.repository.create({ initials, name, number_wins })
		await this.repository.save(team)
		return team
	}	

	async findByNameTeam(name: string): Promise<Team> {
		const nameTeam = await this.repository.findOne({ name })
		return nameTeam
	}

	async findByInitialsTeam(initials: string): Promise<Team> {
		const nameTeam = await this.repository.findOne({ initials })
		return nameTeam
	}

	async threeLetterInitials(initials: string): Promise<boolean> {
		
		if(initials.length === 3){
			return true
		} else{
			return false
		}
	}

	async nameLimitedTo23Letters(name: string): Promise<boolean> {
		if(name.length > 23){
			return false
		} else{
			return true
		}
	}

	async list(): Promise<Team[]> {
		const teams = await this.repository.find()
		return teams
	}
}

export { TeamsRepository }
