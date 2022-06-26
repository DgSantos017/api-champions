import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class RegisterChampionship1656206617734 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table (
				{
					name: 'championship',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true
						},
						{
							name: 'name',
							type: 'varchar',
							isUnique: true
						},
						{
							name: 'description',
							type: 'varchar'
						},
						{
							name: 'number_teams',
							type: 'numeric'
						},
						{
							name: 'award',
							type: 'varchar'
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
		await queryRunner.dropTable('championship')
	}
}
