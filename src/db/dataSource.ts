import { config } from 'dotenv'
import { DataSource } from 'typeorm'

import { entities } from '../entities'
import { migrations } from '../migrations'

config()

const dataSource = new DataSource({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  type: 'mssql',
  port: 1433,
  synchronize: true,
  logging: false,
  entities, // TODO: make glob patterns works -> ["src/entities/*{.ts,.js}"]
  migrations, // TODO: make glob patterns works -> ["src/migrations/*{.ts,.js}"]
})

export default dataSource
