import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateTeamUseCase } from './UpdateChampionshipUseCase'

class UpdateChampionshipController {

	async handle(req: Request, res: Response): Promise<Response>{

		const  { id } = req.params
		const { name, description, number_teams, award } = req.body
    
		const updateChampionshipUseCase = container.resolve(UpdateTeamUseCase)
		const result = await updateChampionshipUseCase.execute({ id, name, description, number_teams, award })

		return res.json(result)
    
	}
}
export { UpdateChampionshipController }
