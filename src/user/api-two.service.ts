import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserP } from './api-two.entity';

@Injectable()
export class ApiTwoService {
  constructor(@InjectRepository(UserP) private repo: Repository<UserP>) {}
  async userCreate(user) {
    const userRes = await this.repo.create({
      name: user.name,
    });
    await this.repo.save(userRes);
    return userRes;
  }

  async getUser() {
    return await this.repo.find();
  }
}
