import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteTeamUseCase } from './DeleteTeamUseCase'

class DeleteTeamController {

	async handle(req: Request, res: Response): Promise<Response>{

		const { initials } = req.params
		const deleteTeamUseCase = container.resolve(DeleteTeamUseCase)
		await deleteTeamUseCase.execute(initials.toUpperCase())

		return res.status(204).send()
    
	}
}
export { DeleteTeamController }
