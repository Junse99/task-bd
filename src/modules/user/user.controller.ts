import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService: UserService){}

  @Get('/all')
  async getAllUsers(){
    return await this.userService.getAllUsers()
  }

  @Post()
  async createUser (@Body() body){
    return await this.userService.createUser(body)
  }

}
