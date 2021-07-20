/*
 * @Author: Fanpingfan
 * @Date: 2021-07-20 10:52:19
 * @LastEditors: Fanpingfan
 * @LastEditTime: 2021-07-20 14:38:03
 */
import { NestFactory } from '@nestjs/core';
import { Logger } from '@/util/logger';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { config } from './util/base/config';
import { AppModule } from './app.module';

async function bootstrap() {

  // 创建服务app
  const app = await NestFactory.create(AppModule, {
    logger: new Logger()
  });

  /** openapi 参数选项设定 */
  const options = new DocumentBuilder()
    .setTitle('Goodo Middletier Openapi')
    .setDescription('Openapi for Goodo Middletier Server')
    .setVersion('2.0')
    .addServer(`http://localhost:7530/${config.API_PREFIX.replace('/', '')}/${config.API_VERSION}`)
    .build();

  // 创建openapi文档系统
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  // 注册服务的路由前缀
  app.setGlobalPrefix(`${config.API_PREFIX}/${config.API_VERSION}`);

  // 注册服务监听端口
  await app.listen(config.SERVER_PORT || 7530);


  console.log(`Port ${config.SERVER_PORT} is running!`);
}
bootstrap();
