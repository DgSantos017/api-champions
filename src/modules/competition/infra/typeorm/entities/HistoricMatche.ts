import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('historicMatches')
class HistoricMatche {

	@PrimaryColumn()
		id: string

	@Column()
		confrontation: string

	@Column()
		winner: string
	
	@Column()
		phase: number

	@Column()
		championship: string

	@CreateDateColumn()
		created_at: Date

	constructor(){
		if(!this.id){
			this.id = uuid()
		}
	}

}
export { HistoricMatche }
