import { MigrationInterface, QueryRunner, Table } from "typeorm"

export class CreateTablePessoas1693518425266 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"pessoas",
                columns:[
                    {
                       name:"id",
                       type:"uuid",
                    },
                    {
                        name:"name",
                        type:"varchar",
                    },
                    {
                        name:"email",
                        type:"varchar"
                    },
                    {
                        name:"dantaNascimeto",
                        type:"varchar",
                    },
                    {
                        name:"created_at",
                        type:"timestamp",
                        default:"now()"
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("pessoas")
    }

}
