import {MigrationInterface, QueryRunner, Table} from "typeorm";
import { PlainObjectToNewEntityTransformer } from "typeorm/query-builder/transformer/PlainObjectToNewEntityTransformer";

export default class CreateTransactions1597266947281 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable( new Table({
            name: 'transactions',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                },
                {
                    name: 'title',
                    type: 'varchar',
                },
                {
                    name: 'type',
                    type: 'varchar',
                },
                {
                    name: 'value',
                    type: 'decimal',
                    precision: 10,
                    scale: 2,
                },
                {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                },
                {
                    name: 'updated_at',
                    type: 'timestamp',
                    default: 'now()',
                }
            ]
        })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('transactions');
    }

}
