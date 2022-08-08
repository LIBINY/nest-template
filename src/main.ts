/*
 * @Author: chenlibin
 * @Date: 2022-08-08 16:24:33
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-08-08 16:41:56
 * @FilePath: /src/main.ts
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  app.useGlobalFilters(new HttpExceptionFilter()); //注册全局异常过滤器
  await app.listen(3000);
}
bootstrap();
