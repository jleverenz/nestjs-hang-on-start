import { NestFactory } from '@nestjs/core';
import { CliTestModule } from './cli-test.module';
import { CliTestService } from './cli-test.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(CliTestModule);
  app.get(CliTestService).run();
}
bootstrap();
