import { Injectable } from '@nestjs/common';
import { CaptchaTool } from 'src/utils/CaptchaTool';
import { RedisModule } from 'src/utils/modules/redis.module';

@Injectable()
export class UserService {
  constructor(
    private readonly captchaTool: CaptchaTool,
    private readonly redis: RedisModule,
  ) {}

  /**
   * 图形验证码服务
   */
  async getCaptcha(key: string, type: string) {
    const svgCaptcha = await this.captchaTool.captche();
    this.redis.set(`${type}:captcha:${key}`, svgCaptcha.text, 600);
    return { data: svgCaptcha.data, text: svgCaptcha.text };
  }
}
