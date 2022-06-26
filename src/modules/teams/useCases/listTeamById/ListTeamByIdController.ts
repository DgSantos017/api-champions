import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTeamByIdUseCase } from './ListTeamByIdUseCase'

class ListTeamByIdController {

	async handle(req: Request, res: Response): Promise<Response>{

		const { id } = req.params

		const listTeamByIdUseCase = container.resolve(ListTeamByIdUseCase)
		const team = await listTeamByIdUseCase.execute(id)

		return res.json(team)
    
	}
}
export { ListTeamByIdController }
