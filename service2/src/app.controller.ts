import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  @MessagePattern({ cmd: 'get-data' })
  async getData() {
    return { data: 'Data from Service Two' };
  }
}
