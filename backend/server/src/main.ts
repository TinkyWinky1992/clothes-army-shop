import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule} from  'src/module'
import serverless from 'serverless-http';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = '.netlify/functions/main';
  app.setGlobalPrefix(globalPrefix);
  await app.init();

  const expressApp = app.getHttpAdapter().getInstance();
  return serverless(expressApp)
}

let server;
export const handler = async (event, context, callback) => {
  server = server ?? (await bootstrap());
  return server(event, context, callback);
};