## Resources:

- [ORM](https://typeorm.io/)
- [Mssql driver](https://typeorm.io/data-source-options#mssql-data-source-options)

## Issues / Challenges

- Migrations of Stored Procedure with `GO` statement
  Db connections pools with serverless functions
  Set your serverless concurrency limit to a number lower than the maximum connection limit
  https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#serverless-environments-faas
  https://www.prisma.io/docs/orm/prisma-client/setup-and-configuration/databases-connections#the-serverless-challenge

## Question after demo

- To avoid SQL injection we need to use typeorm parameter => https://typeorm.io/select-query-builder#using-parameters-to-escape-data
