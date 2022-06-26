import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListChampionhipByIdUseCase } from './ListChampionsByIdUseCase'

class ListChampionshipByIdController {

	async handle(req: Request, res: Response): Promise<Response>{

		const { id } = req.params
		const listChampionshipByIdUseCase = container.resolve(ListChampionhipByIdUseCase)
		const championship = await listChampionshipByIdUseCase.execute(id)

		return res.json(championship)
    
	}
}
export { ListChampionshipByIdController }
