import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DeleteChampionshipUseCase } from './DeleteChampionshipUseCase'

class DeleteChampionshipController {

	async handle(req: Request, res: Response): Promise<Response>{

		const { id } = req.params
		const deleteChampionshipUseCase = container.resolve(DeleteChampionshipUseCase)
		await deleteChampionshipUseCase.execute(id)

		return res.status(204).send()
    
	}
}
export { DeleteChampionshipController }
