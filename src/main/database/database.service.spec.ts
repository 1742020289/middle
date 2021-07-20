/*
 * @Author: Fanpingfan
 * @Date: 2021-07-20 15:08:19
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:52:10
 */
import { Test, TestingModule } from '@nestjs/testing';
import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  let service: DatabaseService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DatabaseService],
    }).compile();

    service = module.get<DatabaseService>(DatabaseService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
