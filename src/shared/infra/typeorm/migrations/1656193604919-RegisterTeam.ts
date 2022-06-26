import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class RegisterTeam1656193604919 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table (
				{
					name: 'teams',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							isUnique: true
						},
						{
							name: 'initials',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'name',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'number_wins',
							type: 'numeric',
							default: 0
						},
						{
							name: 'created_at',
							type: 'timestamp',
							default: 'now()'
						}
					]
				}
			)
		)
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.dropTable('teams')
	}
}
