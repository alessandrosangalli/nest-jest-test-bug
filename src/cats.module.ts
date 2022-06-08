import { Module } from '@nestjs/common';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';
import { HttpClient } from './http-client';

@Module({
  imports: [],
  controllers: [CatsController],
  providers: [CatsService, HttpClient],
})
export class CatsModule {}
