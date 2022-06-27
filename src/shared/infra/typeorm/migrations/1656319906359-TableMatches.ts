import {MigrationInterface, QueryRunner, Table} from 'typeorm'

export class TableMatches1656319906359 implements MigrationInterface {

	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.createTable(
			new Table (
				{
					name: 'table_matches',
					columns: [
						{
							name: 'id',
							type: 'uuid',
							isPrimary: true,
							isUnique: true
						},
						{
							name: 'championship',
							type: 'varchar'
						},
						{
							name: 'mathces',
							type: 'varchar'
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
