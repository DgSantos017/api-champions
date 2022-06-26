import { getRepository, Repository } from 'typeorm'
import { Championship } from '../entities/ Championship'
import { IChampionshipRepository, ICreateChampionship } from './interfaces/IChampionshipsRepository'

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
		const nameChampionship = await this.repository.findOne({ name })
		return nameChampionship
	}

	async nameLimitedTo23Letters(name: string): Promise<boolean> {
		if(name.length > 23){
			return false
		} else{
			return true
		}
	}

	async numberTeamsBase2(number_teams: number): Promise<boolean> {
		if(
			number_teams === 4 || number_teams === 8 || number_teams === 16 ||
			number_teams === 32 || number_teams === 64 || number_teams === 128 ||
			number_teams === 256 || number_teams === 512 || number_teams === 1024 
		){
			return true
		} 
		else{
			return false
		}
	}

}

export { ChampionshipsRepository }
