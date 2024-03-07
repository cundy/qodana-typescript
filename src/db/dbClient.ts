import { DataSource } from 'typeorm'

import dataSource from './dataSource'

let dbClient: DataSource

export const getDbClient = async (): Promise<DataSource> => {
  if (!dbClient) {
    dbClient = await dataSource.initialize()
    return dbClient
  }

  return dbClient
}
