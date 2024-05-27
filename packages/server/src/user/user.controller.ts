import { Controller, Post, Body, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { FindUserDto } from './dto/find-user.dto';
// import { GetUserIp, GetUserAgent } from '../utils/GetUserMessTool';
@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

@Get() 
findAll() {
  return this.userRepository.find();
}
  // @Post()
  // findAll(@GetUserIp() ip: string, @GetUserAgent() agent: string) {
  //   return { ip, agent };
  // }
}
