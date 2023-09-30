import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { LoggerService } from './utils/logger/Mylogger.service';
const myLogger = new LoggerService();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(3000, () => myLogger.customLog('Servidor rodando!'));
}
bootstrap();
