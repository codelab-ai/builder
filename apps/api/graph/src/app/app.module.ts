import { Module, OnModuleInit } from '@nestjs/common'
import * as shell from 'shelljs'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ConfigModule } from '@codelab/api/providers/config'
import {
  EdgeModule,
  GraphModule,
  HasuraModule,
  OrmModule,
  VertexModule,
} from '@codelab/api/services/graph'
import { ApiServicesUserModule } from '@codelab/api/services/user'

@Module({
  imports: [
    // RouterModule,
    // LoggerModule,
    ConfigModule.forRoot(),
    HasuraModule,
    OrmModule,
    VertexModule,
    EdgeModule,
    VertexModule,
    GraphModule,
    ApiServicesUserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements OnModuleInit {
  onModuleInit(): any {
    if (process.argv.includes('--reset')) {
      if (
        shell.exec(
          `npx hasura metadata apply \
          --project apps/api/graph/.hasura \
          --envfile .env`,
        ).code !== 0
      ) {
        shell.echo('"hasura metadata apply" failed')
        shell.exit(1)
      }
    }
  }
}