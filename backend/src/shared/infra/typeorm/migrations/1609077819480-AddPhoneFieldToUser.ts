import {MigrationInterface, QueryRunner, TableColumn} from "typeorm";

export class AddPhoneFieldToUser1609077819480 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
         await queryRunner.addColumn('users', new TableColumn({
            name: 'phone',
            type: 'varchar',
            isNullable: true,
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumn('users', 'phone');
    }

}
