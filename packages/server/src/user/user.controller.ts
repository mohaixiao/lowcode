import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { GetUserIp, GetUserAgent } from '../utils/GetUserMessTool';
import { SecretTool } from 'src/utils/SecretTool';
import { CaptchaDto } from './dto/captcha.dto';

@Controller('user')
export class UserController {
  constructor(
    private readonly userService: UserService,
    private readonly secretTool: SecretTool,
  ) {}

  /**
   * 图像验证码
   *
   */
  @Post('captcha')
  getCaptcha(
    @Body() body: CaptchaDto,
    @GetUserIp() ip: string,
    @GetUserAgent() agent: string,
  ) {
    const { type } = body;
    // 用户的ip+设备加密
    const _key = this.secretTool.getSecret(ip + agent);
    return this.userService.getCaptcha(_key, type);
  }
}
