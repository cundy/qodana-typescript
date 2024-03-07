import { MigrationInterface, QueryRunner } from 'typeorm'

export class ProcWithParam1707507763456 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`
        IF EXISTS (SELECT * FROM INFORMATION_SCHEMA.ROUTINES WHERE SPECIFIC_SCHEMA = N'dbo' AND SPECIFIC_NAME = N'StoredProcedureName' AND ROUTINE_TYPE = N'PROCEDURE')
            DROP PROCEDURE dbo.StoredProcedureName
        `)
    await queryRunner.query(
      `CREATE PROCEDURE [dbo].[StoredProcedureName] @completed int = 0 AS 
          BEGIN
            SELECT * from dbo.Todo as todo where todo.completed = @completed
          END
            `,
    )
  }

  public async down(_: QueryRunner): Promise<void> {}
}
