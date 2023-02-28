import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const confgigService = app.get(ConfigService);
  const port = confgigService.get('port');
  await app.listen(port);
}
bootstrap();
