import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { WechatLoginService } from './wechat-login.service';
import { CreateWechatLoginDto } from './dto/create-wechat-login.dto';
import { UpdateWechatLoginDto } from './dto/update-wechat-login.dto';

@Controller('wechat-login')
export class WechatLoginController {
  constructor(private readonly wechatLoginService: WechatLoginService) {}


}
