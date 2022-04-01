import { Module } from '@nestjs/common';
import { ApiTwoController } from './api-two.controller';
import { ApiTwoService } from './api-two.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserP } from './api-two.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserP])],
  controllers: [ApiTwoController],
  providers: [ApiTwoService],
})
export class ApiTwoModule {}
