import { Championship } from '../../entities/ Championship'

export interface ICreateChampionship {
  name: string
  description: string
  number_teams: number
  award: string
}

interface IChampionshipRepository {
  register(data: ICreateChampionship): Promise<Championship>
  findByNameChampionship(name: string): Promise<Championship>
  nameLimitedTo23Letters(name: string): Promise<boolean>
  numberTeamsBase2(number_teams: number): Promise<boolean>
  list(): Promise<Championship[]> 
  findById(id: string): Promise<Championship>
  deleteChampionship(id: string): Promise<void>
  updateChampionship(id: string, initials: string, name:string): Promise<Championship> 
}

export { IChampionshipRepository }
