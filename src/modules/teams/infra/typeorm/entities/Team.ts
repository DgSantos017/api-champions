import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity('teams')
class Team {

	@PrimaryColumn()
		initials: string

	@Column()
		name: string
	
	@Column()
		number_wins: number
	
	@CreateDateColumn()
		created_at: Date

}
export { Team }
