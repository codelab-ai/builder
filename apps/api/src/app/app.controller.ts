import { Controller, Get } from '@nestjs/common'

@Controller()
export class AppController {
  /**
   * Used by wait-on to check server status in gqlgen
   */
  @Get()
  getData() {
    return 'Heath check successful'
  }
}
