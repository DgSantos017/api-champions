import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListTeamByInitialsUseCase } from './ListTeamByInitialsUseCase'

class ListTeamByInitialsController {

	async handle(req: Request, res: Response): Promise<Response>{

		const { initials } = req.params

		const listTeamByInitialsUseCase = container.resolve(ListTeamByInitialsUseCase)
		const team = await listTeamByInitialsUseCase.execute(initials.toUpperCase())

		return res.json(team)
    
	}
}
export { ListTeamByInitialsController }
