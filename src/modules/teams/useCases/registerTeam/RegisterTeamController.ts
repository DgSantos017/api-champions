import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterTeamUseCase } from './RegisterTeamUseCase'

class RegisterTeamController {

	async handle(req: Request, res: Response): Promise<Response> {

		const { initials, name } = req.body
		const regsiterTeamUseCase = container.resolve(RegisterTeamUseCase)
	  const team =	await regsiterTeamUseCase.execute({ initials, name })

		return res.status(201).json(team)
	}

}
export { RegisterTeamController }
