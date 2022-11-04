import { Module } from '@nestjs/common';
import { CliTestService } from './cli-test.service';

@Module({
  imports: [],
  providers: [CliTestService],
})
export class CliTestModule {}
