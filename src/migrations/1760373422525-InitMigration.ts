import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1760373422525 implements MigrationInterface {
    name = 'InitMigration1760373422525'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`suppliers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` int NOT NULL, \`address\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`suppliers\``);
    }

}
