import { getRepository, Repository } from 'typeorm'

import { Team } from '../entities/Team'
import { ICreateTeam, ITeamsRepository, IUpdateTeam } from './interfaces/ITeamsRepository'

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
		return await this.repository.findOne({ name })
	}

	async findByInitialsTeam(initials: string): Promise<Team> {
		return await this.repository.findOne({ initials })
	}

	async list(): Promise<Team[]> {
		return await this.repository.find()
	}

	async findById(id: string): Promise<Team> {
		return await this.repository.findOne(id)
	}

	async deleteTeam(initials: string): Promise<void> {
		await this.repository.delete(initials)
	}

	async updateTeam(id: string, dataObjTeam: IUpdateTeam): Promise<Team> {
		return this.repository.save({ id, ...dataObjTeam })
	}
	
}

export { TeamsRepository }
