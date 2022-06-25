import { Router } from 'express'
import { teamsRoutes } from './teams/teams.routes'

const router = Router()

router.use('/teams', teamsRoutes)

export { router }
