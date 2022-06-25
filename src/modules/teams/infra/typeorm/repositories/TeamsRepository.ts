import { getRepository, Repository } from 'typeorm'
import { Team } from '../entities/Team'
import { ITeamsRepository } from './interfaces/ITeamsRepository'

interface ICreateTeam {
	initials: string
	name: string
	number_wins: number
}

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
}

export { TeamsRepository }
