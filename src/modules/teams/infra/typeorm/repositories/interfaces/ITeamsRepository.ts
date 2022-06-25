import { Team } from '../../entities/Team'

interface ICreateTeam{
  initials: string
  name: string
  number_wins: number
}

interface ITeamsRepository {
  register(data: ICreateTeam): Promise<Team>
}

export { ITeamsRepository }
