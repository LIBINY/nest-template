/*
 * @Author: chenlibin
 * @Date: 2022-08-08 17:59:48
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-09-06 14:18:40
 * @FilePath: /src/user/entities/user.entity.ts
 * @Description:
 */
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  userName: string;
  @Column({ select: false })
  password: string;
  @Column()
  email: string;
  @Column()
  phone: string;
}
