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
		const nameTeam = await this.repository.findOne({ name })
		return nameTeam
	}

	async findByInitialsTeam(initials: string): Promise<Team> {
		const nameTeam = await this.repository.findOne({ initials })
		return nameTeam
	}

	async list(): Promise<Team[]> {
		const teams = await this.repository.find()
		return teams
	}

	async findById(id: string): Promise<Team> {
		const team = await this.repository.findOne(id)
		return team
	}

	async deleteTeam(initials: string): Promise<void> {
		await this.repository.delete(initials)
	}

	async updateTeam(id: string, dataObjTeam: IUpdateTeam): Promise<Team> {
		return this.repository.save({ id, ...dataObjTeam })
	}
	
}

export { TeamsRepository }
