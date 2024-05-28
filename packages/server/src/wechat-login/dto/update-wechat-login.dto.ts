import { PartialType } from '@nestjs/mapped-types';
import { CreateWechatLoginDto } from './create-wechat-login.dto';

export class UpdateWechatLoginDto extends PartialType(CreateWechatLoginDto) {}
