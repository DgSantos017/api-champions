import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { UpdateTeamUseCase } from './UpdateTeamUseCase'

class UpdateTeamController {

	async handle(req: Request, res: Response): Promise<Response>{

		const  { id } = req.params
		const objTeamData = req.body
  
		const updateTeamUseCase = container.resolve(UpdateTeamUseCase)
		const result = await updateTeamUseCase.execute({id, objTeamData})

		return res.json(result)
    
	}
}
export { UpdateTeamController }
