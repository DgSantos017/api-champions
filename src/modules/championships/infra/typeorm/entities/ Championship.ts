import { Column, CreateDateColumn, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn } from 'typeorm'
import { v4 as uuid } from 'uuid'

import { Team } from '../../../../teams/infra/typeorm/entities/Team'

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

		@ManyToMany(() => Team)
    @JoinTable()
			teams: Team[]

		constructor(){
			if(!this.id){
				this.id = uuid()
			}
		}

}
export { Championship }
