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
  threeLetterInitials(initials: string): Promise<boolean>
  nameLimitedTo23Letters(name: string): Promise<boolean>
  list(): Promise<Team[]> 
  findByInitials(initials: string): Promise<Team>
  deleteTeam(initials: string): Promise<void> 
  
}

export { ITeamsRepository }
