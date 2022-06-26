import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListChampionshipUseCase } from './ListChampionshipsUseCase'

class ListChampionshipsController {

	async handle(req: Request, res: Response): Promise<Response>  {

		const listChampionshipsUseCase = container.resolve(ListChampionshipUseCase)
		const championships = await listChampionshipsUseCase.execute()
		return res.json(championships)
    
	}
}

export { ListChampionshipsController }
