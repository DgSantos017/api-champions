import { Championship } from '../../entities/ Championship'

export interface ICreateChampionship {
  name: string
  description: string
  number_teams: number
  award: string
}

export interface IUpdateChampionsship{
  name?: string
  description?: string
  award?: string
  number_teams?: number
}

interface IChampionshipRepository {
  register(data: ICreateChampionship): Promise<Championship>
  findByNameChampionship(name: string): Promise<Championship>
  list(): Promise<Championship[]> 
  findById(id: string): Promise<Championship>
  deleteChampionship(id: string): Promise<void>
  updateChampionship(id: string, dataChampionship: IUpdateChampionsship): Promise<Championship>
}

export { IChampionshipRepository }
