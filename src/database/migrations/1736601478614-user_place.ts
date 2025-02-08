import { MigrationInterface, QueryRunner } from "typeorm";

export class UserPlace1736601478614 implements MigrationInterface {
    name = 'UserPlace1736601478614'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "place" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "place"`);
    }

}
