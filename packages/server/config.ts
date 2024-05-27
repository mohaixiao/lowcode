import type { TypeOrmModuleOptions } from "@nestjs/typeorm";

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
