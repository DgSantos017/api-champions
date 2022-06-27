import { Request, Response } from 'express'
import { container } from 'tsyringe'

import { StartCompetitionUseCase } from './StartCompetitionUseCase'


class StartCompetitionController {

	async handle(req: Request, res: Response): Promise<Response>{

		const  { id } = req.params
		const { confrontation, winner, phase, championship } = req.body
  
		const updateChampionshipUseCase = container.resolve(StartCompetitionUseCase)
		await updateChampionshipUseCase.execute({id, confrontation, winner, phase, championship})

		return res.json('ok')
    
	}
}
export { StartCompetitionController }

