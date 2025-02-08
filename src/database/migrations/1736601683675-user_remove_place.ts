import { MigrationInterface, QueryRunner } from "typeorm";

export class UserRemovePlace1736601683675 implements MigrationInterface {
    name = 'UserRemovePlace1736601683675'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "place"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "place" character varying NOT NULL`);
    }

}
