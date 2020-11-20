import * as Joi from '@hapi/joi'
import { Module } from '@nestjs/common'
import { ConfigModule as NestConfigModule } from '@nestjs/config'
import { ApiConfig, ApiConfigTypes, config } from './config'
import {
  ConfigGraphqlHasuraService,
  ConfigTypeormHasuraService,
} from './hasura'
import { ConfigJwtService } from './jwt'
import { envPath, envs, isDev } from '@codelab/shared/utils'

@Module({
  imports: [
    NestConfigModule.forRoot({
      isGlobal: true,
      load: [config],
      /**
       * Only load locally
       */
      envFilePath: isDev ? envPath() : '',
      ignoreEnvFile: !isDev,
      validationSchema: Joi.object<ApiConfig>({
        [ApiConfigTypes.CODELAB_ENV]: Joi.string().valid(...envs),
        // Typeorm
        [ApiConfigTypes.TYPEORM_SEED]: Joi.string().valid('true', 'false'),
        [ApiConfigTypes.TYPEORM_DROP_SCHEMA]: Joi.string().valid(
          'true',
          'false',
        ),
        [ApiConfigTypes.TYPEORM_SYNCHRONIZE]: Joi.string().valid(
          'true',
          'false',
        ),
        // Postgres DB
        [ApiConfigTypes.POSTGRES_HOST]: Joi.string().required(),
        [ApiConfigTypes.POSTGRES_PORT]: Joi.number().required(),
        [ApiConfigTypes.POSTGRES_USER]: Joi.string().required(),
        [ApiConfigTypes.POSTGRES_PASSWORD]: Joi.string().required(),
        [ApiConfigTypes.POSTGRES_DB]: Joi.string().required(),
        // Hasura
        [ApiConfigTypes.HASURA_GRAPHQL_ADMIN_SECRET]: Joi.string().required(),
        [ApiConfigTypes.HASURA_GRAPHQL_URI]: Joi.string().required(),
      }),
    }),
  ],
  providers: [
    ConfigTypeormHasuraService,
    ConfigGraphqlHasuraService,
    ConfigJwtService,
  ],
  exports: [
    ConfigTypeormHasuraService,
    ConfigGraphqlHasuraService,
    ConfigJwtService,
  ],
})
export class ConfigModule {}
