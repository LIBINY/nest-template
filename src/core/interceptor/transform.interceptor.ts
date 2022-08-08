/*
 * @Author: chenlibin
 * @Date: 2022-08-08 16:55:55
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-08-08 16:57:56
 * @FilePath: /src/core/interceptor/transform.interceptor.ts
 * @Description:
 */
import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { map, Observable } from 'rxjs';

@Injectable()
export class TransformInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      map((data) => {
        return {
          data,
          code: 0,
          msg: '请求成功',
        };
      }),
    );
  }
}
