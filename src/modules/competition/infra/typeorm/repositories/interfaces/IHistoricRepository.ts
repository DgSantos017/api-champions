import { HistoricMatche } from '../../entities/HistoricMatche'

interface IHistoricRepository {
  findById(id: string): Promise<HistoricMatche>
}

export { IHistoricRepository }
