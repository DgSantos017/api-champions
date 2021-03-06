import { getRepository, Repository } from 'typeorm'

import { Championship } from '../entities/ Championship'
import { IChampionshipRepository, ICreateChampionship, IUpdateChampionsship } from './interfaces/IChampionshipsRepository'

class ChampionshipsRepository implements IChampionshipRepository {

	private repository: Repository<Championship>

	constructor() {
		this.repository = getRepository(Championship)
	}
	
	async register({ name, description, award, number_teams }: ICreateChampionship): Promise<Championship> {
		const championship = this.repository.create({ name, description, award, number_teams })
		await this.repository.save(championship)
		return championship
	}	

	async findByNameChampionship(name: string): Promise<Championship> {
		return await this.repository.findOne({ name })
	}

	async list(): Promise<Championship[]> {
		return await this.repository.find()
	}

	async findById(id: string): Promise<Championship> {
		return await this.repository.findOne(id)
	}

	async deleteChampionship(id: string): Promise<void> {
		await this.repository.delete(id)
	}

	async updateChampionship(id: string, dataChampionship : IUpdateChampionsship): Promise<Championship> {
		return this.repository.save({ id, ...dataChampionship })
	}
}

export { ChampionshipsRepository }
