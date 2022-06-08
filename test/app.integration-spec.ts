import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { CatsController } from '../src/cats.controller';
import { CatsModule } from '../src/cats.module';
import { HttpClient } from '../src/http-client';

describe('Cats', () => {
  let app: INestApplication;
  let catsController: CatsController;
  let httpClient: HttpClient;
  let httpClientSpies = {
    post: null,
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [CatsModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
    catsController = moduleFixture.get<CatsController>(CatsController);
    httpClient = await moduleFixture.resolve<HttpClient>(HttpClient);
    httpClientSpies = {
      post: jest.spyOn(HttpClient.prototype, 'post'),
    };
  });

  describe('Cats', () => {
    it('Should create a cat', async () => {
      await catsController.create();
      expect(httpClientSpies.post).toBeCalled();
    });
  });
});
