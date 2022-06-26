import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

@Entity('teams')
class Team {

	@PrimaryColumn()
		id: string

	@Column()
		initials: string
	
	@Column()
		name: string

	@Column()
		number_wins: number
	
	@CreateDateColumn()
		created_at: Date

	constructor(){
		if(!this.id){
			this.id = uuid()
		}
	}
	

}
export { Team }
