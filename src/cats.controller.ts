import { Controller, Post } from '@nestjs/common';
import { CatsService } from './cats.service';

@Controller()
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  async create(): Promise<void> {
    await this.catsService.create();
  }
}
