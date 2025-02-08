import { MigrationInterface, QueryRunner } from "typeorm";

export class ChartInfoAddSqlColumn1737210928651 implements MigrationInterface {
    name = 'ChartInfoAddSqlColumn1737210928651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chart_info" ADD "sql" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "chart_info" DROP COLUMN "sql"`);
    }

}
