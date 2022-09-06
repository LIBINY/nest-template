/*
 * @Author: chenlibin
 * @Date: 2022-08-08 17:59:48
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-09-06 10:32:51
 * @FilePath: /src/user/dto/update-user.dto.ts
 * @Description:
 */
import { PartialType } from '@nestjs/mapped-types';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @ApiPropertyOptional({ description: '用户名' })
  userName?: string;
  @ApiPropertyOptional({ description: '密码' })
  password?: string;
  @ApiPropertyOptional({ description: '手机号' })
  phone?: string;
}
