import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RedisModule } from './utils/modules/redis.module';
import { UserModule } from './user/user.module';
import { typeOrmConfig, redisConfig } from '../config';

@Module({
  imports: [
    TypeOrmModule.forRoot(typeOrmConfig),
    UserModule,
    RedisModule.forRoot(redisConfig),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
