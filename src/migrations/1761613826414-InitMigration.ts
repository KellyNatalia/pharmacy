import { MigrationInterface, QueryRunner } from "typeorm";

export class InitMigration1761613826414 implements MigrationInterface {
    name = 'InitMigration1761613826414'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`suppliers\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` int NOT NULL, \`address\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`product\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`stock\` int NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`proveedorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`sale_detail\` (\`id\` int NOT NULL AUTO_INCREMENT, \`cantidad\` int NOT NULL, \`precio_unitario\` decimal NOT NULL, \`ventaId\` int NULL, \`productoId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`Sale\` (\`id\` int NOT NULL AUTO_INCREMENT, \`fecha_venta\` datetime NOT NULL, \`total\` decimal NOT NULL, \`usuarioId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, \`email\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`status\` tinyint NOT NULL DEFAULT 1, \`role\` varchar(255) NOT NULL DEFAULT 'user', UNIQUE INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`product\` ADD CONSTRAINT \`FK_867de6be105f282f64298d0dd80\` FOREIGN KEY (\`proveedorId\`) REFERENCES \`suppliers\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` ADD CONSTRAINT \`FK_642cf1f3aa82726e7e110864c9e\` FOREIGN KEY (\`ventaId\`) REFERENCES \`Sale\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` ADD CONSTRAINT \`FK_54b9ccd63cb7f282dbeb361fdbc\` FOREIGN KEY (\`productoId\`) REFERENCES \`product\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`Sale\` ADD CONSTRAINT \`FK_3ca4d04db57b925f6ac460f6e60\` FOREIGN KEY (\`usuarioId\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`Sale\` DROP FOREIGN KEY \`FK_3ca4d04db57b925f6ac460f6e60\``);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` DROP FOREIGN KEY \`FK_54b9ccd63cb7f282dbeb361fdbc\``);
        await queryRunner.query(`ALTER TABLE \`sale_detail\` DROP FOREIGN KEY \`FK_642cf1f3aa82726e7e110864c9e\``);
        await queryRunner.query(`ALTER TABLE \`product\` DROP FOREIGN KEY \`FK_867de6be105f282f64298d0dd80\``);
        await queryRunner.query(`DROP INDEX \`IDX_e12875dfb3b1d92d7d7c5377e2\` ON \`user\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`Sale\``);
        await queryRunner.query(`DROP TABLE \`sale_detail\``);
        await queryRunner.query(`DROP TABLE \`product\``);
        await queryRunner.query(`DROP TABLE \`suppliers\``);
    }

}
