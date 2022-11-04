import { Injectable } from '@nestjs/common';

@Injectable()
export class CliTestService {
  run() {
    console.log('CliTestService:run');
  }
}
