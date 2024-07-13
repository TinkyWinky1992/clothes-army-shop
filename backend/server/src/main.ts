import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule} from  'src/module'
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(5000);
}
bootstrap();
