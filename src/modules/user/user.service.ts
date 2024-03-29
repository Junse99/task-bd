import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor (
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ){ }

  async getAllUsers(){
    return await this.userRepository.find()
  }

  async createUser(body){
    console.log(body)
    return await this.userRepository.save(body)
  }
}
