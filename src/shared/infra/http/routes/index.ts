import { Router } from 'express'
import { championshipRoutes } from './championships/championship.route'
import { teamsRoutes } from './teams/teams.routes'

const router = Router()

router.use('/teams', teamsRoutes)
router.use('/championships', championshipRoutes)

export { router }
