import { ApiProperty } from '@nestjs/swagger';

/*
 * @Author: chenlibin
 * @Date: 2022-08-08 17:59:48
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-09-06 09:20:29
 * @FilePath: /src/user/dto/create-user.dto.ts
 * @Description:
 */
export class CreateUserDto {
  @ApiProperty({ description: '用户名' })
  readonly userName: string;
  @ApiProperty({ description: '密码' })
  readonly password: string;
  @ApiProperty({ description: '邮箱' })
  readonly email: string;
  @ApiProperty({ description: '手机号' })
  readonly phone: string;
}
