import { Inject, Injectable } from '@nestjs/common';
import { CreateUserRequest } from './dtos/create-user-request.dto';
import { ClientProxy } from '@nestjs/microservices';
import { CreateUserEvent } from './events/create-user.event';

@Injectable()
export class AppService {
  private readonly users: any[] = [];

  constructor() {}
  getHello(): string {
    return 'Hello World!';
  }
}
