/*
 * @Author: chenlibin
 * @Date: 2022-08-08 16:24:33
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-08-08 16:25:05
 * @FilePath: /demo/nest-template/src/main.ts
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  await app.listen(3000);
}
bootstrap();
