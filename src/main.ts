/*
 * @Author: chenlibin
 * @Date: 2022-08-08 16:24:33
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-09-05 17:06:27
 * @FilePath: /src/main.ts
 * @Description:
 */
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { HttpExceptionFilter } from './core/filter/http-exception.filter';
import { TransformInterceptor } from './core/interceptor/transform.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); // 设置全局路由前缀
  app.useGlobalFilters(new HttpExceptionFilter()); //注册全局异常过滤器
  app.useGlobalInterceptors(new TransformInterceptor()); //注册全局数据转换拦截器
  const config = new DocumentBuilder()
    .setTitle('管理后台')
    .setDescription('管理后台接口文档')
    .setVersion('1.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, document);
  await app.listen(3000);
}
bootstrap();
