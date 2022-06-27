import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class HistoricMatches1656315630894 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table (
				{
					name: 'historic_matches',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							isUnique: true
						},
						{
							name: 'confrontation',
							type: 'varchar'
						},
						{
							name: 'winner',
							type: 'varchar'
						},
						{
							name: 'phase',
							type: 'varchar'
						},
						{
							name: 'championship',
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
		await queryRunner.dropTable('historic_matches')
	}
}
