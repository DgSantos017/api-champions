import { Team } from '../../entities/Team'

export interface ICreateTeam{
  initials: string
  name: string
  number_wins: number
}

interface ITeamsRepository {
  register(data: ICreateTeam): Promise<Team>
  findByNameTeam(name: string): Promise<Team>
  findByInitialsTeam(initials: string): Promise<Team>
  limitedNumberLetters(initials: string, name: string): Promise<boolean>
  list(): Promise<Team[]> 
  findById(id: string): Promise<Team>
  deleteTeam(initials: string): Promise<void> 
  updateTeam(id: string, initials: string, name:string): Promise<Team>
}

export { ITeamsRepository }
