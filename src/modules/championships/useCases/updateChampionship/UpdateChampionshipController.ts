import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { UpdateChampionshipUseCase } from './UpdateChampionshipUseCase'

class UpdateChampionshipController {

	async handle(req: Request, res: Response): Promise<Response>{

		const  { id } = req.params
		const dataChampionship = req.body
  
		const updateChampionshipUseCase = container.resolve(UpdateChampionshipUseCase)
		const championship = await updateChampionshipUseCase.execute({id, dataChampionship})

		return res.json(championship)
    
	}
}
export { UpdateChampionshipController }

