import { Injectable } from '@nestjs/common';
import { xd } from "@lowcode/share";

@Injectable()
export class AppService {
  getHello(): string {
    return `${xd}`;
  }
}
