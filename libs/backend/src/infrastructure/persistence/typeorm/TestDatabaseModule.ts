import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { SnakeNamingStrategy } from 'typeorm-naming-strategies'
import { TestDatabaseConfig } from '../config/TestDatabaseConfig'
import {
  TypeOrmEdge,
  TypeOrmGraph,
  TypeOrmPage,
  TypeOrmUser,
  TypeOrmVertex,
} from './entity'

@Module({
  imports: [
    TypeOrmModule.forRoot({
      name: 'default',
      type: 'postgres',
      host: TestDatabaseConfig.DB_HOST,
      port: TestDatabaseConfig.DB_PORT,
      username: TestDatabaseConfig.DB_USERNAME,
      password: TestDatabaseConfig.DB_PASSWORD,
      database: TestDatabaseConfig.DB_NAME,
      entities: [
        TypeOrmEdge,
        TypeOrmGraph,
        TypeOrmUser,
        TypeOrmVertex,
        TypeOrmPage,
      ],
      synchronize: true,
      dropSchema: false,
      logging: ['query', 'error', 'schema'],
      namingStrategy: new SnakeNamingStrategy(),
    }),
  ],
})
export class TestDatabaseModule {}