import { JwtModuleOptions } from '@nestjs/jwt';
import type { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { RedisOptions } from 'ioredis';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: "mysql",
  host: "8.130.152.160",
  port: 3306,
  username: "root",
  password: "xdclass.net168",
  database: "xdclass-lowcode", // 创建的数据库名字为准，而不是容器名
  entities: ["dist/**/*.entity{.ts,.js}"],
  autoLoadEntities: true, // 开发环境使用
  synchronize: true, // 项目启动自动同步数据库的表和字段
};


// redis 配置
export const redisConfig: RedisOptions = {
  port: 6379,
  host: "8.130.152.160",
  password: 'xdclass.net168',
};

// 短信服务参数
export const xdclassConfig = {
  appid: 'GSs03c0jyWIWxVqRVK',
  appSecret: 'EKuQ1rfa2w5MX2Tue55GeTR9U1URoMJe',
};

// token 参数配置
export const jwtConfig: JwtModuleOptions = {
  secret: 'xdclass.net',
  signOptions: { expiresIn: '7d' },
  global: true,
};

// 微信登录参数配置
export const wechatLoginConfig = {
  appId: 'GSs03c0jyWIWxVqRVK',
  appSecret: 'EKuQ1rfa2w5MX2Tue55GeTR9U1URoMJe',
  qrUrl: 'https://mp.weixin.qq.com/cgi-bin/showqrcode',
  token: 'testxdclass',
};
