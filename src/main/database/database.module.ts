/*
 * @Author: Fanpingfan
 * @Date: 2021-07-20 15:08:19
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 15:43:40
 */
import { Global, Module } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { DatabaseController } from './database.controller';

@Global()
@Module({
  controllers: [DatabaseController],
  providers: [DatabaseService],
  exports:[DatabaseService]
})
export class DatabaseModule {}
