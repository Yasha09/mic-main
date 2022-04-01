import { Controller, Get } from '@nestjs/common';
import { ApiTwoService } from './api-two.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';

@Controller('api-two')
export class ApiTwoController {
  constructor(private userService: ApiTwoService) {}

  @EventPattern('register_user')
  async userRegister(user) {
    console.log('user ', user);
    return this.userService.userCreate(user);
  }

  @Get('get_user')
  async getUser() {
    return this.userService.getUser();
  }
}
