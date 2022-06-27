import { Router } from 'express'

import { StartCompetitionController } from '../../../../../modules/competition/useCases/startCompetition/StartCompetitionController'

const startRoutes = Router()

const startCompetitionController = new StartCompetitionController()

startRoutes.post('/:id', startCompetitionController.handle)

export { startRoutes }
