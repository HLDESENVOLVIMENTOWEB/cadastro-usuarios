import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsers1616950598726 implements MigrationInterface {

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
                        name:"nome",
                        type:"varchar",
                    },
                    {
                        name:"email",
                        type:"varchar",
                        isUnique:true
                    },
                    {
                        name:"dataNascimento",
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
