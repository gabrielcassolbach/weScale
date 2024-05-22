import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dynamoose from 'dynamoose';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Create new DynamoDB instance

  const ddb = new dynamoose.aws.ddb.DynamoDB({
    credentials: {
      accessKeyId: process.env.DB_ACCESS_KEY,
      secretAccessKey: process.env.DB_SECRET_ACCESS_KEY,
    },
    region: 'us-east-2',
  });

  // Set DynamoDB instance to the Dynamoose DDB instance
  dynamoose.aws.ddb.set(ddb);

  await app.listen(3000);
}
bootstrap();
