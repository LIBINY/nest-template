/*
 * @Author: chenlibin
 * @Date: 2022-08-08 17:59:48
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-09-06 14:07:28
 * @FilePath: /src/user/dto/create-user.dto.ts
 * @Description:
 */
import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  @IsNotEmpty({ message: '用户名不能为空' })
  readonly userName: string;

  @ApiProperty({ description: '密码' })
  @IsNotEmpty({ message: '密码不能为空' })
  @MinLength(6, {
    message: '密码太短， 最短为 $constraint1 个字符, 当前是 $value',
  })
  @MaxLength(10, {
    message: '密码太长， 最长为 $constraint1 个字符, 当前是 $value',
  })
  readonly password: string;

  @ApiProperty({ description: '邮箱' })
  @IsNotEmpty({ message: '邮箱不能为空' })
  @IsEmail()
  readonly email: string;

  @ApiProperty({ description: '手机号' })
  @IsNotEmpty({ message: '手机号不能为空' })
  readonly phone: string;
}
