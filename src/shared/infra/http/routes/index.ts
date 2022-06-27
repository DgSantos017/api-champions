import { Router } from 'express'

import { championshipRoutes } from './championships/championship.route'
import { startRoutes } from './startCompetition/startCompetition.routes'
import { teamsRoutes } from './teams/teams.routes'

const router = Router()

router.use('/teams', teamsRoutes)
router.use('/championships', championshipRoutes)
router.use('/start', startRoutes)

export { router }
