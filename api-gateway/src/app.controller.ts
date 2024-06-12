import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { CreateUserRequest } from './dtos/create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(
    @Inject('SERVICE_ONE') private readonly serviceOneClient: ClientProxy,
    @Inject('SERVICE_TWO') private readonly serviceTwoClient: ClientProxy,
  ) {}

  @Get('service-one')
  async getServiceOneData() {
    return this.serviceOneClient.send({ cmd: 'get-data' }, {});
  }

  @Get('service-two')
  async getServiceTwoData() {
    return this.serviceTwoClient.send({ cmd: 'get-data' }, {});
  }
}
