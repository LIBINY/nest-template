/*
 * @Author: chenlibin
 * @Date: 2022-08-08 17:59:48
 * @LastEditors: chenlibin
 * @LastEditTime: 2022-09-06 10:12:19
 * @FilePath: /src/user/user.service.ts
 * @Description:
 */
import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  create(createUserDto: CreateUserDto): Promise<User> {
    return this.userRepository.save(createUserDto);
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: number): Promise<User> {
    return this.userRepository.findOne({ where: { id } });
  }

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const userData = await this.findOne(id);
    if (!userData) {
      throw new HttpException(`id为${id}的用户不存在`, 200);
    }
    const updateUserData = this.userRepository.merge(userData, updateUserDto);
    return this.userRepository.save(updateUserData);
  }

  async remove(id: number): Promise<void> {
    const isExist = await this.findOne(id);
    if (!isExist) {
      throw new HttpException(`id为${id}的用户不存在`, 200);
    }
    await this.userRepository.delete(id);
  }
}
