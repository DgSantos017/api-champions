import { Team } from '../../entities/Team'

export interface ICreateTeam{
  initials: string
  name: string
  number_wins: number
}

export interface IUpdateTeam{
  initials?: string
  name?: string
}

interface ITeamsRepository {
  register(data: ICreateTeam): Promise<Team>
  findByNameTeam(name: string): Promise<Team>
  findByInitialsTeam(initials: string): Promise<Team>
  list(): Promise<Team[]> 
  findById(id: string): Promise<Team>
  deleteTeam(initials: string): Promise<void> 
  updateTeam(id: string, dataObjTeam: IUpdateTeam): Promise<Team>
}

export { ITeamsRepository }
