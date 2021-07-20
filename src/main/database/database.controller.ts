/*
 * @Author: Fanpingfan
 * @Date: 2021-07-20 15:08:19
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:40:28
 */
import { Controller } from '@nestjs/common';
import { DatabaseService } from './database.service';

@Controller('database')
export class DatabaseController {
  constructor(private readonly databaseService: DatabaseService) {}
}
