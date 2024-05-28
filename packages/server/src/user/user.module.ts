import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { CaptchaTool } from '../utils/CaptchaTool';
import { SecretTool } from '../utils/SecretTool';

@Module({
  controllers: [UserController],
  providers: [
    UserService,
    CaptchaTool,
    SecretTool,
  ],
})
export class UserModule {}
