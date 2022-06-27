import { getRepository, Repository } from 'typeorm'

import { HistoricMatche } from '../entities/HistoricMatche'
import { IHistoricRepository } from './interfaces/IHistoricRepository'

class HistoricRepository implements IHistoricRepository {

	private repository: Repository<HistoricMatche>

	constructor() {
		this.repository = getRepository(HistoricMatche)
	}
	
	async findById(id: string): Promise<HistoricMatche> {
		return await this.repository.findOne(id)
	}
}

export { HistoricRepository }
