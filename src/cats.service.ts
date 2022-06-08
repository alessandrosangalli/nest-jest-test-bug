import { Injectable } from '@nestjs/common';
import { HttpClient } from './http-client';

@Injectable()
export class CatsService {
  constructor(private httpClient: HttpClient) {}

  async create(): Promise<void> {
    await this.httpClient.post();
  }
}
