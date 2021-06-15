import { DynamicModule, Module } from '@nestjs/common'
import { ConfigFactory, ConfigModule, ConfigService } from '@nestjs/config'
import { GraphQLModule } from '@nestjs/graphql'
import { dgraphConfig, DGraphModule } from '../dgraph'
import { GraphqlOptions } from './config/graphql-options'
import { GraphqlServerConfig } from './config/graphql-server.config'

@Module({})
export class GraphqlServerModule {
  static register(config: ConfigFactory<GraphqlServerConfig>): DynamicModule {
    return {
      imports: [
        GraphQLModule.forRootAsync({
          imports: [ConfigModule.forFeature(config)],
          useClass: GraphqlOptions,
          inject: [ConfigService],
        }),
      ],
      module: GraphqlServerModule,
    }
  }
}
