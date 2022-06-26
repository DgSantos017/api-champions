import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RegisterChampionshipUseCase } from './RegisterChampionshipUseCase'

class RegisterChampionshipController {

	async handle(req: Request, res: Response): Promise<Response> {

		const { name, description, award, number_teams } = req.body
		const regsiterChampionshipUseCase = container.resolve(RegisterChampionshipUseCase)
	  const championship =	await regsiterChampionshipUseCase.execute({ name, description, award, number_teams})

		return res.status(201).json(championship)
	}

}
export { RegisterChampionshipController }
