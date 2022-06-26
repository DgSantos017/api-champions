import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('championship')
class Championship {

	@PrimaryColumn()
		id: string

	@Column()
		name: string

	@Column()
		description: string
	
	@Column()
		number_teams: number

	@Column()
		award: string

	@CreateDateColumn()
		created_at: Date

	constructor(){
		if(!this.id){
			this.id = uuid()
		}
	}

}
export { Championship }